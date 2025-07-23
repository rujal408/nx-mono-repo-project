import React, { useState } from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import type { RJSFSchema, UiSchema } from '@rjsf/utils';
import Nav from '../../components/nav';
import ModalArrayField from './modal-array-field';

// Define the JSON Schema for the form
const schema: RJSFSchema = {
  "title": "User List",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "title": "Full Name"
      },
      "address": {
        "type": "string",
        "title": "Mailing Address"
      },
      "roll": {
        "type": "integer",
        "title": "Roll Number"
      },
      "phone": {
        "type": "string",
        "title": "Phone Number"
      }
    },
    "required": ["name", "roll"]
  }
}

// Define the UI Schema for customizing the form appearance
const uiSchema: UiSchema = {
  items: {
    'ui:options': {
      columns: [{ key: 'name', label: 'Name' }, { key: 'roll', label: 'Roll' }] // Only show these columns in the table
    },
    'ui:field': 'ModalArrayField', // Use custom field for each item

  }
  // You can add per-field uiSchema here if needed

};

const FieldArrayModal: React.FC = () => {
  const [formData, setFormData] = useState<any[]>([]);



  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data.formData);
    alert('Form submitted successfully! Check console for data.');
  };

  const handleError = (errors: any) => {
    console.log('Form errors:', errors);
  };

  return (
    <div>
      <Nav />
      <h2>Field Array Modal Form</h2>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        formData={formData}
        onChange={(data) => setFormData(data.formData)}
        onSubmit={handleSubmit}
        onError={handleError}
        fields={{
          ModalArrayField: ModalArrayField
        }}
      />
    </div>
  );
};

export default FieldArrayModal;