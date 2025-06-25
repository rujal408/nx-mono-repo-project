import type { ArrayFieldTemplateProps } from "@rjsf/utils";
import Frame from "./frame";

const IFrameTemplate = (props: ArrayFieldTemplateProps) => {
    return (
        <div>
            {props.items.map((item, index) => {
                return (

                    <Frame key={item.key} item={item} index={index} />
                )
            })}
            <button onClick={props.onAddClick}>Add</button>

        </div>
    );
};

export default IFrameTemplate;