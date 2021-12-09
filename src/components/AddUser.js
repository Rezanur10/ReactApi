import React from 'react';
import axios from 'axios';

export default class AddUser extends React.Component {
  state = {
    first_name: '',
    last_name: '',

  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    console.log('name', event.target.value);
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      first_name: this.state.name,
      last_name: this.state.name,
    };

    axios.post(`https://60f2479f6d44f300177885e6.mockapi.io/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="first_name" onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="last_name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
