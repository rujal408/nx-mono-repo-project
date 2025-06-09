import { RJSFSchema } from "@rjsf/utils";
import validator from '@rjsf/validator-ajv8';
import { useState } from "react";
import { BaseForm } from "./base-form";
import { FormProps } from "@rjsf/core";

interface IProps extends Omit<FormProps<any, RJSFSchema, any>, 'schema'> {
    schema: {
        steps: {
            [step: string]: {
                title: string;
                schema: RJSFSchema;
            };
        };
    };
    onNextStep?: () => void;      // External next step handler
    onPrevStep?: () => void;      // External previous step handler
    step?: number;
}

const StepperForm = ({ schema, onChange, onNextStep, onPrevStep, step }: IProps) => {
    const [formData, setForm] = useState<any>({});
    const [currentStep, setCurrentStep] = useState(step || 0);

    // Get the list of steps from the schema
    const steps = Object.keys(schema.steps);

    // Logic for going to the next step
    const nextStep = () => {
        if (onNextStep) {
            onNextStep(); // Call the external onNextStep handler
        } else if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1); // Handle internally
        }
    };

    // Logic for going to the previous step
    const prevStep = () => {
        if (onPrevStep) {
            onPrevStep(); // Call the external onPrevStep handler
        } else if (currentStep > 0) {
            setCurrentStep(currentStep - 1); // Handle internally
        }
    };

    // Handle form submission
    const onSubmit = (e: any) => {
        console.log("Form submitted", e);
    };

    // Handle form data changes for the current step
    const internalOnChange = (e: any) => {
        if (onChange) {
            onChange(e); // Call external onChange handler
        } else {
            setForm((prevData: any) => ({
                ...prevData,
                [steps[currentStep]]: e.formData, // Update form data for current step
            }));
        }
    };

    // Get the schema for the current step
    const currentStepSchema = schema.steps[steps[step || currentStep]].schema;

    return (
        <div>
            <h2>{schema.steps[steps[currentStep]].title}</h2>
            <BaseForm
                schema={currentStepSchema}
                formData={formData[steps[currentStep]]}
                validator={validator}
                onChange={internalOnChange}
                onSubmit={onSubmit}
            />
            <div className="stepper-navigation">
                {currentStep > 0 && (
                    <button type="button" onClick={prevStep}>Previous</button>
                )}
                {currentStep < steps.length - 1 ? (
                    <button type="button" onClick={nextStep}>Next</button>
                ) : (
                    <button type="submit">Submit</button>
                )}
            </div>
        </div>
    );
};

export { StepperForm };
