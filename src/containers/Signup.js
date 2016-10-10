import React, { PureComponent } from 'react'
import axios from 'axios'
import config from '../config'
import { HeroHeader, SignupForm } from '../components'

class Signup extends PureComponent{
  constructor(props){
    super(props);
    this.signup = this.signup.bind(this);
  }
  
  signup(credentials){
    let url = `${config.apiBaseUrl}/auth/createuser`;
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
          <SignupForm signup={this.signup} formName='Sign Up'/>
        </div>
      </section>
    );
  }
}

export default Signup
