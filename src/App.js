import React from 'react';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';
import Account from './components/Authentication/Account';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import ProtectedRoute from './components/Authentication/ProtectedRoute';
import NavBar from './components/Navbar/NavBar';
import HomePage from './components/HomePage/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import ForgotPassword from './components/Authentication/ForgotPassword';
import Awareness from './components/GeneralAwareness/awareness';

function App() {

  // const { user } = UserAuth();

  return (
    <div>
      <AuthContextProvider>

        <NavBar />

        <Routes>

          <Route path='/login' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />

          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          <Route exact
            path='/home'
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route
            path='/awareness'
            element={
              <Awareness />
            }
          />

          <Route
            path='/landing'
            element={
              <LandingPage />
            }
          />

          <Route
            path="/"
            element={
              <LandingPage />
            }
          />

        </Routes>

      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
