import React, { useState } from 'react';
import Form from '@rjsf/core';
// import type { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from '@rjsf/validator-ajv8';
import { relatedpartySchema } from '../constants/related-party-schema';
import Nav from '../components/nav';
import { useNavigate, useNavigation, useSearchParams } from 'react-router-dom';

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
        <Form
          schema={relatedpartySchema as any}
          // uiSchema={uiSchema}
          formData={formData}
          validator={validator}
          onChange={({ formData }) => setFormData(formData)}
          // liveValidate
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
