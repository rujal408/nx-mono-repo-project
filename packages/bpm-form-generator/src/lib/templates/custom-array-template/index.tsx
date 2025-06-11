import type { ArrayFieldTemplateProps } from "@rjsf/utils";
import Provider from "./provider";

export const CustomArrayItemTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <Provider
            key={item.key}
          >
            <div className="array-item">
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
          </Provider>
        )
      })}
      <button onClick={props.onAddClick}>Add</button>

    </div>
  );
};
