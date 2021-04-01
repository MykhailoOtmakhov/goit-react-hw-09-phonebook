import React, { useCallback } from 'react';
import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations'
import * as contactsActions from '../../redux/contacts/contacts-actions'
import contactsSelectors from '../../redux/contacts/contacts-selectors'

export default function Contacts() {

    const dispatch = useDispatch();

    const contacts = useSelector(contactsSelectors.getVisibleContacts)

    const handleRemoveContact = useCallback((id) => {
        dispatch(
            contactsOperations.removeContact(id),
            dispatch(contactsActions.changeFilter(''))
        )
    },[dispatch])

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

