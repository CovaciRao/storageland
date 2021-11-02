import React from 'react';
import FormInput from '../FormInput/FormInput';
import SubmitButton from '../SubmitButton/SubmitButton';
function FormControl(props) {
 return (
  <form onSubmit={props.handleFormSubmit}>
    <FormInput 
        id={"text"}
        labelClass={"form-label"}
        labelContent={"Username: "}
        inputClass={"form-control"}
        value={props.username}
        handleChange={props.setUsername}
    />
    <FormInput 
        id={"password"}
        labelClass={"form-label"}
        labelContent={"Password:"}
        inputClass={"form-control"}
        value={props.password}
        handleChange={props.setPassword}

    />
    <SubmitButton 
        class={"btn btn-primary"} 
        type={"submit"} 
        ButtonText={"Submit"}
    />
  </form>
 );
}

export default FormControl;