// import gql from 'graphql-tag'
// import { Query } from 'react-apollo'
// import withData from '../config';

// import React from 'react';
// import Link from 'next/link';
// import { useState } from 'react';
// import sha256 from 'js-sha256';


// const query = gql`
// 	query {
// 	  users {
//       userID
//       hashedPW
//     }
// 	}
// `

// const validateLogin = ({ authors }) => {

//     const [form, setValues] = useState({
//         loginError: false,
//         username: '',
//         password: '',
//         userData: [],
//     });


//     const validateLogin = (user, pw, userData) => {
//         console.log('ud:', userData);
//         // loop through UserList searching for the Username/Password combination
//         for (let i = 0; i < userData.length; i += 1) {
//             // if there is a match, return the route
//             if (userData[i].userID === user && userData[i].hashedPW === sha256(pw)) {
//                 // if it is an admin, send him to the scanner App / in the future to the portal
//                 if (userData[i].role === 'admin') {
//                     return '/scannerApp';
//                 }
//                 // if its a regular user (not an admin user), send him to his wallet
//                 return `/wallet?user=${userData[i].userID}`;
//             }
//         }
//         // if the username/password combination didnt not match, return to same page
//         return '/';
//     };


//     const checkForError = () => {
//         if (validateLogin(form.username, form.password, form.userData) === '/') {
//             console.log('ERROR');
//             setValues({
//                 ...form,
//                 loginError: true,
//             });
//         }
//     };


//     return (
//     );
// };

// export default withData(validateLogin)