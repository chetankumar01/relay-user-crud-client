import React, { PureComponent } from 'react';
import { Link } from 'react-router';

class HeroHeader extends PureComponent{
  constructor(){
    super();
    this.state = {
      showNav: false
    }
  }

  toggleNav = () => {
    this.setState({showNav: !this.state.showNav})
  }

  render(){
    return (
      <div className="hero-head">
        <header className="nav hero is-primary">
          <div className="container">
            <div className="nav-left">
              <Link to='/' className="nav-item">
                <h1 className="title">
                  Home
                </h1>
              </Link>
            </div>
            {this.props.user ?
             <div>
               <a onClick={this.toggleNav}>
                 <span className="nav-toggle">
                   <span></span>
                   <span></span>
                   <span></span>
                 </span>
               </a>
               <div className={"nav-right nav-menu " + (this.state.showNav ? 'is-active' : '')}>
                 <a className="nav-item" onClick={this.props.logout}>Logout</a>
               </div>
             </div>:
             <div>
               <a onClick={this.toggleNav}>
                 <span className="nav-toggle">
                   <span></span>
                   <span></span>
                   <span></span>
                 </span>
               </a>
               <div className={"nav-right nav-menu " + (this.state.showNav ? 'is-active' : '')}>
                 <Link to="/login" className="nav-item" activeClassName="is-active">
                   Login
                 </Link>
                 <Link to="/signup" className="nav-item" activeClassName="is-active">
                   Sign Up
                 </Link>
               </div>
             </div>
            }
          </div>
        </header>
      </div>
    )
  }
}

export default HeroHeader;
