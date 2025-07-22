### Implementing Dynamic Form with `rjsf` (React JSON Schema Form)

In this implementation, we are using the `rjsf` (React JSON Schema Form) package to create a dynamic form based on a JSON schema. The form will consist of a field array with several items, including fields such as name, address, roll number, phone number, etc.

To visualize the data, we will display it in a table format. However, the table will only show a subset of the available items based on the configuration provided through `uiSchema.uiOptions`. In the table, there will be an "Actions" section with two buttons for each row: **Edit** and **Preview**.

- **Edit Button**: When clicked, a modal will appear, displaying the form populated with the relevant data from the selected row.
- **Preview Button**: This button will allow the user to view the data in a read-only format.

The dynamic form inside the modal will automatically populate the input fields using the data from the field array and the `rjsf` schema. The schema will be dynamically provided via the `uiOptions` configuration to ensure that the form fields are populated according to the `rjsf` schema definition.

### Key Features:
- Table display of selected fields from the `rjsf` schema.
- Dynamic population of form fields via `uiOptions` configuration.
- Modal for editing fields with pre-filled data based on the selected row.
- Preview functionality for read-only display.

This approach makes use of `uiOptions` to dynamically modify the form and its inputs as required. Make sure you use "field" that handles more than one widgets.

For fields implementation take a reference code:

```tsx
import { RJSFSchema, UiSchema, FieldProps, RegistryFieldsType } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  type: 'object',
  required: ['lat', 'lon'],
  properties: {
    lat: { type: 'number' },
    lon: { type: 'number' },
  },
};

// Define a custom component for handling the root position object
class GeoPosition extends React.Component<FieldProps> {
  constructor(props: FieldProps) {
    super(props);
    this.state = { ...props.formData };
  }

  onChange(name) {
    return (event) => {
      this.setState(
        {
          [name]: parseFloat(event.target.value),
        },
        () => this.props.onChange(this.state),
      );
    };
  }

  render() {
    const { lat, lon } = this.state;
    return (
      <div>
        <input type='number' value={lat} onChange={this.onChange('lat')} />
        <input type='number' value={lon} onChange={this.onChange('lon')} />
      </div>
    );
  }
}

// Define the custom field component to use for the root object
const uiSchema: UiSchema = { 'ui:field': 'geo' };

// Define the custom field components to register; here our "geo"
// custom field component
const fields: RegistryFieldsType = { geo: GeoPosition };

// Render the form with all the properties we just defined passed
// as props
render(
  <Form schema={schema} uiSchema={uiSchema} validator={validator} fields={fields} />,
  document.getElementById('app'),
);
```tsx