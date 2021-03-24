import { connect } from 'react-redux';
import React, { Component } from 'react'
// import { render } from 'react-dom';
// import styles from './RegisterView.module.css'
import { authOperations } from '../../redux/auth/index'


const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';


class RegisterView extends Component {
    state ={
        name: '',
        email: '',
        password: '',
    };

// export default function RegisterView() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

    handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
   
    // switch (name) {
    //   case 'name':
    //     return setName(value);
    //   case 'email':
    //     return setEmail(value);
    //   case 'password':
    //     return setPassword(value);
    //   default:
    //     return;
    // }
  }

   handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state)

    this.setState({name: '', email: '', password: ''});

    // dispatch(authOperations.register({ name, email, password }));
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  render(){
      const { name, email, password } = this.state;
    
      return (
        <div>
          <h1>Страница регистрации</h1>

          <form onSubmit={this.handleSubmit} style={styles.form} autoComplete="off">
            <label style={styles.label}>
              Имя
              <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>

            <label style={styles.label}>
              Почта
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label style={styles.label}>
              Пароль
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      );
    }
}

const mapDispatchToProps = {
    onRegister: authOperations.register,
}

export default connect(null, mapDispatchToProps)(RegisterView) 