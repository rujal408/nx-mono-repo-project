import { RJSFSchema } from '@rjsf/utils'
import { useState } from 'react'

interface IProps {
    name:string;
    schema: RJSFSchema
}

const useBpmForm = ({ schema, name }: IProps) => {
    const [formSchema] = useState<RJSFSchema>(schema)
    return {
        formSchema
    }
}

export default useBpmForm