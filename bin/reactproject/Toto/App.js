// App.js

import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './TodoTemplate';
import TodoHead from './TodoHead';

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

    </TodoTemplate>
    </>
  );
}

export default App;





