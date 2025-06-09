import { useMemo, useState, useEffect, useCallback } from "react";
import { BaseForm } from "./base-form";
import { FormProps } from "@rjsf/core";
import { RJSFSchema, ErrorSchema, FormValidation } from "@rjsf/utils";
import validator from '@rjsf/validator-ajv8';

interface StepDefinition {
  title: string;
  description?: string;
  props: FormProps<any, RJSFSchema, any>;
}

interface IProps {
  forms: {
    [step: string]: StepDefinition;
  };
  onNextStep?: (currentStep: number, formData: any) => void;
  onPrevStep?: (currentStep: number) => void;
  step?: number;
  onChange?: (step: string, formData: any, errors?: ErrorSchema) => void;
  onSubmit?: (formData: any) => void;
  onError?: (errors: ErrorSchema) => void;
}

const StepperForm = ({ 
  forms, 
  onChange, 
  onNextStep, 
  onPrevStep, 
  step = 0,
  onSubmit,
  onError
}: IProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [currentStep, setCurrentStep] = useState(step);
  const [stepErrors, setStepErrors] = useState<Record<string, ErrorSchema>>({});
  
  const steps = useMemo(() => Object.keys(forms), [forms]);
  const currentStepKey = steps[currentStep];
  
  // Sync current step when prop changes
  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  // Handle form data changes
  const handleChange = useCallback((e: any) => {
    const newData = {
      ...formData,
      [currentStepKey]: e.formData
    };
    
    if (onChange) {
      onChange(currentStepKey, e.formData, e.errors);
    } else {
      setFormData(newData);
    }
    
    // Update errors for current step
    if (e.errors) {
      setStepErrors(prev => ({
        ...prev,
        [currentStepKey]: e.errors
      }));
    }
  }, [formData, currentStepKey, onChange]);

  // Validate current step
  const validateCurrentStep = useCallback(async () => {
    if (stepErrors[currentStepKey]) {
      return Object.keys(stepErrors[currentStepKey]).length === 0;
    }
    
    // If no cached errors, perform validation
    const formSchema = forms[currentStepKey].props.schema;
    const validation:any= 
      await validator.validateFormData(formData[currentStepKey] || {}, formSchema);
    
    setStepErrors(prev => ({
      ...prev,
      [currentStepKey]: validation.errorSchema
    }));
    
    if (onError && validation.errors.length > 0) {
      onError(validation.errorSchema);
    }
    
    return validation.errors.length === 0;
  }, [currentStepKey, formData, forms, stepErrors, onError]);

  // Navigation handlers
  const handleNext = useCallback(async () => {
    const isValid = await validateCurrentStep();
    if (!isValid) return;
    
    const nextStep = Math.min(currentStep + 1, steps.length - 1);
    
    if (onNextStep) {
      onNextStep(currentStep, formData);
    } else {
      setCurrentStep(nextStep);
    }
  }, [currentStep, formData, onNextStep, steps, validateCurrentStep]);

  const handlePrev = useCallback(() => {
    const prevStep = Math.max(currentStep - 1, 0);
    
    if (onPrevStep) {
      onPrevStep(currentStep);
    } else {
      setCurrentStep(prevStep);
    }
  }, [currentStep, onPrevStep]);

  const handleSubmit = useCallback(async () => {
    const isValid = await validateCurrentStep();
    if (!isValid) return;
    
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Form submitted:', formData);
      // Handle default submission here
    }
  }, [formData, onSubmit, validateCurrentStep]);

    //   // Reset errors when step changes
    //   useEffect(() => {
    //     setStepErrors(prev => ({
    //       ...prev,
    //       [currentStepKey]: {}
    //     }));
    //   }, [currentStepKey]);

  // Current form configuration
  const currentForm = forms[currentStepKey];
  const hasErrors = useMemo(() => (
    stepErrors[currentStepKey] && 
    Object.keys(stepErrors[currentStepKey]).length > 0
  ), [stepErrors, currentStepKey]);

  return (
    <div className="stepper-form">
      <div className="stepper-header">
        <h2>{currentForm.title}</h2>
        {currentForm.description && (
          <p className="step-description">{currentForm.description}</p>
        )}
      </div>

      <div className={`step-content ${hasErrors ? 'has-errors' : ''}`}>
        <BaseForm
          {...currentForm.props}
          key={currentStepKey} // Force re-render on step change
          uiSchema={{
            ...currentForm.props.uiSchema,
            "ui:submitButtonOptions": { norender: true }
          }}
          formData={formData[currentStepKey] || {}}
          validator={validator}
          onChange={handleChange}
          extraErrors={stepErrors[currentStepKey]}
        />
      </div>

      <div className="stepper-navigation">
        {currentStep > 0 && (
          <button 
            type="button" 
            className="btn-prev"
            onClick={handlePrev}
          >
            Previous
          </button>
        )}
        
        {currentStep < steps.length - 1 ? (
          <button 
            type="button" 
            className="btn-next"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button 
            type="submit" 
            className="btn-submit"
            onClick={handleSubmit}
            disabled={hasErrors}
          >
            Submit
          </button>
        )}
      </div>
      
      {hasErrors && (
        <div className="form-errors">
          Please fix validation errors before proceeding
        </div>
      )}
    </div>
  );
};

export { StepperForm };