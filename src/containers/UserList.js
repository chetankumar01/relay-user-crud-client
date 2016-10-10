import React, { PureComponent } from 'react'
import Relay from 'react-relay';
import axios from 'axios'
import config from '../config'
import { Link } from 'react-router';

class UserList extends PureComponent {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  deleteUser = (userId) => {
    let url = `${config.apiBaseUrl}/deleteuser`;
    axios.post(
      url,
      {
        userId: userId
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
  
  render() {
    const { users } = this.props.viewer
    return (
      <div>
        <h3 className="title is-3">
          All users
          <Link to="/app/user/new" className="is-pulled-right button is-primary">New User</Link>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map( (user, index) =>
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td><button className="button is-danger" onClick={this.deleteUser.bind(this, user._id)}>Delete</button></td>
              </tr>
             )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Relay.createContainer(UserList, {
  fragments: {
    viewer: () => Relay.QL`
    fragment on QRoot {
      users{
        _id,
        username,
        email,
      }
    }
    `,
  },
});
