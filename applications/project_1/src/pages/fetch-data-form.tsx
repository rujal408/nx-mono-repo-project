import Form from "@rjsf/core";
import Nav from "../components/nav";
import validator from "@rjsf/validator-ajv8";
import type { RJSFSchema, UiSchema } from "@rjsf/utils";
import { useState } from "react";
import { CustomArrayItemTemplate } from "../templates/custom-array-template";
import HiddenInput from "../templates/custom-array-template/widgets/hidden-input";
import AsyncInput from "../templates/custom-array-template/widgets/async-input";

const schema: RJSFSchema = {
  title: "A registration form",
  description: "A simple form example.",
  type: "object",
  required: ["userDetails"],
  properties: {
    description: {
      type: "string",
      title: "Description",
      default: "This is a description.",
    },
    userDetails: {
      type: "array",
      title: "User Details",
      items: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            title: "First name",
            default: "Chuck",
          },
          lastName: {
            type: "string",
            title: "Last name",
          },
          hasFilled: {
            type: "boolean",
            title: "Has Filled",
            default: false,
          },
        },
        required: ["firstName", "lastName"],
        dependencies: {
          hasFilled: {
            oneOf: [
              {
                properties: {
                  hasFilled: {
                    const: true,
                  },
                  title: {
                    type: "string",
                    title: "Title",
                    readOnly: true,
                  },
                },
                required: ["title"],
                // uiSchema will handle disabling
              },
              {
                properties: {
                  hasFilled: {
                    const: false,
                  },
                  title: {
                    type: "string",
                    title: "Title",
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
};

// Define the UI schema to apply the custom "AsyncInput" widget to the fields
const uiSchema: UiSchema = {
  userDetails: {
    "ui:ArrayFieldTemplate": "CustomArrayItemTemplate",
    items: {
      firstName: {
        "ui:widget": "AsyncInput",
        "ui:placeholder": "Enter First Name",
        "ui:options": ["https://jsonplaceholder.typicode.com/todos/:userId"],
      },
      lastName: {
        "ui:placeholder": "Enter Lastname",
      },
      title: {
        "ui:options": {
          "ui:placeholder": "Enter Title",
        },
      },
      hasFilled: {
        "ui:widget": "HiddenInput",
      },
    },
  },
};

const FetchDataForm = () => {
  const [formData, setFormData] = useState({});
  return (
    <div>
      <Nav />
      <Form
        schema={schema}
        onChange={(e) => setFormData(e.formData)}
        formData={formData}
        validator={validator}
        uiSchema={uiSchema}
        widgets={{ AsyncInput, HiddenInput }}
        templates={{
          CustomArrayItemTemplate, // Register the template
        }}
      />
    </div>
  );
};

export default FetchDataForm;
