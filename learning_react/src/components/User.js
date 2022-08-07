import React from 'react';
import { Title, TitleOrange, TitleBlue, TitleGray } from './Title';

const User = () => {
  const country = null;
  const myFriends = ['Nalla','Scar','Tiva','Lucas'];

  return(
    <>
      <TitleOrange user="Noelva"/>
      <TitleBlue user="Lucas"/>
      <Title user="Lucas"/>
      <TitleGray user="Cesar" age="30" color="gray"/>
      <Title user="Camila" age="26" color="pink"/>
      <Title user="Jery" age="26" color="yellow"/>
      <p>Your friends list is:</p>
      {country && <p>You are from {country}</p>}
      <ul>
          {myFriends.map((friend, index) => <li key={index}>{friend}</li>)}
      </ul>
      <p>Have a good day !!</p>
    </>
  )
}

export default User;