import {
  createContext,
  memo,
  use,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const ItemContext = createContext<{
  index: number;
  control: {
    val: string;
    setValue: (val: string) => void;
  };
}>({
  index: -1,
  control: {
    val: "",
    setValue: (_: string) => {},
  },
});

const Provider = ({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  const [val, setVal] = useState("");

  const setValue = useCallback((s: string) => {
    setVal(s);
  }, []);

  const control = useMemo(() => {
    return {
      val,
      setValue,
    };
  }, [val]);

  return (
    <ItemContext
      value={{
        index,
        control,
      }}
    >
      <div className="array-item">{children}</div>
    </ItemContext>
  );
};

export default Provider;

export const useCustomArrayItemContext = () => {
  const context = use(ItemContext);
  if (!context) {
    throw new Error(
      "useCustomArrayItemContext must be used within an ItemContext.Provider",
    );
  }
  return context;
};
