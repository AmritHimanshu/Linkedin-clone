import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import MyNetwork from './MyNetwork';
import Jobs from './Jobs';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth);
        // user is logged in
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL
          })
        );
      }
      else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, []);


  return (
    <Router>
      <div className="app">

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
