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
import ProductLanding from './components/ProductAwareness/productLanding';
import Doctors from './components/DoctorConsultancy/doctors';
import AwkwardVisits from './components/GeneralAwareness/AwkwardVisits/awkwardVisits';
import TechDifficulties from './components/GeneralAwareness/TechnicalDifficulties/techDifficulties';
import VillageExperiences from './components/GeneralAwareness/VillageExperiences/villageExperiences';
import MythBusters from './components/GeneralAwareness/MythBusters/mythBusters';
import Organizations from './components/GeneralAwareness/Organizations/organizations';
import SocialMedia from './components/GeneralAwareness/SocialMedia/socialMedia';
import MonthlyVisitor from './components/GeneralAwareness/MonthlyVisitor/monthlyVisitor';
import MenarcheBegins from './components/GeneralAwareness/MenarcheBegins/menarcheBegins';
import RedBadge from './components/GeneralAwareness/RedBadgeOfCourage/redBadge';
import NapkinsProducts from './components/ProductAwareness/napkinsProducts';
import TamponsProducts from './components/ProductAwareness/tamponsProducts';
import CupsProducts from './components/ProductAwareness/cupsProducts';
import DiscsProducts from './components/ProductAwareness/discsProducts';
import PeriodPantiesProducts from './components/ProductAwareness/periodPantiesProducts';

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

          <Route exact
            path='/doctors'
            element={
              <ProtectedRoute>
                <Doctors />
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
            path='/productLanding'
            element={
              <ProductLanding />
            }
          />

          <Route
            path='/sanitarynapkins'
            element={
              <NapkinsProducts />
            }
          />

          <Route
            path='/tampons'
            element={
              <TamponsProducts />
            }
          />

          <Route
            path='/cups'
            element={
              <CupsProducts />
            }
          />

          <Route
            path='/discs'
            element={
              <DiscsProducts />
            }
          />

          <Route
            path='/periodPanties'
            element={
              <PeriodPantiesProducts />
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

          <Route
            path="/awkwardVisits"
            element={
              <AwkwardVisits />
            }
          />

          <Route
            path="/techDifficulties"
            element={
              <TechDifficulties />
            }
          />

          <Route
            path="/villageExperiences"
            element={
              <VillageExperiences />
            }
          />

          <Route
            path="/organizations"
            element={
              <Organizations />
            }
          />

          <Route
            path="/mythBusters"
            element={
              <MythBusters />
            }
          />

          <Route
            path='/socialMedia'
            element={
              <SocialMedia />
            }
          />

          <Route
            path='/monthlyVisitor'
            element={
              <MonthlyVisitor />
            }
          />

          <Route
            path='/menarcheBegins'
            element={
              <MenarcheBegins />
            }
          />

          <Route
            path='/redBadgeOfCourage'
            element={
              <RedBadge />
            }
          />

        </Routes>

      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
