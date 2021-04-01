import React, { useState, useEffect }  from 'react'
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/index';

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

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   })

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state))
//   }, [key, state]);

//   return [state, setState]
// }

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [email, setEmail] = useLocalStorage('');
  // const [password, setPassword] = useLocalStorage('');

  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  }
  const handlePasswordChange = evt => {
    setPassword(evt.target.value);
  }

  // const handleChange = evt => {
  //   switch (evt.target.name) {
  //     case 'email':
  //       setEmail(evt.target.value);
  //       break;
  //     case 'password':
  //       setPassword(evt.target.value);
  //       break;
      
  //     default: return;
  //   }
  // }
  
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(email, password);
    dispatch(authOperations.logIn({ email, password }))
      setEmail('');
      setPassword('')
  }

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
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

        <button type="submit" onClick={handleSubmit}>Войти</button>
      </form>
    </div>
  )
}
