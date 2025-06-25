import { BaseForm } from "@mono-repo-projects/bpm-form-generator"
import validator from '@rjsf/validator-ajv8'
const IFrameForm = () => {
    return (
        <BaseForm schema={{
            type: "object",
            properties: {
                name: {
                    type: "string",
                    title: "Name"
                },
                userDetails: {
                    type: "array",
                    items: {
                        properties: {
                            firstName: {
                                type: "string",
                                title: "First Name"
                            },
                            lastName: {
                                type: "string",
                                title: "Last Name"
                            }
                        }
                    }
                }
            }
        }}
            validator={validator}
            uiSchema={{

                userDetails: {
                    "ui:ArrayFieldTemplate": "IFrameTemplate"
                }
            }}
            onSubmit={e=>console.log(e.formData)}
        />
    )
}

export default IFrameForm