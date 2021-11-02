import React from 'react';

function ShowError(props) {
 return (
    <>
        {props.isError == 1 &&
            <div class="alert alert-danger" role="alert">Your password is incorrect</div>
        }
    </>
 );
}

export default ShowError;