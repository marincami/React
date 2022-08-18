import React, {useState} from 'react';
import styles from './FormSignIn.module.css'; // is .module to use module CSS and can use the same class name in differents components
// import './FormSignIn.css';  ..... normal way to use css styles with different class name
import Button from './../elements/Button';

const FormSignIn = (props) => {
  const [user, changeUser] = useState('');
  const [password, changePassword] = useState('');
/** 
  const onChangeUser = (event) => {
    changeUser(event.target.value);

  }
  const onChangePassword = (event) => {
    changePassword(event.target.value);
  }
*/

// create the function to simplify
  const onChange = (event) => {
    if(event.target.name === 'user') {
      changeUser(event.target.value);
    } else if(event.target.name === 'password') {
      changePassword(event.target.value);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault(); // prevent event by default (send data and refresh)

    if(user === 'camila' && password === '123') {
      props.changeSesionState(true);
    } else {
      alert('the data is wrong');
      changeUser('');
      changePassword('');
    }
  }

  return (
    <form action="" onSubmit={onSubmit} /*className="form"*/ className={styles.form}>
      <h1>You haven't logged in</h1>
      <div>
        <label htmlFor="user" /*className="label"*/  className={styles.label}>User</label>
        <input 
          type="text"
          name="user"
          id="user"
          value={user}
          onChange={onChange}
          /*className="input"*/
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor="password" /*className="label"*/ className={styles.label}>Password</label>
        <input 
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
          /*className="input"*/
          className={styles.input}
        />
      </div>
      {/** <button type="submit" /*className="button" className={styles.button}>Sign In</button> */}
      <div>
        <Button length type="submit">Sign In</Button>
      </div>
    </form>
  );
}

export default FormSignIn;
