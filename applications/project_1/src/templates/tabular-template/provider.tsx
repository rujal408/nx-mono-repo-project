import {
    createContext,
    memo,
    useContext,
    useMemo,
    type ReactNode,
  } from 'react';
  
  const ItemContext = createContext<{
    index: number;
    control: {
      onRemove: () => void;
    };
  } | null>(null);
  
  const Provider = ({
    index,
    children,
    onRemove,
  }: {
    index: number;
    children: ReactNode;
    onRemove: () => void;
  }) => {
  
    // Memoize context value to prevent unnecessary updates
    const contextValue = useMemo(
      () => ({
        index,
        control: { onRemove },
      }),
      [index,onRemove]
    );
  
    return (
      <ItemContext.Provider value={contextValue}>
        {children}
      </ItemContext.Provider>
    );
  };
  
  export default memo(Provider);
  
  export const useTabularTemplateContext = () => {
    const context = useContext(ItemContext);
    if (!context) {
      throw new Error(
        'useCustomArrayItemContext must be used within an ItemContext.Provider'
      );
    }
    return context;
  };
  