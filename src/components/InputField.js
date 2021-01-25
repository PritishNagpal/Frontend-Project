import React from 'react';
import { Field } from 'formik';
import ValidationError from './ValidationError';


const style = {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0'
}
const fieldStyle = {
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid black' ,
    background: 'lightBlue'
    
}
const required = {
    color: 'red'
}

const Inputfield = ({name,label,type}) => {
    
    return (
        <div style={style}>
            <label htmlFor={name}>{label}<span style={required}>*</span></label>
            <Field
                style={fieldStyle}
                type="text"
                name={name}
                type={type}
                autoComplete="off"
            />
            
            <ValidationError name={name} />
        </div>
    )
}
export default Inputfield;
