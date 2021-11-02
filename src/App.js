import React from 'react';
import './App.css';
import FormControl from './Form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLogged: localStorage.getItem('isLogged') ? localStorage.getItem('isLogged') === "true" ? localStorage.getItem('isLogged') : "false" : "false",
    };
  }

  setUsername = (event) =>{  
    this.setState({
      username: event.target.value
    });
  }

  setPassword = (event) => {  
    this.setState({
      password: event.target.value
    });
  }


  HandleLogin = (event) => {
    event.preventDefault();
    if(this.state.password === "HouseOfMouse") {
      localStorage.setItem("Username", this.state.username);
      localStorage.setItem("Password", this.state.password);
      localStorage.setItem("isLogged", true);
      this.setState({
        isLogged: true,
      })
    } else {
      alert('Your password is incorrect');
    }
  }

  render() {
    return (
      <>
      {this.state.isLogged == true ?
      <div>Its working</div>
      :
      <div className="card text-center">
        <div className="card-body">
          <FormControl 
            handleFormSubmit={this.HandleLogin} 
            username={this.state.username} 
            password={this.state.password}
            setUsername={this.setUsername}
            setPassword={this.setPassword}
          />
        </div>
      </div>
     } 
      </>
    );
  }
}

export default App;
