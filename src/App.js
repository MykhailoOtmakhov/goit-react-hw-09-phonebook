import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import './App.css'
import { authOperations } from './redux/auth/index';
import AppBar from './components/AppBar/AppBar';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute'

const HomeView = lazy(() => import('./views/HomeView/HomeView'))
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'))
const LoginView = lazy(() => import('./views/LoginView/LoginView'))
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'))


class App extends Component {  
  componentDidMount(){
    this.props.onGetCurrentUser()
  }
  
  render() {
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
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)





// // import { useEffect } from 'react';
// // import { useDispatch } from 'react-redux';
// import React from 'react'
// import { Switch, Route } from 'react-router-dom';
// import AppBar from './components/AppBar/AppBar';
// import ContactsView from './views/ContactsView/ContactsView';
// import HomeView from './views/HomeView/HomeView';
// import RegisterView from './views/RegisterView/RegisterView';
// import LoginView from './views/LoginView/LoginView';
// import Container from './components/Container/Container';
// // import { authOperations } from './redux/auth';
// const App = () => (
//   <Container>
//     <AppBar />

//     <Switch>
//       <Route exact path="/" component={HomeView} />
//       <Route path="/register" component={RegisterView} />
//       <Route path="/login" component={LoginView} />
//       <Route path="/contacts" component={ContactsView} />
//     </Switch>
//   </Container>
// )


// export default App