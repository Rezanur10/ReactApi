// import React from 'react';
// import axios from 'axios';

// export default class Home extends React.Component {
//   state = {
//     user_type: "admin",
//     page_number: 1,
//     no_of_item_to_get_in_a_call: 10,
//   }

//   componentDidMount() {
//     axios.get(`https://60f2479f6d44f300177885e6.mockapi.io/users?user_type={user_type}&?page={page_number}&limit={no_of_item_to_get_in_a_call} `)
//       .then(res => {
//         const adminList = res.data;
//         this.setState({ adminList });
//       })
//     this.state.adminList = res.data,
//       console.log("adminlist", adminList);
//   }

//   render() {
//     return (
//       <div>Home page</div>
//     )
//   }
// }
