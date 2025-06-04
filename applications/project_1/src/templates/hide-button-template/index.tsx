import type { ArrayFieldTemplateProps } from '@rjsf/utils';

export const HideButtonTemplate = (props: ArrayFieldTemplateProps) => {
  const hide = (props.formData as any[])
    .some(x => x.country === props.uiSchema?.['ui:options']?.hideButtonValue)


  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <div key={item.key}>
            {item.children}
            {item.buttonsProps.hasRemove && (
              <button
                type="button"
                onClick={item.buttonsProps.onDropIndexClick(index)}
              >
                Remove
              </button>
            )}
          </div>
        );
      })}
      {!hide && <button onClick={props.onAddClick}>Add</button>}
    </div>
  );
};
