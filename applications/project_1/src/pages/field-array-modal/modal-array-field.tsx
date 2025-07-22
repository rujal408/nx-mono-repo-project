import React, { useState, ReactNode } from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { FieldProps, RJSFSchema, UiSchema } from '@rjsf/utils';

interface SimpleModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const SimpleModal: React.FC<SimpleModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000 }}>
      <div style={{ background: '#fff', margin: '5% auto', padding: 24, borderRadius: 8, minWidth: 400, maxWidth: 600 }}>
        <button style={{ float: 'right' }} onClick={onClose}>X</button>
        <div style={{ clear: 'both' }} />
        {children}
      </div>
    </div>
  );
};

function getColumns(schema: RJSFSchema, uiOptions: any): string[] {
  if (uiOptions && Array.isArray(uiOptions.columns)) {
    return uiOptions.columns;
  }
  // fallback: all properties
  const items = schema.items;
  if (items && !Array.isArray(items) && typeof items === 'object' && 'properties' in items && items.properties) {
    return Object.keys(items.properties);
  }
  return [];
}

const ModalArrayField: React.FC<FieldProps> = (props) => {
  const { formData = [], schema, uiSchema, onChange } = props;
  const uiOptions = uiSchema?.['ui:options'] || {};
  const columns: string[] = getColumns(schema, uiOptions);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'edit' | 'preview' | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [addMode, setAddMode] = useState(false);

  const handleEdit = (idx: number) => {
    setSelectedIndex(idx);
    setModalMode('edit');
    setModalOpen(true);
  };
  const handlePreview = (idx: number) => {
    setSelectedIndex(idx);
    setModalMode('preview');
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
    setModalMode(null);
    setSelectedIndex(null);
  };
  const handleSave = (data: any) => {
    if (modalMode === 'edit') {
      let updated = Array.isArray(formData) ? [...formData] : [];
      if (addMode && selectedIndex === updated.length) {
        updated.push(data.formData);
      } else if (selectedIndex !== null && selectedIndex < updated.length) {
        updated[selectedIndex] = data.formData;
      }
      onChange(updated);
    }
    setAddMode(false);
    handleClose();
  };

  const handleAdd = () => {
    setAddMode(true);
    setSelectedIndex(formData.length); // new index
    setModalMode('edit');
    setModalOpen(true);
  };

  // For type narrowing
  const items = schema.items;
  const itemProperties = (items && !Array.isArray(items) && typeof items === 'object' && 'properties' in items && items.properties)
    ? items.properties
    : {};

    console.log({props})

  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 16 }}>
        <thead>
          <tr>
            {columns.map((col: string) => (
              <th key={col} style={{ border: '1px solid #ccc', padding: 8 }}>
                {typeof itemProperties[col] === 'object' && itemProperties[col] !== null && 'title' in itemProperties[col]
                  ? (itemProperties[col] as { title?: string }).title || col
                  : col}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(formData) && formData.length > 0 ? formData.map((row: any, idx: number) => (
            <tr key={idx}>
              {columns.map((col: string) => (
                <td key={col} style={{ border: '1px solid #ccc', padding: 8 }}>{row[col]}</td>
              ))}
              <td>
                <button onClick={() => handleEdit(idx)} style={{ marginRight: 8 }}>Edit</button>
                <button onClick={() => handlePreview(idx)}>Preview</button>
              </td>
            </tr>
          )) : (
            <tr><td colSpan={columns.length + 1} style={{ textAlign: 'center', padding: 16 }}>No data</td></tr>
          )}
      <button onClick={handleAdd} style={{ marginBottom: 16 }}>Add</button>
        </tbody>
      </table>
      <SimpleModal open={modalOpen} onClose={handleClose}>
        {modalMode && selectedIndex !== null && (
          <Form
            schema={schema.items as RJSFSchema}
            uiSchema={uiSchema?.items as UiSchema}
            validator={validator}
            formData={addMode ? undefined : formData[selectedIndex]}
            onSubmit={handleSave}
            disabled={modalMode === 'preview'}
          >
            {modalMode === 'edit' && <button type="submit">Save</button>}
          </Form>
        )}
      </SimpleModal>
    </div>
  );
};

export default ModalArrayField;