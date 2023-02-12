import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ColorRing } from 'react-loader-spinner';
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
        // console.log(userAuth);
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


  // Loading Spinner
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
