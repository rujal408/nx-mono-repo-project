
// import { 
//   createResetBehavior,
//   createPrefillBehavior,
//   createVisibilityBehavior,
//   createDebounceBehavior
// } from './behaviors';
// import BaseInput from '@rjsf/core/lib/components/widgets/TextWidget';

// // Create enhanced widget with composed behaviors
// const EnhancedInput = composeBehaviors(
//   createResetBehavior,
//   createPrefillBehavior,
//   createVisibilityBehavior,
//   createDebounceBehavior
// )(BaseInput);

// SCHEMA
// {
//     "ui:widget": "TextWidget",
//     "ui:options": {
//       "resetConfig": { "clearSiblings": true },
//       "prefillConfig": { "source": "userProfile" },
//       "visibilityConfig": { "dependentField": "showAdvanced" },
//       "debounceTime": 500
//     }
//   }

import { WidgetProps } from '@rjsf/utils';

type WidgetEnhancer = (
    BaseWidget: React.ComponentType<WidgetProps>
) => React.ComponentType<WidgetProps>;

const composeBehaviors = (...enhancers: WidgetEnhancer[]) => {
    return (BaseWidget: React.ComponentType<WidgetProps>) =>
        enhancers.reduce(
            (EnhancedWidget, enhancer) => enhancer(EnhancedWidget),
            BaseWidget
        );
};

export default composeBehaviors