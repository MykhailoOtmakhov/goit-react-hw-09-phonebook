import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
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

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = evt => {
    setName(evt.target.value);
  }
  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  }
  const handlePasswordChange = evt => {
    setPassword(evt.target.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(name,email,password);
    // onRegister();
    dispatch(authOperations.register({name,email,password}))
    setName('');
    setEmail('');
    setPassword('')
  }

    return (
      <div>
        <h1>Страница регистрации</h1>
    
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Имя
            <input 
              type="text" 
              name="name" 
              value={name} 
              onChange={handleNameChange} 
            />
          </label>
    
          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
    
          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
    
          <button type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
        </form>
      </div>
    )
  } 