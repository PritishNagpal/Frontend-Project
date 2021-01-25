import React from 'react';
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from 'formik';
import './Form.css';
import ValidationError from './ValidationError';

const style = {
    display: 'flex',
    flexDirection: 'column',
    background: 'lightBlue'
}

const fieldStyle = {
    border: 'none',
    background: 'lightBlue' 
}

const labelStyle = {
    margin: '10px 0'
}

const Datepicker = ({label,name}) => {
    

    return (
        <div style={style}> 
            <label htmlFor={name} style={labelStyle}>{label}</label>
            <div style={fieldStyle}>
            <Field name={name} style={fieldStyle} >
                {
                    ({form,field}) => {
                        const {setFieldValue} = form;
                        const {value} = field;
                        return(
                            <div >
                                <DateView  id={name} {...field} selected={value} onChange={(val) => setFieldValue(name,val) } />
                                </div>
                        )
                    }
                }
            </Field>
            <ValidationError name="doj"/>
            </div>
        </div>
    )
}
export default Datepicker;