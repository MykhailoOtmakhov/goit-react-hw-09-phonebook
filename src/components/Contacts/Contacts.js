import React from 'react';
import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './Contacts.module.css'
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations'
import * as contactsActions from '../../redux/contacts/contacts-actions'
import contactsSelectors from '../../redux/contacts/contacts-selectors'

const Contacts = ({contacts,onRemoveContact,clearFilter}) => {
    
    const handleRemoveContact = id => {
        onRemoveContact(id);
        clearFilter()
    }

    return(
        <TransitionGroup 
            component="ul" 
            className="ContactsList"
            >
                <h2>Contacts</h2>
                {contacts.map(({id,name,number})=>(
                    <CSSTransition 
                        key={id}
                        timeout={2500}
                        classNames={styles}
                        >
                        <ContactsItem 
                            id={id}
                            name={name}
                            number={number}
                            onRemove={()=>handleRemoveContact(id)}
                        />
                    </CSSTransition>                   
                ))}
        </TransitionGroup>                       
    )
}
Contacts.propTypes={
    id:PropTypes.string,
    name:PropTypes.string,
    number:PropTypes.string,
}

const mapStateToProps =(state)=> ({
    contacts: contactsSelectors.getVisibleContacts(state),
})

const mapDispatchToProps = dispatch => ({
    onRemoveContact: (id) => dispatch(contactsOperations.removeContact(id)),
    clearFilter:() => dispatch(contactsActions.changeFilter(''))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)