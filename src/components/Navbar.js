import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styling Third Party elements || components
const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgb(34, 53, 194);
    padding: 3px;

    &:hover {
      background-color: rgb(154, 212, 37);
      border-radius: 3px;
      color: white;
    }
`;

export default function Navbar() {
  return (
    <div>
      <ul id='nav'>
          <li>
            <StyledLink to='/'> Home </StyledLink>
          </li>
          <li>
            <StyledLink to='/create-post'> Create Post </StyledLink>
          </li>
      </ul>
    </div>
  )
}



// const User = requre('she')

// module.exports.createUser = async (req, res) => {
//   try {
//     const {email, password, name} = req.body;

//     // if user forgot to fill any field
//     if(!email || !name || !password) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please fill the details !'
//       })
//     }

//     //handle if user already exists
//     const user = await User.findOne({email: req.params.email});
//     if(user) {
//       return res.status(400).json({
//         success: false,
//         message: 'User already exists !'
//       })
//     } else {
//       //handle if user not exists

//       const newUser = await User.create({
//         email: email,
//         name: name,
//         password: password
//       })

//       return res.status(200).json({
//         success: true,
//         data: newUser,
//         message: 'User Siggned up successfuly!'
//       })
//     }
//   } catch (error) {
//     const errMsg = error.message;

//     if(process.env.environment === 'production') {
//       return res.status(500).json({
//         success: false,
//         message: 'Internal server error!'
//       })

//     } else {
//       return res.status(500).json({
//         success: false,
//         message: errMsg
//       })
//     }
//   }
// }