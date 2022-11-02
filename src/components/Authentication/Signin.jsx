import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { Alert } from 'react-bootstrap';
import loginimg from "./Images/login2.jpg";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/home')
    } catch (e) {
      setError("Failed to log into your account! Check your details again. If you dont have an account, Register first.")
      console.log(e.message)
    }
  };

  return (
    <div>

      <div className="row">
        <div className="col-sm-12 col-md-6 ps-3">
          <img src={loginimg} alt="signup illustration" className="rounded" />
        </div>

        <div className="col-sm-12 col-md-6 p-5">
          <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
          <form onSubmit={handleSubmit}>

            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Email Address</label>
              <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
            </div>

            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
            </div>

            <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
              Sign In
            </button>

            <div className="w-100 text-end mt-4">
              <Link to="/forgotpassword" className="text-decoration-none">Forgot Password?</Link>
            </div>


            {error && <Alert variant="danger"> {error} </Alert>}
          </form>

          <p className='py-2'>
            Don't have an account yet?{' '}
            <Link to='/signup' className='text-decoration-none'>
              Sign up.
            </Link>

          </p>
        </div>
      </div>


    </div>
  );
};

export default Signin;
