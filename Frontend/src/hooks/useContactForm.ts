import createDecorator from "final-form-focus";
import { useCallback, useMemo, useState } from "react";
import useFirestoreCollection from "./useFirestoreCollection";
import ContactForm, { Mode } from "../forms/ContactForm";

export const useContactForm = () => {
	const focusOnErrors = useMemo(() => createDecorator(), []);
	const [, save] = useFirestoreCollection("leads");
	const [mode, setMode] = useState(Mode.Form);
	const onSubmit = useCallback(async (values: object) => {
		save(values);
		setMode(Mode.ThankYou);
	}, []);

	return [onSubmit, focusOnErrors, mode] as const;
};
