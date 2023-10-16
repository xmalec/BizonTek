import createDecorator from "final-form-focus";
import { useCallback, useMemo, useState } from "react";
import useFirestoreCollection from "./useFirestoreCollection";
import ContactForm, { Mode } from "../forms/ContactForm";

export const useContactForm = () => {
  const focusOnErrors = useMemo(() => createDecorator(), []);
  const [, save] = useFirestoreCollection("leads");
  const [mode, setMode] = useState(Mode.Form);
  const onSubmit = useCallback(
    async (values: object) => {
      save(values);
      setMode(Mode.ThankYou);
      sendEmail(values);
    },
    [save]
  );

  return [onSubmit, focusOnErrors, mode] as const;
};

const sendEmail = async (values: object) => {
  try {
    const response = await fetch("php/send-email.php", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Email sent successfully.");
    } else {
      console.error("Failed to send email.");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
