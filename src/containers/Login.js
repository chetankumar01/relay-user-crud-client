import React, { PureComponent } from 'react'
import axios from 'axios'
import config from '../config'
import { HeroHeader, LoginForm } from '../components'

class Login extends PureComponent{
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
  }
  
  login(credentials){
    let url = `${config.apiBaseUrl}/auth/login`;
    axios.post(
      url,
      {
        credentials: credentials
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
  }

  render(){
    return(
      <section className="hero is-fullheight">
        <HeroHeader />
        <div className="hero-body">
          <LoginForm login={this.login} />
        </div>
      </section>
    );
  }
}

export default Login
