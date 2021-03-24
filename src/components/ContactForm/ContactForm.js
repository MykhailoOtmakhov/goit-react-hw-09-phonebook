import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import contactsOperation from '../../redux/contacts/contacts-operations'
import Notification from '../Notification/Notification'
import { CSSTransition } from 'react-transition-group'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    message: null,   
  }

  handleInputChange=evt=>{
    const {name, value}= evt.currentTarget;
    this.setState({
      [name]: value,
    })
  }

  getNoty = (note) => {
    this.setState({message: note});
    setTimeout(()=> {
      this.setState({ message: null});
    }, 2500)
  }

  handleSubmit=evt=>{
    const { name, number } = this.state;
    evt.preventDefault();
    
    if (this.props.contacts.items.find((item) => item.name.toLowerCase() === this.state.name.toLowerCase())) {
      this.getNoty('This contact is already exist!');
      return;
    }    
    if (name ===''){
      this.getNoty('Enter the name!');
      return;
    }
    if (number ===''){
      this.getNoty('Enter the number!');
      return;
    }

    this.props.onSubmit(this.state);
    this.reset()
  }

  reset=()=>{
    this.setState({name: '', number: '',});
  }
  
  render() {
    const { message }= this.state;
      return (
        <div>
          <CSSTransition
            in={message} 
            timeout={250}
            classNames="notification"
            unmountOnExit>
              <Notification message={this.state.message}/>
          </CSSTransition>
          <form 
            onSubmit={this.handleSubmit}
            className={styles.form}>
            <label 
              className={styles.label}
              htmlFor={this.nameInputId}>
                  Name
              <input 
                className={styles.input}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                id={this.nameInputId}
              />
            </label>
            <label 
            className={styles.label}
            htmlFor={this.numberInputId}>
                Number
              <input 
                className={styles.input}
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleInputChange}
                id={this.numberInputId}
              />
            </label>
            <button 
              className={styles.button}
              type="submit" 
              onClick={this.handleSubmit}
            >Add contact
            </button>
          </form>
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: ({name,number,message}) => dispatch(contactsOperation.addContact(name,number,message))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)

