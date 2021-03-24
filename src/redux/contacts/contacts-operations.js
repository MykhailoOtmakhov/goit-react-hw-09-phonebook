import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { 
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError, 
    addContactRequest, 
    addContactSuccess, 
    addContactError, 
    removeContactRequest, 
    removeContactSuccess, 
    removeContactError 
} from './contacts-actions'

const fetchContact = () => async dispatch => {
    dispatch(fetchContactRequest());

    try {
        const {data} = await axios.get('/contacts');

        dispatch(fetchContactSuccess(data))
    } catch (error) {
        dispatch(fetchContactError(error.message))
    }
}

const addContact = (name,number,message) => dispatch => {
    const contact = {
        id: uuidv4(),
        name,
        number,
        message
    };

    dispatch(addContactRequest())

    axios
        .post('/contacts', contact)
        .then(({ data }) => 
            dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)))
    }


const removeContact = contactId => dispatch => {
    dispatch(removeContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(removeContactSuccess(contactId)))
        .catch(error => dispatch(removeContactError(error.message)))
}
    export default {
        fetchContact,
        addContact,
        removeContact
    }
