import createDecorator from "final-form-focus";
import { useCallback, useMemo } from "react";
import useFirestoreCollection from "./useFirestoreCollection";

export const useContactForm = () => {
	const focusOnErrors = useMemo(() => createDecorator(), []);
	const [, , save] = useFirestoreCollection("leads");
	const onSubmit = useCallback(async (values: object) => {
		save(values);
		//show thank you page
	}, []);
	return [onSubmit, focusOnErrors] as const;
};
