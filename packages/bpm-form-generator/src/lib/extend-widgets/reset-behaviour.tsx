import { WidgetProps } from '@rjsf/utils';
import React from 'react';

export default class ResetBehavior {
  static createWidget(BaseWidget: React.ComponentType<WidgetProps>) {
    return (props: WidgetProps) => {
      const { formContext, uiSchema } = props;
      const resetConfig = uiSchema?.['ui:options']?.resetConfig;

      const handleChange = (value: string) => {
        props.onChange(value); // Call the original onChange function

        // If resetConfig exists and formContext is available, call the handleReset function
        if (resetConfig && formContext?.handleReset) {
          // logic to perform reset          
        }
      };

      // Pass the handleChange method to the BaseWidget and render it with all other props
      return <BaseWidget {...props} onChange={handleChange} />;
    };
  }
}
