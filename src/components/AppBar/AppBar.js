import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu.js';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth/index'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)
  return(
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}
