import Form, { FormProps } from "@rjsf/core"
import { RJSFSchema } from "@rjsf/utils"
import ObjectFieldTemplate from "../templates/object-field-template"
import ArrayFieldTemplate from "../templates/array-field-template"

interface IProps extends FormProps<any, RJSFSchema, any> {}

const BaseForm = ({ widgets, templates, ...rest }: IProps) => {
    return <Form
        widgets={{
            ...widgets,
        }}
        templates={{
            ...templates,
            ObjectFieldTemplate,
            ArrayFieldTemplate,
        }}
        {...rest}
    />
}

export { BaseForm }