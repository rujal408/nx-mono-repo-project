import { FieldProps, RJSFSchema } from '@rjsf/utils';
import React, { useState } from 'react';
import { useTabularTemplateContext } from './provider';
import styles from './tabular-modal-field.module.css';
import { TabularModal } from './modal/Modal';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const TabularModalField: React.FC<FieldProps> = (props) => {
  const { control: { onRemove }, cols } = useTabularTemplateContext();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const schema:RJSFSchema = {
    title:props.title,
    ...props.schema
  }

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleSave = (data: any) => {
    props.onChange(data.formData);
    setIsEditModalOpen(false);
  };

  console.log({props})

  return (
    <>
      <div className="tabular-row-view">
        {cols.map((col) => (
          <div key={col} className="tabular-cell" data-label={col}>
            {props.formData[col]}
          </div>
        ))}
        <div className="tabular-cell actions">
          <button 
            onClick={handleEditClick} 
            className="action-button edit" 
            aria-label="Edit row"
            type='button'
          >
            Edit
          </button>
          <button 
            onClick={onRemove} 
            className="action-button remove" 
            aria-label="Remove row"
          >
            Remove
          </button>
        </div>
      </div>

      <TabularModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={props.title||''}
      >
        <div className={styles.editModalContent}>
          <Form schema={schema} validator={validator} formData={props.formData} onSubmit={handleSave}/>
          <div className={styles.modalActions}>
            <button 
              onClick={() => setIsEditModalOpen(false)}
              className={`${styles.btn} ${styles.btnSecondary}`}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </TabularModal>
    </>
  );
};

export default TabularModalField;