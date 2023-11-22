// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate, useParams } from 'react-router-dom'
// import { updateUser } from './UserReducer'

// function Update() {
// 	const { id } = useParams()
// 	const users = useSelector((state) => state.users)
// 	const existingUser = users.find((user) => user.id === parseInt(id,10))




// 	const { name:existingName,email: existingEmail  } = existingUser;
// 	// const { email } = existingUser
// 	const [uname, setName] = useState(existingName)
// 	const [uemail, setEmail] = useState(existingEmail)
// 	const dispatch = useDispatch()
// 	const navigate = useNavigate()


// 	const handleUpdate = (event) => {
// 		event.preventDefault()
// 		dispatch(
// 			updateUser({id: parseInt(id,10),uname,  uemail}))
// 		navigate('/')
// 	}

// 	return (
// 		<div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
// 			<div className='w-50 border bg-secondary text-white p-5'>
// 				<h3>Update User</h3>
// 				<form onUpdate={handleUpdate}>
// 					<div>
// 						<label htmlFor='name'>Name:</label>
// 						<input
// 							type='text'
// 							name='name'
// 							className='form-control'
// 							placeholder='enter name '
// 							value={uname}
// 							onChange={(e) => setName(e.target.value)}
// 						/>
// 					</div>
// 					<div>
// 						<label htmlFor='email'>Email:</label>
// 						<input
// 							type='email'
// 							name='email'
// 							className='form-control'
// 							placeholder='enter email'
// 							value={uemail}
// 							onChange={(e) => setEmail(e.target.value)}
// 						/>
// 					</div>
// 					<br />
// 					<button className='btn btn-info'>Update</button>
// 				</form>
// 			</div>
// 		</div>
// 	)
// }

// export default Update
// src/store/Update.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';

function Update() {
  const { id } = useParams();

  const users = useSelector((state) => state.users);

  const existingUser = users.find((user) => user.id === parseInt(id, 10));


  const { name: existingName, email: existingEmail } = existingUser;

  const [name, setName] = useState(existingName);
  const [email, setEmail] = useState(existingEmail);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();

    dispatch(updateUser({ id: parseInt(id, 10), name, email }));

    navigate('/');
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;