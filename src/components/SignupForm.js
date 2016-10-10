import React, { PureComponent } from 'react'

class SignupForm extends PureComponent{
  constructor(props){
    super(props);
    this.username = '';
    this.email = '';
    this.password = '';
    this.signup = this.signup.bind(this);
  };

  signup(e){
    e.preventDefault();
    const {username, password, email} = this;
    if(!username.length || !password.length || !email.length){
      alert('Please enter all fields');
      return;
    }
    this.props.signup({username, password, email});
  }

  render(){
    return (
      <div className="container">
        <h1 className="title has-text-centered">{this.props.formName}</h1>
        <div className="columns is-vcentered">
          <div className="column is-6 is-offset-3">
            <div className="box">
              <form onSubmit={this.signup}>
                <label className="label">Username</label>
                <p className="control">
                  <input className="input" type="text"
                         onChange={(e) => this.username = e.target.value}/>
                </p>
                <label className="label">Email</label>
                <p className="control">
                  <input className="input" type="email"
                         onChange={(e) => this.email = e.target.value}/>
                </p>
                <label className="label">Password</label>
                <p className="control">
                  <input className="input" type="password"
                         onChange={(e) => this.password = e.target.value}/>
                </p>
                <p className="control">
                  <button className="button is-primary" type="submit">{this.props.formName}</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupForm;
