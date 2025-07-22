import { FieldProps } from '@rjsf/utils';
import React, { useState } from 'react';
import { useTabularTemplateContext } from './provider';

const DynamicField: React.FC<FieldProps> = (props) => {
  const { control: { onRemove } } = useTabularTemplateContext();
  const [state, setState] = useState(() => ({ ...props.formData }));

  const onChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev: any) => {
      const newState = { ...prev, [name]: parseFloat(event.target.value) };
      props.onChange(newState);
      return newState;
    });
  };

  const { lat, lon } = state as { lat?: number; lon?: number };

  return (
    <tr>
      <input type='number' value={lat ?? ''} onChange={onChange('lat')} />
      <input type='number' value={lon ?? ''} onChange={onChange('lon')} />
      <button onClick={onRemove}>Remove</button>
    </tr>
  );
};

export default DynamicField;