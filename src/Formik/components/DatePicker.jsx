import React , {useState} from 'react'
import DateView  from 'react-datepicker'
import { Field, ErrorMessage } from 'formik'
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import TextError from './TextError'
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker (props) {
  const { label, name,placeholder, ...rest } = props;
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1950, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div >
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView 
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                  {"<"}
                </button>
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
      
                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
      
                <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                  {">"}
                </button>
              </div>
            )}
           
            id={name} {...field}  placeholderText={placeholder} {...rest} selected={value}
           onChange={val => { setFieldValue(name, val); setStartDate(val)}} dateFormat="dd/MM/yyyy"  />
          )
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default DatePicker
