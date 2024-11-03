import { FC } from "react";

import { Form } from "react-final-form";
import { checked, required } from "../utils/FormValidationRules";
import TextInput from "./components/TextInput";
import CheckboxInput from "./components/CheckboxInput";
import { useContactForm } from "../hooks/useContactForm";
import ThankYou from "../components/Contact/ThankYou";
import { Icons } from "../utils/Icons";
import SvgIcon from "../components/Shared/SvgIcon";

export enum Mode {
  Form,
  ThankYou,
}

const ContactForm: FC = () => {
  const [onSubmit, focusOnErrors, mode] = useContactForm();
  return (
    <>
      <div className={`contact__form ${mode == Mode.ThankYou ? "hide" : ""}`}>
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
                <CheckboxInput name="consent" validate={checked}>
                  Souhlasím se{" "}
                  <a href="/files/consent.pdf" target="_blank" aria-label="GDPR">
                    {" "}
                    zpracováním osobních údajů
                  </a>
                </CheckboxInput>
                <div className="form-control">
                  <button
                    aria-label="Odeslat"
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
        className={`contact__thank-you ${mode == Mode.ThankYou ? "show" : ""}`}
      >
        <ThankYou />
      </div>
    </>
  );
};

export default ContactForm;
