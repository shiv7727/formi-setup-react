import React, { Fragment } from 'react';
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';
const RadioButtons = (props) => {
    const { label, name, options, idstart, ...rest } = props;
    return (
        <div>
            <Field name={name} >
                {
                    ({ field }) => {
                        return options.map(option => {
                                return (
                                    <Fragment key={option.key}>
										<div className='custom-control custom-radio'>
                                        <input type='radio'
										 {...field}
										 {...rest}
                                         id={idstart + '-' + option.value}
                                         value={option.value}
                                         checked={field.value === option.value}
                                        />
                                         <label className="custom-control-label" htmlFor={idstart + '-' + option.value}>{option.key}</label>
										 </div>
                                    </Fragment>
                                )
                            })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}

export default RadioButtons;