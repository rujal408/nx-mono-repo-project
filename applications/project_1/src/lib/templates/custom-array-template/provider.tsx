import { createContext, memo, use, useCallback, useMemo, useState, type ReactNode } from 'react'

export const ItemContext = createContext<{
    control: {
        val: string;
        setValue: (val: string) => void;
    }
}>({
    control: {
        val: "",
        setValue: (_: string) => { },
    }
});


const Provider = ({ children }: { children: ReactNode }) => {
    const [val, setVal] = useState("")

    const setValue = useCallback((s: string) => {
        setVal(s)
    }, [])

    const control = useMemo(() => {
        return {
            val,
            setValue
        }
    }, [val])

    return (
        <ItemContext
            value={{
                control
            }}
        >
            <div className="array-item">
                {children}
            </div>
        </ItemContext>
    )
}

export default memo(Provider)

export const useCustomArrayItemContext = () => {
    const context = use(ItemContext);
    if (!context) {
        throw new Error("useCustomArrayItemContext must be used within an ItemContext.Provider");
    }
    return context;
};