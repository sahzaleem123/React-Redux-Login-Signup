import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import DashBoard from './components/dashboard/DashBoard'
import fire from './config/Fire';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, loadingFalse } from './redux/action';
import ProtectedRoute from './components/protected-routes/ProtectedRoute';
import Login from './components/auth/login/Login'
import SignUp from './components/auth/sign-up/SignUp';
import Spinner from './components/spinner/Spinner'

function App() {
  // let user = useSelector(state => state.User)
  const loading = useSelector(state => state.Loading)
  const dispatch = useDispatch();

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      }
      dispatch(loadingFalse())
      // else {
      //   // dispatch(setUser(null))
      //   // setUser(null)
      // }
    });
  }
  if (loading) {
    return (<Spinner />)
  }
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/" component={DashBoard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="*" component={() => <h1 className="not_found">404 Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
