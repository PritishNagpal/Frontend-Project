import React, { useState } from 'react';
import { Formik,Field,ErrorMessage,Form } from 'formik';
import Inputfield from './InputField';
import Dropdownfield from './DropdownField';
import Datepicker from './Datepicker';
import './Form.css';
import {Route , Link} from 'react-router-dom';
import TableData from './TableData';

const headerStyles = {
    textAlign: 'center',
    fontSize: '20px'
} 



const dropDownOptions = [
    { key: 'Select an option' , value: ''},
    { key: 'HR' , value: 'HR'},
    { key: 'Finance' , value: 'Finance'},
    { key: 'Design' , value: 'Design'},
    { key: 'Software' , value: 'Software'},
    { key: 'Analyst' , value: 'Analyst'},
]

const inputFields = [
    { name: 'name', label: 'Name', type: 'text'},
    { name: 'eid', label: 'Employee Id', type: 'text'},
    { name: 'email', label: 'Email', type: 'email'},
]

const FormJS = () => {

    const [currentData,setCurrentData] = useState([]);

    const initialValues = {
        name: '',
        eid: '',
        department: '',
        email: '',
        doj: '',
    }
    const onSubmit = values => {
        // console.log(values);
        let finalValues = JSON.parse(JSON.stringify(values))
        finalValues.doj = finalValues.doj.slice(0,10);
        setCurrentData([
            ...currentData,
            finalValues,
        ])
    }
    console.log(currentData);
    const validate = values => {
        let errors = {};
        if(!values.name) errors.name = 'Required';
        if(!values.eid) errors.eid = 'Required';
        if(!values.department) errors.department = 'Required';
        if(!values.email) errors.email = 'Required';
        if(!values.doj) errors.doj = 'Required';
        return errors;
    }

    

    return (
        <div className="header">
        <Formik
            
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}>
        
            <Form className="form">
                <header style={headerStyles}>Personal Details</header>
                {
                    inputFields.map( (input) => {
                        return(
                            <Inputfield key={Math.random()*1000} name={input.name} label={input.label} type={input.type} />
                        )
                    })
                } 
                <Dropdownfield name="department" label="Department" options={dropDownOptions }/>
                <Datepicker name="doj" label="Date of Joining" />    
               <button className="btn-submit" type="submit" >Submit</button>
            </Form>
        </Formik>
        <TableData currentData ={currentData} setCurrentData={setCurrentData}/>
        </div>   
    )
}

export default FormJS;