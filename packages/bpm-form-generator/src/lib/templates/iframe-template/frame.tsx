import { ArrayFieldItemTemplateType, RJSFSchema } from '@rjsf/utils'
import FrameComponent from 'react-frame-component'

const Frame = ({ item, index }: { item: ArrayFieldItemTemplateType<any, RJSFSchema, any>, index: number }) => {
    return (
        <FrameComponent>
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
        </FrameComponent>
    )
}

export default Frame