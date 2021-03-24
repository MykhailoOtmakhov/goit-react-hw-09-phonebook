import React from 'react';
import styles from './ContactsItem.module.css';
import PropTypes from 'prop-types'

const ContactsItem = ({name, number, onRemove})=>(
    <li 
    className={styles.item}
    >
        <p 
        className={styles.name}>
            {name}-{number}</p>
        <button 
            className={styles.button}
            onClick={onRemove}> 
            Delete
        </button>
    </li>  
) 
ContactsItem.propTypes={
    name: PropTypes.string,
    number: PropTypes.string,
}
ContactsItem.defaultProps = {
   name: '',
   number: '',
}
export default ContactsItem;
    
