// App.js

import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './Toto/TodoTemplate';
import TodoHead from './Toto/TodoHead';
import TodoList from './Toto/TodoList';
import TodoItem from './Toto/TodoItem';

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoHead/>
      <TodoList/>
    </TodoTemplate>
    </>
  );
} 

export default App;

//https://react.vlpt.us/mashup-todolist/01-create-components.html



