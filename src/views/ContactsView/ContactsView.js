import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../components/Container/Container';
import Contacts from '../../components/Contacts/Contacts';
import ContactForm from '../../components/ContactForm/ContactForm';
import { CSSTransition } from 'react-transition-group'
import Header from '../../components/Header/Header.js';
import Filter from '../../components/Filter/Filter';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors'

class ContactsView extends Component {  

  componentDidMount(){
    this.props.fetchContact()
  }
  
  render() {
    return (
      <Container>
        <Header />
        <ContactForm />
        <CSSTransition 
          in={this.props.contacts.length>1}
          timeout={250}
          classNames="container"
          unmountOnExit>
            <Filter/>
        </CSSTransition>
        <CSSTransition 
          in={this.props.contacts.length>0}
          timeout={250}
          classNames="container"
          unmountOnExit>
            <Contacts />
        </CSSTransition>   
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  isLoadingContacts: contactsSelectors.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactsOperations.fetchContact())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView)