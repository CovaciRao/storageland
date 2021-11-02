import React from 'react';

function Header(props) {
 return (
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            {props.children}
        </div>
    </nav>
 );
}

export default Header;