import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import './App.css'
import { authOperations } from './redux/auth/index';
import AppBar from './components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute'

const HomeView = lazy(() => import('./views/HomeView/HomeView'))
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'))
const LoginView = lazy(() => import('./views/LoginView/LoginView'))
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'))


export default function App() {  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])
 
    return(
      <Container>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute 
              path="/register" 
              restricted 
              redirectTo="/contacts"
              component={RegisterView} />
            <PublicRoute 
              path="/login" 
              restricted 
              redirectTo="/contacts"
              component={LoginView} />
            <PrivateRoute 
              path="/contacts" 
              redirectTo="/login"
              component={ContactsView} />
          </Switch>
        </Suspense>        
      </Container>
    )
}