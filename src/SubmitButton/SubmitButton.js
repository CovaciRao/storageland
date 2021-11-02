import React from 'react';

function SubmitButton(props) {
 return (
   <button 
    className={props.class ? props.class : ''} 
    type={props.type ? props.type : ''}
    onClick={props.handleLogout ? props.handleLogout : null}
   >
    {props.ButtonText}
   </button>
 );
}

export default SubmitButton;