import React from 'react';

export default class UserDetail extends React.Component {

  render() {

    let {user} = this.props;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td><img src={user.avatar}/></td>
      </tr>
    )
  }
}


UserDetail.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    avatar: React.PropTypes.string
  }),
};
