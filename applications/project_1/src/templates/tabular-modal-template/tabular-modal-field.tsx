import { FieldProps } from '@rjsf/utils';
import React, { useEffect, useRef, useState } from 'react';
import { useTabularTemplateContext } from './provider';

const TabularModalField: React.FC<FieldProps> = (props) => {
  const { control: { onRemove }, cols } = useTabularTemplateContext();
  const [state, setState] = useState(() => ({ ...props.formData }));

  const onChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev: any) => {
      const newState = { ...prev, [name]: parseFloat(event.target.value) };
      props.onChange(newState);
      return newState;
    });
  };

  console.log({ TabularModalField: props, cols });



  return (
    <div className="tabular-row-view">
      {cols.map((col) => (
        <div key={col} className="tabular-cell" data-label={col}>
          {state[col]}
        </div>
      ))}
      <div className="tabular-cell actions">
        <button className="action-button edit" aria-label="Edit row">
          Edit
        </button>
        <button onClick={onRemove} className="action-button remove" aria-label="Remove row">
          Remove
        </button>
      </div>
    </div>
  );
};

export default TabularModalField;