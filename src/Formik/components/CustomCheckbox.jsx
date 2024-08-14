import React from 'react';
import {ErrorMessage} from 'formik'
import TextError from './TextError';

const CustomCheckbox = (props) => {
    const {label,name,id,isChecked, ...rest} = props;
    return (
        <div className='custom-control custom-radio'>
            <label className="custom-control-label" htmlFor={id}>{label}</label>
            <input className="custom-control-input" type='checkbox' name={name} id={id} {...rest} />
            <ErrorMessage name={name} component={TextError}/>
        </div>
      );
}
 
export default CustomCheckbox;