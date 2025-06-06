import Form from '@rjsf/core';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import Nav from '../components/nav';
import validator from '@rjsf/validator-ajv8';
import { useState } from 'react';
import { HideButtonTemplate } from '../templates/hide-button-template';

const countries = [
  { name: 'Nepal', value: 'nepal' },
  { name: 'India', value: 'india' },
];
const districts = {
  nepal: [
    { name: 'Kathmandu', value: 'ktm' },
    { name: 'Pokhara', value: 'pok' },
  ],
  india: [
    { name: 'Delhi', value: 'del' },
    { name: 'Mumbai', value: 'mum' },
  ],
};

const schema: RJSFSchema = {
  title: "Test",
  type:"object",
  properties: {
    name:{
      type:"string"
    },
    place: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
            title: 'Select a country',
            oneOf: countries.map((coutry) => ({
              const: coutry.value,
              title: coutry.name,
            })),
            default: 'india',
          },
        },
        dependencies: {
          country: {
            oneOf: countries.map((x) => ({
              properties: {
                country: { enum: [x.value] },
                district: {
                  type: 'string',
                  title: 'Select District',
                  oneOf: districts[x.value as keyof typeof districts].map((x) => ({
                    const: x.value,
                    title: x.name,
                  })),
                  default: districts[x.value as keyof typeof districts][0].value,
                },
              },
            })),
          },
        },
      },
    }
  }
};

const uiSchema: UiSchema = {
  place: {
    "ui:ArrayFieldTemplate": HideButtonTemplate,
    "ui:options": {
      hideButtonValue: "india"
    }
  }
};

const FieldArrayDisablePage = () => {
  const [formData, setFormData] = useState<any>(null);
  return (
    <div>
      <Nav />
      Field Array Button Disable
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        validator={validator}
        onChange={({ formData }) => setFormData(formData)}
        templates={{
          HideButtonTemplate
        }}
      />
    </div>
  );
};

export default FieldArrayDisablePage;
