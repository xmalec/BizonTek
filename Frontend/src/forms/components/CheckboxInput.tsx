import { FieldValidator } from "final-form";
import { PropsWithChildren } from "react";
import { Field, useField } from "react-final-form";
import SvgIcon from "../../components/Shared/SvgIcon";
import { Icons } from "../../utils/Icons";

type Props = {
  name: string;
  validate?: FieldValidator<boolean>;
  id?: string;
} & PropsWithChildren;

const CheckboxInput = ({ name, validate, id, children }: Props) => {
  const { input, meta } = useField(name, {
    subscription: {
      value: true,
      touched: true,
      error: true,
    },
    type: "checkbox",
    validate,
  });
  id = id ?? `input_${name}`;
  const hasError = (meta.touched && meta.error) || meta.submitError;
  return (
    <>
      <div className={`form-control ${hasError ? "has-error" : ""}`}>
        <div className="form-checkbox">
          
            <Field
              type="checkbox"
              id={id}
              component="input"
              validate={validate}
              {...input}
            />
            
          
          <label htmlFor={id}>
          <div className="input-wrapper">
            <span className={`checkmark ${input.checked ? "is-checked" : ""}`}>
              <SvgIcon name={Icons.Check_Simple} />
            </span>
            </div>
            <div>
            {children}</div></label>
        </div>

        <span className="error">
          {meta.error}
          {!meta.error && "ok"}
        </span>
      </div>
    </>
  );
};

export default CheckboxInput;
