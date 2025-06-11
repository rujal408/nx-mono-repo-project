import { createContext, ReactNode, use, useMemo, useState } from "react"

const BpmContext = createContext({});

interface IProps {
    children: ReactNode;
}

const BpmFormProvider = ({ children }: IProps) => {
    const [state, setState] = useState({})

    const value = useMemo(() => ({ state, setState }), [state])

    return (
        <BpmContext value={value}>
            {children}
        </BpmContext>
    )
}


export default BpmFormProvider

export const useBpmForm = () => {
    const context = use(BpmContext)
    if (!context) {
        throw new Error("useBpmForm must be used within a BpmFormProvider")
    }
    return context
}