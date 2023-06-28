import { FC } from "react";

import { Form } from "react-final-form";
import { checked, required } from "../utils/FormValidationRules";
import TextInput from "./components/TextInput";
import CheckboxInput from "./components/CheckboxInput";
import { useContactForm } from "../hooks/useContactForm";

const ContactForm: FC = () => {
	const [onSubmit, focusOnErrors] = useContactForm();
	return (
		<>
			<div className="contact__form">
				<Form
					onSubmit={onSubmit}
					decorators={[focusOnErrors]}
					render={({ handleSubmit }) => {
						return (
							<form className="form" onSubmit={handleSubmit}>
								<TextInput
									name="name"
									placeholder="Jméno"
									autocomplete="name"
									validate={required}
								></TextInput>
								<TextInput
									name="email"
									placeholder="E-mail"
									autocomplete="email"
									validate={required}
								></TextInput>
								<TextInput
									name="content"
									placeholder="Obsah zprávy"
									component="textarea"
									validate={required}
									rows={10}
								></TextInput>
								<CheckboxInput
									name="consent"
									label="Souhlasím se zpracováním osobních
									údajů"
									validate={checked}
								></CheckboxInput>
								<div className="form-control">
									<button
										type="submit"
										className="btn btn-contact submit-btn btn-md btn-animated"
									>
										Odeslat
									</button>
								</div>
							</form>
						);
					}}
				/>
			</div>
		</>
	);
};

export default ContactForm;
