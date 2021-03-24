import React from 'react'
import styles from './Filter.module.css'
import { connect } from 'react-redux'
import * as contactsActions from '../../redux/contacts/contacts-actions'
import contactsSelectors from '../../redux/contacts/contacts-selectors'

const Filter =({value, onChange})=>{
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

const mapStateToProps = state =>({
    value: contactsSelectors.getFilter(state),
})

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
    

  
