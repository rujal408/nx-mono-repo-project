import type { ArrayFieldItemTemplateType, RJSFSchema } from "@rjsf/utils";
import Provider from "./provider";
import { memo } from "react";

interface IProps {
  index: number;
  item: ArrayFieldItemTemplateType<any, RJSFSchema, any>;
}

const Item: React.FC<IProps> = ({ index, item }) => (
  <Provider index={index}>
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
);

export default memo(Item);
