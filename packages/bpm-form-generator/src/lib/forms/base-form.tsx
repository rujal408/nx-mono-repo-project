import Form, { FormProps } from "@rjsf/core"
import { RJSFSchema } from "@rjsf/utils"
import CustomObjectFieldTemplate from "../templates/object-field-template"
// import ObjectFieldTemplate from "../CustomObjectFieldTemplate"
// import ArrayFieldTemplate from "../ArrayFieldTemplate"

interface IProps extends FormProps<any, RJSFSchema, any> {

}

const BaseForm = ({ widgets, templates, ...rest }: IProps) => {
    return <Form
    widgets={{
        ...widgets,
    }}
    templates={{
        ...templates,
        ObjectFieldTemplate: CustomObjectFieldTemplate,
        // ArrayFieldTemplate: ArrayFieldTemplate,
    }}
        {...rest}
    />
}

export { BaseForm }