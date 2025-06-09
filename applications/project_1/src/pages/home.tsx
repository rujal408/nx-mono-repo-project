import React, { useState } from 'react';// import type { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from '@rjsf/validator-ajv8';
import Nav from '../components/nav';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BaseForm } from '../lib/forms/base-form';
import { StepperForm } from '../lib/forms/stepper-form';
// import { BaseForm } from '@mono-repo-projects/form-generator';

// interface Contact {
//   enabled: boolean;
//   name: string;
//   address: string;
// }

// interface FormData {
//   contacts: Contact[];
// }

// const schema: RJSFSchema = {
//   type: "object",
//   properties: {
//     contacts: {
//       type: "array",
//       title: "Contacts",
//       items: {
//         type: "object",
//         properties: {
//           enabled: { type: "boolean", title: "Enable" }
//         },
//         required: ["enabled"],
//         allOf: [
//           {
//             if: {
//               properties: { enabled: { const: true } }
//             },
//             then: {
//               properties: {
//                 name: { type: "string", title: "Name" },
//                 address: { type: "string", title: "Address" }
//               },
//               required: ["name", "address"]
//             },
//             else: {
//               properties: {
//                 name: { type: "string", title: "Name", default: "", readOnly:true },
//                 address: { type: "string", title: "Address", default: "", readOnly:true }
//               },
//               required: []
//             }
//           }
//         ]
//       }
//     }
//   }
// };

// const uiSchema: UiSchema = {
//   contacts: {
//     items: {
//       name: {},
//       address: {},
//       enabled: {},
//     }
//   }
// };

// const initialFormData: FormData = {
//   contacts: [
//     { enabled: false, name: "", address: "" },
//     { enabled: true, name: "Alice", address: "123 Wonderland" },
//   ],
// };

const Home: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const show = searchParams.get('show') === 'true';

  return (
    <>
      <div style={{ display: show ? 'none' : 'initial' }}>
        <Nav />
      </div>
      <div style={{ display: show ? 'initial' : 'none' }}>
        <StepperForm
          forms={{
            step1: {
              title: "Step 1",
              props: {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    age: { type: "number" },
                  },
                  required: ["name", "age"],
                },
                // formData: formData,
                // onChange: setFormData,
                validator,
              },
            },
            step2: {
              title: "Step 2",
              props: {
                schema: {
                  type: "object",
                  properties: {
                    address: { type: "string" },
                    phone: { type: "number" },
                  },
                  required: ["address", "phone"],
                },
                // formData: formData,
                // onChange: setFormData,
                validator,
              },
            },
          }}
        />
       
      </div>
      {show && <h1>Hello world</h1>}
      <button
        onClick={() => {
          navigate(show ? '/' : '?show=true');
        }}
      >
        TOggle
      </button>
    </>
  );
};

export default Home;
