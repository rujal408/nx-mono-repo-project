import type { RJSFSchema, WidgetProps } from "@rjsf/utils";
import React, { useCallback, useState } from "react";
import { useCustomArrayItemContext } from "../provider";
import eventBus from "../../../utils/Event";

const AsyncInput: React.FC<WidgetProps<any, RJSFSchema, any>> = (props) => {
  const { value, onChange, placeholder, required } = props;

  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [],
  );

  const {
    index,
    // control: { setValue },
  } = useCustomArrayItemContext();

  const handleCallApi = useCallback(async () => {
    if (props?.uiSchema?.["ui:options"]?.[0]) {
      setLoading(true);
      const res = await fetch(
        props?.uiSchema?.["ui:options"]?.[0].replace(":userId", index + 1),
      );
      const data = await res.json();
      setLoading(false);
      eventBus.emit("call-" + index, { data });
      // setValue(data.title);
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        value={value || ""}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
      <button disabled={loading} onClick={handleCallApi}>
        {loading ? "Loading .." : "Proceed"}
      </button>
    </div>
  );
};

export default AsyncInput;
