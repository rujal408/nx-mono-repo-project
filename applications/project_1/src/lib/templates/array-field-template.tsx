import { ArrayFieldTemplateProps } from "@rjsf/utils"

const ArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <div>
    {props.items.map((item, index) => {
      return (

        <div key={item.key} className="array-item">
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
      )
    })}
    <button onClick={props.onAddClick}>Add</button>

  </div>
  )
}

export default ArrayFieldTemplate