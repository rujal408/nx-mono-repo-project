import { ObjectFieldTemplateProps } from "@rjsf/utils";

function DependentObjectFieldTemplate(props: ObjectFieldTemplateProps) {
    console.log({dependentField: props})
    return (
        <div>
            {props.title}
            {props.description}
            {props.properties.map((element) => (
                <div key={element.content.key} className='property-wrapper'>{element.content}</div>
            ))}
        </div>
    );
}

export default DependentObjectFieldTemplate