import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Select = (props) => {
    const { label, name, options, skipCode, ...rest } = props;
    return (
        <div >
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
				<option value=''>Select</option>
                {
					options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.key} {(skipCode === true) ? '' : ('code' in option && option.code!==null && option.code)}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}

export default Select;