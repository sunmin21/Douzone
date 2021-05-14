import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex:1;
    padding:20px 32px;
    padding-bottom:48px;
    overflow-y:auto;
`;

function TodoList(){
    return (    
        <TodoListBlock>
        <TodoItem text = "게시판 만들기" done={true}/>
        <TodoItem text = "git hub blog 만들기" done={true}/>
        <TodoItem text = "react study" done={false}/>  
        <TodoItem text = "clean code study" done={false}/>
        </TodoListBlock>


    );
}

export default TodoList;