import { FieldValidator } from "final-form";
import { PropsWithChildren } from "react";
import { Field, useField } from "react-final-form";

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
					<div className="input-wrapper">
						<Field
							type="checkbox"
							id={id}
							component="input"
							validate={validate}
							{...input}
						/>
						<span className="checkmark"></span>
					</div>
					<label htmlFor={id}>{children}</label>
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
