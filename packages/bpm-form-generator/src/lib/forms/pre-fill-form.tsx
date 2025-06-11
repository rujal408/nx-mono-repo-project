import { BaseForm } from './base-form'
import validator from '@rjsf/validator-ajv8'

const PreFillForm = () => {
    return (
        <BaseForm schema={{}} validator={validator} />
    )
}

export default PreFillForm