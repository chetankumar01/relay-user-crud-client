import React, { PureComponent } from 'react'

class LoginForm extends PureComponent{
  constructor(props){
    super(props);
    this.username = '';
    this.password = '';
    this.login = this.login.bind(this);
  };

  login(e){
    e.preventDefault();
    const {username, password} = this;
    if(!username.length || !password.length){
      alert('Please enter both username and password');
      return;
    }
    this.props.login({username, password});
  }

  render(){
    return (
      <div className="container">
        <h1 className="title has-text-centered">Login</h1>
        <div className="columns is-vcentered">
          <div className="column is-6 is-offset-3">
            <div className="box">
              <form onSubmit={this.login}>
                <label className="label">Username/Email</label>
                <p className="control">
                  <input className="input" type="text"
                         onChange={(e) => this.username = e.target.value}/>
                </p>
                <label className="label">Password</label>
                <p className="control">
                  <input className="input" type="password"
                         onChange={(e) => this.password = e.target.value}/>
                </p>
                <p className="control">
                  <button className="button is-primary" type="submit">Login</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;
