import React from 'react';// import type { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from '@rjsf/validator-ajv8';
import Nav from '../components/nav';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { BaseForm, StepperForm } from '@mono-repo-projects/bpm-form-generator'
import { RJSFSchema, UiSchema } from '@rjsf/utils';

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

const accountData = [
  {
    "AccountNumber": "01716017536737",
    "MaximumLimit": 9000
  },
  {
    "AccountNumber": "01716017536829",
    "MaximumLimit": 9000
  },
  {
    "AccountNumber": "01716017536716",
    "MaximumLimit": 7000
  },
  {
    "AccountNumber": "01716017536828",
    "MaximumLimit": 9000
  },
  {
    "AccountNumber": "01716017537455",
    "MaximumLimit": 2000
  },
  {
    "AccountNumber": "01716017537456",
    "MaximumLimit": 4000
  }
];


const Home: React.FC = () => {
  // const [formData, setFormData] = useState({});

  const properties: RJSFSchema = {
    name: {
      type: 'string',
      title: 'Name'
    },
    dependAccount: {
      type: 'object',
      properties: {
        AccountNumber: {
          type: "string",
          title: "Account Number",
          oneOf: accountData.map(x => ({
            const: x.AccountNumber,
            title: x.AccountNumber
          }))
        },
        Amount: {
          type: "number",
          title: "Amount",

          description: "Enter amount (must not exceed the maximum limit)"
        },
        required:["AccountNumber","Amount"]
      }
    }
  }

  const uiSchema:UiSchema={
    dependAccount:{
      "ui:field":"dynamic",
      "ui:options":{
        fields:[
          {
            name:"AccountNumber",
            type:"string",
            widget:"select",
            title:"Account Number",
            options:accountData.map(x => ({
              value: x.AccountNumber,
              label: x.AccountNumber
            }))
          },
          {
            name: 'Amount',
            type: 'number' as const,
            widget: 'number' as const,
            placeholder: 'Enter amount',
            
          }
        ],
        dependencies: accountData.map(account => ({
          dependsOn: 'AccountNumber',
          condition: {
            field: 'AccountNumber',
            operator: 'equals' as const,
            value: account.AccountNumber
          },
          action: {
            type: 'setValidation' as const,
            target: 'Amount',
            validation: {
              max: account.MaximumLimit
            }
          }
        })),
        layout: 'vertical' as const
      }
    }
  }

  // const dependencies: RJSFSchema = {
  //   // Dependency on AccountNumber to set MaximumLimit and Amount restrictions
  //   AccountNumber: {
  //     oneOf: accountData.map(account => ({
  //       properties: {
  //         AccountNumber: {
  //           enum: [account.AccountNumber]
  //         },
  //         Amount: {
  //           maximum: account.MaximumLimit
  //         }
  //       }
  //     }))
  //   }
  // }

  return (
    <>
      <Nav />
      <BaseForm validator={validator}
        schema={{
          type: "object",
          properties,
        }}
        uiSchema={uiSchema}
        onSubmit={(data)=>console.log(data.formData)}
      />
      {/* <StepperForm
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
                            lastName: { type: "number", title: "Last Name"},
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
        /> */}
    </>
  );
};

export default Home;
