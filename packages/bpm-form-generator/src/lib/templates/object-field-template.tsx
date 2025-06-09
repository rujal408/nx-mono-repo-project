import React from 'react';
import ObjectFieldTemplateProps from '@rjsf/core';
import './style.css'

const CustomObjectFieldTemplate = ({
  properties,
  title,
  description,
}: ObjectFieldTemplateProps) => {
  return (
    <div className="custom-object-field">
      {/* Object Title and Description */}
      {title && (
        <div className="object-title">
          <h3>{title}</h3>
        </div>
      )}
      {description && (
        <div className="object-description">
          <p>{description}</p>
        </div>
      )}

      {/* Properties (fields) */}
      <div className="object-fields">
        {properties.map((prop) => (
          <div key={prop.id} className="object-field">
            {/* Render each property */}
            <div className="field-label">
              <label>{prop.content.props.label}</label>
              {prop.content.props.required && <span className="required">*</span>}
            </div>
            {prop.content}
            {/* Add any help text or description below each field */}
            {prop.content.props.description && (
              <div className="field-description">
                <p>{prop.content.props.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomObjectFieldTemplate;
