import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import Nav from '../components/nav';
import validator from '@rjsf/validator-ajv8';
import { useState } from 'react';

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
        default: 'nepal',
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
};

const Country = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Nav />
      Country
      <Form
        schema={schema}
        // uiSchema={uiSchema}
        // formData={formData}
        validator={validator}
        // onChange={({ formData }) => setFormData(formData)}
        // liveValidate
      />
      <img
        onLoad={(e) => {
          setIsLoading(false);
        }}
        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
        style={{
          display: isLoading ? 'none' : 'initial',
          height: '200px',
          width: '200px',
        }}
      />
      {isLoading && (
        <div
          style={{ height: '200px', width: '200px', background: 'black' }}
        ></div>
      )}
    </div>
  );
};

export default Country;
