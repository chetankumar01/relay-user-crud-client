import React, { PureComponent } from 'react'
import Relay from 'react-relay';
import { HeroHeader } from '../components'

class AppWrapper extends PureComponent {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillMount(){
    if(!this.props.viewer.currentUser){
      this.context.router.push('/');
    }
  }
  
  render() {
    const { currentUser } = this.props.viewer
    return (
      <div>
        <HeroHeader user={currentUser} />
        <div className="section">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(AppWrapper, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on QRoot {
        currentUser{
          username,
          email,
        }
      }`,
  }
});
