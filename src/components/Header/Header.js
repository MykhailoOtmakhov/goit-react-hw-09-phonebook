import React from 'react'
import styles from './Header.module.css';
import { CSSTransition } from 'react-transition-group';

const Header = () => (
    <CSSTransition 
        in={true}
        appear={true}
        timeout={500}
        classNames={styles}>
        <header>
            <h1 className={styles.maintitle}>Phonebook</h1>
        </header>
    </CSSTransition>
)

export default Header