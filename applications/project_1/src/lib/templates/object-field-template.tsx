import { ObjectFieldTemplateProps } from '@rjsf/utils';
import './style.scss'

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
        {properties.map((element) => (
          <div key={element.content.key} className="object-field">{element.content}</div>
        ))}
      </div>
    </div>
  );
};

export default CustomObjectFieldTemplate;
