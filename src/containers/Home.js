import React, { PureComponent } from 'react'
import Relay from 'react-relay';
import { HeroHeader } from '../components'

class Home extends PureComponent {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  
  componentWillMount(){
    if(this.props.viewer.currentUser){
      this.context.router.push('/app/allusers');
    }
  }
  
  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <HeroHeader />
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              React Relay
            </h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on QRoot {
        currentUser{
          username,
          email,
        }
      }`,
  },
});
