import type { ArrayFieldTemplateProps } from "@rjsf/utils";
import Provider from "./provider";

type TColumn = { key: string; label: string };

export const CustomArrayItemTemplate = (props: ArrayFieldTemplateProps) => {
    const columns: TColumn[] = props.uiSchema?.["ui:options"]?.columns || [];
    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 16 }}>
                <thead>
                    <tr>
                        {columns.map((col: { key: string; label: string }) => (
                            <th key={col.key} style={{ border: '1px solid #ccc', padding: 8 }}>{col.label}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, index) => {
                        return <Provider index={index} onRemove={item.buttonsProps.onDropIndexClick(index)}>
                            {item.children}
                        </Provider>
                    })}
                </tbody>
            </table>
            {props.canAdd && <button onClick={props.onAddClick} style={{ marginBottom: 16 }}>Add</button>}
        </div>
    );
};
