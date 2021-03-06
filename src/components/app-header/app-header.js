import React from 'react';
import './app-header.css';

//Подключение CSS in JS
 
import styled from 'styled-components';

const Header = styled.a`
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
   h1{
      color: ${props => props.colored ? 'black' : 'red'};
      font-size: 26px;
   }
   h2 {
      font-size: 1.2rem;
      color: grey;
   }
`

const AppHeader = ({liked, allPosts}) => {
   return (
      <Header as='div' colored >
         <h1>Kogyt Misha</h1>
         <h2>{allPosts} записей, из них понравилось {liked}</h2>
      </Header>
   )
}

export default AppHeader;