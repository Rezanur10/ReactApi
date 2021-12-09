import React from 'react';
import axios from 'axios';

export default class HomeList extends React.Component {
  state = {
    userList: []
  }

  componentDidMount() {
    axios.get(`https://60f2479f6d44f300177885e6.mockapi.io/users`)
      .then(res => {
        const userList = res.data;
        this.setState({ userList });
      })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Last Name</th>
            <th>User Type</th>
            <th>Division</th>
            <th>District</th>
            <th>Details View</th>
          </tr>
        </thead>
        <tbody>
          {this.state.userList.map((users) => (
            <tr key={users.id.toString()}>
              <td>{users.first_name}</td>
              <td>{users.last_name}</td>
              <td>{users.user_type}</td>
              <td>{users.division}</td>
              <td>{users.district}</td>
              <td><button>Detail View</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
