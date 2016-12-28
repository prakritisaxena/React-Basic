import React from 'react';
import Water from './Water';
import UserDetail from './UserDetail';
import Cart from './Cart';
import StopWatch from './StopWatch';
import RegistrationForm from './RegistrationForm';

export default class AppDay2 extends React.Component {

  constructor() {
    super();
    this.userData = [
      {name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
      {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
      {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
      {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg'},
      {name: 'Ben', age: 30, avatar: 'https://randomuser.me/api/portraits/men/2.jpg'}
    ];
  }

  render() {
    return (
      <div>
        <Water/>
        {
          this.userData.map((user, index) => {
            return <table key={index}>
              <UserDetail user={user}/>
            </table>
          })
        }
        <Cart/>
        <StopWatch/>
        <RegistrationForm/>
      </div>
    )
  }
}
