import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import Contacts from '../../components/Contacts/Contacts';
import ContactForm from '../../components/ContactForm/ContactForm';
import { CSSTransition } from 'react-transition-group'
import Header from '../../components/Header/Header.js';
import Filter from '../../components/Filter/Filter';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors'

export default function ContactsView() {  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContact())
  },[dispatch])

  const contacts = useSelector(contactsSelectors.getVisibleContacts)

    return (
      <Container>
        <Header />
        <ContactForm />
        <CSSTransition 
          in={contacts.length>1}
          timeout={250}
          classNames="container"
          unmountOnExit>
            <Filter/>
        </CSSTransition>
        <CSSTransition 
          in={contacts.length>0}
          timeout={250}
          classNames="container"
          unmountOnExit>
            <Contacts />
        </CSSTransition>   
      </Container>
    );
}