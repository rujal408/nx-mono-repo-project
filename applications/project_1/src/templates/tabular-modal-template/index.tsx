import type { ArrayFieldTemplateProps } from "@rjsf/utils";
import Provider from "./provider";
import './tabular-modal-template.css';

type TColumn = { key: string; label: string };

export const TabularModalTemplate = (props: ArrayFieldTemplateProps) => {
    const columns: TColumn[] = props.uiSchema?.["ui:options"]?.tableColumns || [];
    const gridTemplateColumns = `${columns.map(() => '1fr').join(' ')} auto`;
    
    return (
        <div className="tabular-container">
            <div className="tabular-header" style={{ gridTemplateColumns }}>
                {columns.map((col: { key: string; label: string }) => (
                    <div key={col.key} className="tabular-header-cell">{col.label}</div>
                ))}
                <div className="tabular-header-cell">Actions</div>
            </div>
            <div className="tabular-body">
                {props.items.map((item, index) => (
                    <div key={index} className="tabular-row" style={{ gridTemplateColumns }}>
                        <Provider 
                            cols={columns.map((col) => col.key)} 
                            index={index} 
                            onRemove={item.buttonsProps.onDropIndexClick(index)}
                        >
                            {item.children}
                        </Provider>
                    </div>
                ))}
            </div>
            {props.canAdd && (
                <button 
                    onClick={props.onAddClick} 
                    className="add-button"
                >
                    Add
                </button>
            )}
        </div>
    );
};
