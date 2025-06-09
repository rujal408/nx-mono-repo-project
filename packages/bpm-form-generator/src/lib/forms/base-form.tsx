import Form, { FormProps } from "@rjsf/core"
import { RJSFSchema } from "@rjsf/utils"
import ObjectFieldTemplate from "../CustomObjectFieldTemplate"
import ArrayFieldTemplate from "../ArrayFieldTemplate"

interface IProps extends FormProps<any, RJSFSchema, any> {

}

const BaseForm = ({ widgets, templates, ...rest }: IProps) => {
    return <Form
        {...rest}
        widgets={{
            ...widgets,
        }}
        templates={{
            ...templates,
            ObjectFieldTemplate: ObjectFieldTemplate,
            ArrayFieldTemplate: ArrayFieldTemplate,
        }}
    />
}

export { BaseForm }