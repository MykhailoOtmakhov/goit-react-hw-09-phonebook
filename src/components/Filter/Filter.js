import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css'
import * as contactsActions from '../../redux/contacts/contacts-actions'
import contactsSelectors from '../../redux/contacts/contacts-selectors'

export default function Filter (){
    const value = useSelector(contactsSelectors.getFilter)
    const dispatch = useDispatch();
    const onChange = useCallback(evt => {
        dispatch(contactsActions.changeFilter(evt.target.value))
    }, [dispatch]);

    return(
        <label
            className={styles.label}
        >
        Find contacts by name:
            <input 
                className={styles.input}
                type="text"
                name="filter"
                value={value}   
                onChange={onChange} 
            />                    
        </label>
    ) 
}

    

  
