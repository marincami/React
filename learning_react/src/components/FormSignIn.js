import React, {useState} from 'react';

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
    <form action="" onSubmit={onSubmit}>
      <div>
        <label htmlFor="user">User</label>
        <input 
          type="text"
          name="user"
          id="user"
          value={user}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default FormSignIn;
