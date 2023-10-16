import { FieldValidator } from "final-form";
import { Field, SupportedInputs, useField } from "react-final-form";
import { useCallback } from "react";

type Props = {
  name: string;
  validate?: FieldValidator<string>;
  type?: string;
  placeholder?: string;
  autocomplete?: string;
  label?: string;
  isRequired?: boolean;
  isInteger?: boolean;
  component?: SupportedInputs;
  rows?: number;
};

const TextInput = ({
  name,
  validate,
  type,
  placeholder,
  autocomplete,
  isInteger,
  component = "input",
  rows,
}: Props) => {
  const { input, meta } = useField(name, {
    subscription: {
      value: true,
      touched: true,
      error: true,
      submitError: true,
    },
    validate,
  });
  if (isInteger) {
    input.step = 1;
    input.min = 0;
  }
  if (component == "textarea") {
    input.rows = rows;
  }
  const hasError = (meta.touched && meta.error) || meta.submitError;
  placeholder = placeholder ?? "";
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      const input = e.currentTarget.getElementsByTagName(component);
      input[0].focus();
    },
    [component]
  );
  return (
    <>
      <div
        className={`form-control ${hasError ? "has-error" : ""}`}
        onClick={onClick}
      >
        <div className="input-wrapper">
          <Field
            id={`input_${name}`}
            placeholder={placeholder}
            autoComplete={autocomplete}
            type={type}
            component={component}
            validate={validate}
            {...input}
          />
        </div>
        <span className="error">
          {meta.error}
          {!meta.error && "ok"}
        </span>
      </div>
    </>
  );
};

export default TextInput;
