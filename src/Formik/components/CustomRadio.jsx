import React, { Fragment } from 'react';
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError';

const CustomRadio = (props) => {
    const {label,name,id, value, ...rest} = props;
    return (
		<Field name={name} >
			{
				({ field }) => {
					return (
                    <Fragment key={id}>
					<div className='custom-control custom-radio'>
						<label className="custom-control-label" htmlFor={id}>{label}</label>
						<input className="custom-control-input" type='radio' name={name} id={id}
						 value={value}
						 fvalue={field.value}
						 {...rest}
						 defaultChecked
						/>
						<ErrorMessage name={name} component={TextError}/>
					</div>
					</Fragment>
					)
				}
			}
		</Field>
      );
}
 
export default CustomRadio;