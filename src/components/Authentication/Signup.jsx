import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { Alert } from 'react-bootstrap';
import signupimg from "./Images/signup.jpg"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      return setError("Passwords do not match!");
    }

    setError('');
    try {
      await createUser(email, password);
      navigate('/home')
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className=''>
      <div className="row m-4">
        <div className="col-sm-12 col-md-6 p-5">
          <img src={signupimg} alt="signup illustration" className="rounded" />
        </div>

        <div className="col-sm-12 col-md-6 p-5">
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
            </div>

            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='border p-3'
                type='email'
              />

            </div>

            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='border p-3'
                type='password'
              />
            </div>

            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Confirm Password</label>
              <input
                onChange={(e) => setCPassword(e.target.value)}
                className='border p-3'
                type='password'
              />
            </div>


            <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
              Sign Up
            </button>
            {error && <Alert variant="danger"> {error} </Alert>}
          </form>

          <p className='py-2'>
            Already have an account?{' '}
            <Link to='/login' className='text-decoration-none'>
              Sign in.
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;
