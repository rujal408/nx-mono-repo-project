import type { RJSFSchema, WidgetProps } from '@rjsf/utils';
import React, { useEffect } from 'react';
import eventBus from '../../../utils/Events';
import { useCustomArrayItemContext } from '../provider';

const HiddenInput: React.FC<WidgetProps<any, RJSFSchema, any>> = (props) => {
  const {
    index,
    // control: { val },
  } = useCustomArrayItemContext();
  // const prevValRef = useRef(val); // Track previous value of val

  useEffect(() => {
    // if (prevValRef.current.length === 0 && val.length > 0) {
    //   // Only trigger change when val goes from empty to non-empty
    //   props.onChange(true);
    // }
    // prevValRef.current = val; // Update previous value after effect runs

    eventBus.on('call-' + index, (data) => {
      console.log({ data });
      props.onChange(true);
    });
  }, []);

  return <input type="hidden" />;
};

export default HiddenInput;
