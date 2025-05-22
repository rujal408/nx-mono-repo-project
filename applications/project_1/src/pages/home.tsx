import React, { useState } from "react";
import Form from "@rjsf/core";
// import type { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from '@rjsf/validator-ajv8'
import { relatedpartySchema } from "../constants/related-party-schema";
import Nav from "../components/nav";

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
    const [formData, setFormData] = useState({})

    console.log({ formData })
    return (
        <>
            <Nav />
            <Form
                schema={relatedpartySchema as any}
                // uiSchema={uiSchema}
                formData={formData}
                validator={validator}
                onChange={({ formData }) => setFormData(formData)}
            // liveValidate
            />
        </>
    );
};

export default Home