import { useState } from "react";
import { BaseForm } from "./base-form";
import { FormProps } from "@rjsf/core";
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
    const steps: (keyof typeof forms)[] = Object.keys(forms);

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


    return (
        <div>
            <h2>{forms[steps[currentStep]].title}</h2>
            {forms[steps[currentStep]].description && <p>{forms[steps[currentStep]].description}</p>}

            {/* Render the form for the current step */}
            {steps.map(formStep =>
                <div style={{ display: formStep === steps[currentStep] ? 'initial' : 'none' }}>
                    <BaseForm
                        {...forms[formStep].props}
                        formData={formData[formStep]}
                        validator={validator}
                        onChange={internalOnChange}
                        onSubmit={onSubmit}
                    />
                </div>
            )}

            {/* Navigation buttons */}
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
