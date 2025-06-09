import { useMemo, useRef, useState } from "react";
import { BaseForm } from "./base-form";
import Form, { FormProps } from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from '@rjsf/validator-ajv8';

interface IProps {
    forms: {
        [step: string]: {
            title: string;
            description?: string;
            props: FormProps<any, RJSFSchema, any>;
        };
    };
    onNextStep?: () => void; // External next step handler
    onPrevStep?: () => void; // External previous step handler
    step?: number; // Initial step
    onChange?: (e: any) => void;
}

const StepperForm = ({ forms, onChange, onNextStep, onPrevStep, step }: IProps) => {
    const [formData, setForm] = useState<any>({});
    const [currentStep, setCurrentStep] = useState(step || 0);

    // Get the list of steps from the forms object
    const steps: (keyof typeof forms)[] = useMemo(() => Object.keys(forms), [forms]);

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

    // Logic for going to the next step
    const nextStep = () => {



        if (onNextStep) {
            onNextStep(); // Call external onNextStep handler
        } else if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1); // Handle internally
        }

    };

    // Logic for going to the previous step
    const prevStep = () => {
        if (onPrevStep) {
            onPrevStep(); // Call external onPrevStep handler
        } else if (currentStep > 0) {
            setCurrentStep(currentStep - 1); // Handle internally
        }
    };

    // Handle form submission
    const onSubmit = async () => {

        console.log('Alert')

    };

    return (
        <div>
            <h2>{forms[steps[currentStep]].title}</h2>
            {forms[steps[currentStep]].description && <p>{forms[steps[currentStep]].description}</p>}

            {/* Render the form for the current step */}

            <BaseForm
                {...forms[steps[currentStep]].props}
                uiSchema={{
                    ...forms[steps[currentStep]].props.uiSchema,
                    'ui:submitButtonOptions': {
                        norender: true
                    }
                }}
                formData={formData[steps[currentStep]]}
                validator={validator}
                onChange={internalOnChange}
                onSubmit={onSubmit}

            />
            {/* Navigation buttons */}
            <div className="stepper-navigation">
                {currentStep > 0 && (
                    <button type="button" onClick={prevStep}>Previous</button>
                )}
                {currentStep < steps.length - 1 ? (
                    <button type="button" onClick={nextStep}>Next</button>
                ) : (
                    <button type="submit" onClick={onSubmit}>Submit</button>
                )}
            </div>
        </div>

    );
};

export { StepperForm };
