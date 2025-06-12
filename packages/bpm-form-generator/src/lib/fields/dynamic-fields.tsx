import { FieldProps, UIOptionsType } from "@rjsf/utils";
import { Component } from "react";

// Type definitions for field configuration
interface FieldConfig {
    name: string;
    type: 'string' | 'number' | 'boolean' | 'select';
    widget?: 'text' | 'number' | 'select' | 'checkbox';
    placeholder?: string;
    options?: Array<{ value: any; label: string }>;
    validation?: {
        required?: boolean;
        min?: number;
        max?: number;
        pattern?: string;
    };
}

interface DependencyRule {
    dependsOn: string;
    condition: {
        field: string;
        operator: 'equals' | 'greaterThan' | 'lessThan' | 'in';
        value: any;
    };
    action: {
        type: 'setOptions' | 'setValidation' | 'setVisibility' | 'setValue';
        target?: string;
        options?: Array<{ value: any; label: string }>;
        validation?: {
            min?: number;
            max?: number;
            required?: boolean;
        };
        visible?: boolean;
        value?: any;
    };
}

interface DynamicFieldState {
    [key: string]: any;
    fieldConfigs: FieldConfig[];
    fieldValidations: { [key: string]: any };
    fieldVisibility: { [key: string]: boolean };
    fieldOptions: { [key: string]: Array<{ value: any; label: string }> };
}

class DynamicField extends Component<FieldProps, DynamicFieldState> {
    constructor(props: FieldProps) {
        super(props);

        const uiOptions: UIOptionsType = props.uiSchema?.['ui:options'] || { fields: [] };
        const initialState: any = { ...props.formData };

        // Initialize field configurations and states
        const fieldConfigs = uiOptions.fields || [];
        const fieldValidations: { [key: string]: any } = {};
        const fieldVisibility: { [key: string]: boolean } = {};
        const fieldOptions: { [key: string]: Array<{ value: any; label: string }> } = {};

        fieldConfigs.forEach((field: FieldConfig) => {
            if (!initialState.hasOwnProperty(field.name)) {
                initialState[field.name] = field.type === 'number' ? 0 : '';
            }
            fieldValidations[field.name] = field.validation || {};
            fieldVisibility[field.name] = true;
            fieldOptions[field.name] = field.options || [];
        });

        this.state = {
            ...initialState,
            fieldConfigs,
            fieldValidations,
            fieldVisibility,
            fieldOptions
        };
    }

    override componentDidMount() {
        this.processDependencies();
    }

    processDependencies = () => {
        const uiOptions: UIOptionsType = this.props.uiSchema?.['ui:options'] || { fields: [] };
        const dependencies = uiOptions.dependencies || [];

        dependencies.forEach((rule: DependencyRule) => {
            this.evaluateAndApplyRule(rule);
        });
    };

    evaluateCondition = (condition: DependencyRule['condition']): boolean => {
        const fieldValue = this.state[condition.field];

        switch (condition.operator) {
            case 'equals':
                return fieldValue === condition.value;
            case 'greaterThan':
                return Number(fieldValue) > Number(condition.value);
            case 'lessThan':
                return Number(fieldValue) < Number(condition.value);
            case 'in':
                return Array.isArray(condition.value) && condition.value.includes(fieldValue);
            default:
                return false;
        }
    };

    evaluateAndApplyRule = (rule: DependencyRule) => {
        const conditionMet = this.evaluateCondition(rule.condition);

        if (conditionMet) {
            this.applyRuleAction(rule.action);
        }
    };

    applyRuleAction = (action: DependencyRule['action']) => {
        const targetField = action.target;

        switch (action.type) {
            case 'setOptions':
                if (targetField && action.options) {
                    this.setState(prevState => ({
                        fieldOptions: {
                            ...prevState.fieldOptions,
                            [targetField]: action.options!
                        }
                    }));
                }
                break;

            case 'setValidation':
                if (targetField && action.validation) {
                    this.setState(prevState => ({
                        fieldValidations: {
                            ...prevState.fieldValidations,
                            [targetField]: {
                                ...prevState.fieldValidations[targetField],
                                ...action.validation
                            }
                        }
                    }));
                }
                break;

            case 'setVisibility':
                if (targetField && typeof action.visible === 'boolean') {
                    this.setState(prevState => ({
                        fieldVisibility: {
                            ...prevState.fieldVisibility,
                            [targetField]: action.visible!
                        }
                    }));
                }
                break;

            case 'setValue':
                if (targetField && action.value !== undefined) {
                    this.setState(prevState => ({
                        [targetField]: action.value
                    }), () => {
                        this.notifyChange();
                    });
                }
                break;
        }
    };

    onChange = (fieldName: string) => {
        return (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const fieldConfig = this.state.fieldConfigs.find(f => f.name === fieldName);
            let value: any = event.target.value;

            // Type conversion based on field type
            if (fieldConfig?.type === 'number') {
                value = parseFloat(value) || 0;
            } else if (fieldConfig?.type === 'boolean') {
                value = (event.target as HTMLInputElement).checked;
            }

            this.setState(
                prevState => ({
                    ...prevState,
                    [fieldName]: value,
                }),
                () => {
                    this.processDependencies();
                    this.notifyChange();
                }
            );
        };
    };

    notifyChange = () => {
        const formData: any = {};
        this.state.fieldConfigs.forEach(field => {
            formData[field.name] = this.state[field.name];
        });
        this.props.onChange(formData);
    };

    validateField = (fieldName: string, value: any): string | null => {
        const validation = this.state.fieldValidations[fieldName];
        if (!validation) return null;

        if (validation.required && (!value || value === '')) {
            return `${fieldName} is required`;
        }

        if (validation.min !== undefined && Number(value) < validation.min) {
            return `${fieldName} must be at least ${validation.min}`;
        }

        if (validation.max !== undefined && Number(value) > validation.max) {
            return `${fieldName} must not exceed ${validation.max}`;
        }

        if (validation.pattern && typeof value === 'string') {
            const regex = new RegExp(validation.pattern);
            if (!regex.test(value)) {
                return `${fieldName} format is invalid`;
            }
        }

        return null;
    };

    renderField = (field: FieldConfig) => {
        if (!this.state.fieldVisibility[field.name]) {
            return null;
        }

        const value = this.state[field.name];
        const error = this.validateField(field.name, value);

        const commonProps = {
            name: field.name,
            value: value || '',
            onChange: this.onChange(field.name),
            placeholder: field.placeholder,
            style: {
                margin: '5px 0',
                padding: '8px',
                border: error ? '1px solid red' : '1px solid #ccc',
                borderRadius: '4px',
                width: '100%'
            }
        };

        let inputElement;

        switch (field.widget || field.type) {
            case 'select':
                const options: { label: string; value: any }[] = field?.options || []
                inputElement = (
                    <select {...commonProps}>
                        <option value="">Select {field.name}</option>
                        {options.map((option) => (
                            <option key={option.label} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
                break;

            case 'number':
                inputElement = (
                    <input
                        {...commonProps}
                        type="number"
                        min={this.state.fieldValidations[field.name]?.min}
                        max={this.state.fieldValidations[field.name]?.max}
                    />
                );
                break;

            case 'checkbox':
                inputElement = (
                    <input
                        {...commonProps}
                        type="checkbox"
                        checked={Boolean(value)}
                        style={{ ...commonProps.style, width: 'auto' }}
                    />
                );
                break;

            default:
                inputElement = (
                    <input
                        {...commonProps}
                        type="text"
                    />
                );
        }

        return (
            <div key={field.name} style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    {field.name}:
                </label>
                {inputElement}
                {error && (
                    <div style={{ color: 'red', fontSize: '12px', marginTop: '2px' }}>
                        {error}
                    </div>
                )}
            </div>
        );
    };

    override render() {
        const uiOptions: UIOptionsType = this.props.uiSchema?.['ui:options'] || { fields: [] };
        const layout = uiOptions.layout || 'vertical';

        return (
            <div style={{
                display: layout === 'horizontal' ? 'flex' : 'block',
                gap: layout === 'horizontal' ? '15px' : '0',
                flexWrap: 'wrap'
            }}>
                {this.state.fieldConfigs.map((field) => <div key={field.name}>{this.renderField(field)}</div>)}
            </div>
        );
    }
}

export default DynamicField;