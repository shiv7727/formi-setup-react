import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
// import { ToastError } from '../Toast';

const FocusError = () => {
	const { errors, isSubmitting, isValidating, submitCount } =
		useFormikContext();
	useEffect(() => {
		if (isSubmitting && !isValidating) {
			let keys = Object.keys(errors);

			if (keys.length > 0) {
				const selector = `[name=${keys[0]}]`;
				const errorElement = document.querySelector(selector);
				// ToastError(errors[keys[0]])
				if (errorElement) {
					// errorElement.focus();
					errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
					errorElement.focus({ preventScroll: true });
				}
			}
		}
	}, [errors, isSubmitting, isValidating, submitCount]);

	return null;
};

export default FocusError;
