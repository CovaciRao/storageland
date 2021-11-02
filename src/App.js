import React from 'react';
import './App.css';
import FormControl from './Form/Form';
import Header from './Header/Header';
import LoggedInSection from './LoggedInSection/LoggedInSection';
import ShowError from './ShowError/ShowError';
import SubmitButton from './SubmitButton/SubmitButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('Username') ? localStorage.getItem('Username') !== "" ? localStorage.getItem('Username') : "" : "",
      password: '',
      isLogged: localStorage.getItem('isLogged') ? localStorage.getItem('isLogged') === "true" ? localStorage.getItem('isLogged') : "false" : "false",
      wrongPass: 0,
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

  setLoggin = () => {
    this.setState({
      isLogged: "true",
      wrongPass: 0,
    });
  }

  handleLoggout = () => {
    localStorage.clear();
    this.setState({
      isLogged: "false",
    })
  }

  HandleLogin = (event) => {
    event.preventDefault();
    if(this.state.password === "HouseOfMouse") {
      localStorage.setItem("Username", this.state.username);
      localStorage.setItem("Password", this.state.password);
      localStorage.setItem("isLogged", true);
      this.setLoggin();
    } else {
      this.setState({
        wrongPass: 1,
      })
    }
  }

  render() {
    return (
      <>
        <Header>
        {this.state.isLogged == 'true' &&
          <SubmitButton
            class={"btn btn-primary"} 
            type={"button"} 
            ButtonText={"LogOut"}
            handleLogout={this.handleLoggout}
          />
        }
        </Header>
        <section className="authentification">
          <div className="card text-center">
            <div className="card-body">
              {this.state.isLogged == 'true' &&
                <>
                  <LoggedInSection username={this.state.username}/>
                </>
              }
              {this.state.isLogged == 'false' &&
                <>
                  <FormControl 
                    handleFormSubmit={this.HandleLogin} 
                    username={this.state.username} 
                    password={this.state.password}
                    setUsername={this.setUsername}
                    setPassword={this.setPassword}
                  />
                  <ShowError isError={this.state.wrongPass}/>
                </>
              } 
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default App;
