import React from 'react';
import UserDetail from './UserDetail';

export default class Users extends React.Component {
  constructor() {
    super();
  }

  getUsers() {
    return [
      {
        "_id": "58613042d144513fd8c03bbc",
        "isActive": true,
        "age": 38,
        "name": "Noelle Finch",
        "gender": "female",
        "email": "noellefinch@codax.com"
      },
      {
        "_id": "58613042f1ddd22998f7c02f",
        "isActive": false,
        "age": 40,
        "name": "Dominique Middleton",
        "gender": "female",
        "email": "dominiquemiddleton@codax.com"
      },
      {
        "_id": "58613042b6f22acfb34097da",
        "isActive": true,
        "age": 21,
        "name": "Beulah Hoover",
        "gender": "female",
        "email": "beulahhoover@codax.com"
      },
      {
        "_id": "5861304228670a96b75bde35",
        "isActive": false,
        "age": 26,
        "name": "Casey Acosta",
        "gender": "male",
        "email": "caseyacosta@codax.com"
      },
      {
        "_id": "586130424d77931fe3e26704",
        "isActive": true,
        "age": 36,
        "name": "Kathleen Parsons",
        "gender": "female",
        "email": "kathleenparsons@codax.com"
      },
      {
        "_id": "58613042b81ed4aea4f8bdd1",
        "isActive": true,
        "age": 32,
        "name": "Tami Morse",
        "gender": "female",
        "email": "tamimorse@codax.com"
      },
      {
        "_id": "5861304235cd4776fd7ce5a7",
        "isActive": false,
        "age": 28,
        "name": "Annette Whitaker",
        "gender": "female",
        "email": "annettewhitaker@codax.com"
      }];
  }

  // render() {
  //   return (
  //     <div>
  //       {
  //         this.getUsers().map(function (user, index) {
  //           return <div key={index}>
  //               User {index + 1}, _id: {user.id}
  //               <ul>
  //                 <li>{user.name}</li>
  //                 <li>{user.age}</li>
  //                 <li>{user.email}</li>
  //                 <li>{user.gender}</li>
  //                 <li>{user.isActive}</li>
  //               </ul>
  //           </div>
  //         })
  //       }
  //     </div>
  //   )
  // }


  render() {
    return (
      <div>
        {
          this.getUsers().map(function (user, index) {
            return <div key={index}>
              User {index + 1}, _id: {user.id}
              <UserDetail user={user}></UserDetail>
            </div>
          })
        }
      </div>
    )
  }
}
