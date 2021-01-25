import React from 'react'
import { ErrorMessage } from 'formik';


const style={
    color: 'red',
    fontSize: '10px'
}

const Validationerror = ({name}) => {
    

    return (
        <div style={style}>
            <ErrorMessage name={name}/>
        </div>
    )
}


export default Validationerror;