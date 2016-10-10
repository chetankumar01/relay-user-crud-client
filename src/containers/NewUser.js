import React, { PureComponent } from 'react'
import axios from 'axios'
import config from '../config'
import { SignupForm } from '../components'

class NewUser extends PureComponent{
  constructor(props){
    super(props);
    this.createUser = this.createUser.bind(this);
  }
  
  createUser(credentials){
    let url = `${config.apiBaseUrl}/createuser`;
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
      <SignupForm signup={this.createUser}  formName='Create User'/>
    );
  }
}

export default NewUser
