import { FC } from "react";

import { Form } from "react-final-form";
import { checked, required } from "../utils/FormValidationRules";
import TextInput from "./components/TextInput";
import CheckboxInput from "./components/CheckboxInput";
import { useContactForm } from "../hooks/useContactForm";
import ThankYou from "../components/Contact/ThankYou";

export enum Mode {
	Form,
	ThankYou,
}

const ContactForm: FC = () => {
	const [onSubmit, focusOnErrors, mode] = useContactForm();
	return (
		<>
			<div
				className={`contact__form ${
					mode == Mode.ThankYou ? "hide" : ""
				}`}
			>
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
			<div
				className={`contact__thank-you ${
					mode == Mode.ThankYou ? "show" : ""
				}`}
			>
				<div className="contact__thank-you_container">
					<div className="h2 thank-you__title">Díky za zprávu!</div>
					<div className="text-xxl thank-you__text">
						Brzo se Vám ozvu.
					</div>
					<div className="thank-you__icon">
						<i className="fas fa-check-circle"></i>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
