import React from 'react';
import { Title, TitleOrange, TitleBlue, TitleGray } from './Title';
import styled from 'styled-components';

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
      <Title user="Jery" age="20" color="yellow"/>
      <Paragraph>Your friends list is:</Paragraph>
      {country && <p>You are from {country}</p>}
      <ul>
          {myFriends.map((friend, index) => <li key={index}>{friend}</li>)}
      </ul>
      <p>Have a good day !!</p>
    </>
  )
}

// how we can use the styled components, as a component
const Paragraph = styled.p`
  margin: 20px 0;
`

export default User;