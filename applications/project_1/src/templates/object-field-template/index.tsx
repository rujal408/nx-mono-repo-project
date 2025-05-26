import { ObjectFieldTemplateProps, RJSFSchema } from "@rjsf/utils"

const ObjectFieldTemplate = (props: ObjectFieldTemplateProps<any, RJSFSchema, any>) => {
    return (
        <div style={{background:"red"}}>{props.properties.map((element) =>
            // Remove the <Grid> if the inner element is hidden as the <Grid>
            // itself would otherwise still take up space.
            element.hidden ? (
                element.content
            ) : (
                <div>
                    {element.content}
                </div>
            ),
        )}</div>
    )
}

export default ObjectFieldTemplate