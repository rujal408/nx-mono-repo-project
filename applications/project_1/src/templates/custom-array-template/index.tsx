import type { ArrayFieldTemplateProps } from "@rjsf/utils";
import Item from "./item";

export const CustomArrayItemTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <div>
      {props.items.map((item, index) => {
        return <Item key={item.key} index={index} item={item} />;
      })}
      <button onClick={props.onAddClick}>Add</button>
    </div>
  );
};
