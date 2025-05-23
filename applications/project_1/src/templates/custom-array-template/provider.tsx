import {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export const ItemContext = createContext<{
  index: number;
  control: {
    val: string;
    setValue: (val: string) => void;
  };
}>({
  index: -1,
  control: {
    val: '',
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
  const [val, setVal] = useState('');

  const setValue = useCallback((s: string) => {
    setVal(s);
  }, []);

  // Memoize context value to prevent unnecessary updates
  const contextValue = useMemo(
    () => ({
      index,
      control: { val, setValue },
    }),
    [index, val, setValue]
  );

  return (
    <ItemContext.Provider value={contextValue}>
      <div className="array-item">{children}</div>
    </ItemContext.Provider>
  );
};

export default memo(Provider);

export const useCustomArrayItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error(
      'useCustomArrayItemContext must be used within an ItemContext.Provider'
    );
  }
  return context;
};
