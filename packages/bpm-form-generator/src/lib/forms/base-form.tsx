import Form, { FormProps } from "@rjsf/core"
import { RJSFSchema } from "@rjsf/utils"
import ObjectFieldTemplate from "../templates/object-field-template"
import ArrayFieldTemplate from "../templates/array-field-template"
import DynamicField from "../fields/dynamic-fields"

interface IProps extends FormProps<any, RJSFSchema, any> { }

const BaseForm = ({ widgets, templates, fields, ...rest }: IProps) => {
    return <Form
        widgets={{
            ...widgets,
        }}
        fields={{
            ...fields,
            dynamic: DynamicField
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