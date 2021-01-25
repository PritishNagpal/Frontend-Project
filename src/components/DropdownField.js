import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ValidationError from './ValidationError';

const style = {
    display: 'flex',
    flexDirection: 'column',
    
}

const selectStyle = {
    border: 'none',
    outline: 'none',
    borderBottom :'1px solid black',
    margin: '10px 0',
    background: 'lightBlue'
}
const labelStyle = {
    margin: '10px 0'
}

function Select ({ label, name, options }) {
  return (
    <div style={style}>
      <label htmlFor={name} style={labelStyle}>{label}</label>
      <Field as='select' id={name} name={name} style={selectStyle}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ValidationError name="department" />
    </div>
  )
}

export default Select