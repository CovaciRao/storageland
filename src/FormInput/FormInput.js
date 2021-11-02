import React from 'react';

function FormInput(props) {
 return (
    <div className="mb-3">
        <label htmlFor={props.id} className={props.labelClass}>{props.labelContent}</label>
        <input type={props.id} className={props.inputClass} id={props.id} defaultValue={props.value} onChange={props.handleChange}/>
    </div>
 );
}

export default FormInput;