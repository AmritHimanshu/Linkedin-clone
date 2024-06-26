import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ColorRing } from 'react-loader-spinner';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import MyNetwork from './MyNetwork';
import Jobs from './Jobs';
import MobileWarning from './MobileWarning';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {

  const dispatch = useDispatch();

  // User
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL
          })
        );
      }
      else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, []);


  //------------------- Loading Spinner ------------------
  // -----------------------------------------------------
  const [users, loading] = useAuthState(auth);
  if (loading) {
    return (
      <div className="spinner">

        <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />

        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#0074b1', '#0074b1', '#0074b1', '#0074b1', '#0074b1']}
        />

      </div>
    )
  }


  return (
    <Router>
      <div className="app">
        <MobileWarning />
        {!user ? (<Login />) :
          (
            <div className="app__body">
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mynetwork' element={<MyNetwork />} />
                <Route path='/jobs' element={<Jobs />} />
              </Routes>
            </div>
          )
        }


      </div>
    </Router>
  );
}

export default App;
