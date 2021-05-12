// App.js

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './TodoTemplate';
import TodoCreate from './TodoCreate';
import TodoHead from './TodoHead';
import TodoList from './TodoList'

// import  './App.css';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
       <GlobalStyle />
     <TodoTemplate>
        <TodoHead />
          <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;





