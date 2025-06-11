import React from 'react';// import type { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from '@rjsf/validator-ajv8';
import Nav from '../components/nav';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { StepperForm } from '@mono-repo-projects/bpm-form-generator'

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
  // const [formData, setFormData] = useState({});

  return (
    <>
      <Nav />
      <StepperForm
          forms={{
            step1: {
              title: "Step 1",
              props: {
                schema: {
                  type: "object",
                  properties: {
                    // firstName: { type: "string", title: "First Name" },
                    // lastName: { type: "string", title: "Last Name" },
                    country: {
                      type: "string",
                      title: "Country",
                      enum: ["USA", "Canada", "Mexico"], // List of countries
                    },
                  },
                  dependencies: {
                    // Define a dependency rule for country field
                    country: {
                      oneOf: [
                        {
                          properties: {
                            country: { enum: ["USA"] },
                            firstName: { type: "string", title: "First Name",},
                            lastName: { type: "string", title: "Last Name",},
                          },
                          required: ["firstName", "lastName"], // Require firstName and lastName when USA is selected
                        },
                        {
                          properties: {
                            country: { enum: ["Canada"] },
                            firstName: { type: "string", title: "First Name", },
                            lastName: { type: "string", title: "Last Name", },
                          },
                          required: ["firstName", "lastName"], // Require firstName and lastName when Canada is selected
                        },
                        {
                          properties: {
                            country: { enum: ["Mexico"] },
                            firstName: { type: "string", title: "First Name", },
                            lastName: { type: "string", title: "Last Name", },
                          },
                          required: [], // No firstName and lastName required when Mexico is selected
                        },
                      ],
                    },
                  },
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
    </>
  );
};

export default Home;
