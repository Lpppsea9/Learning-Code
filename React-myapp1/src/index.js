import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
// import Father from './Father'

ReactDOM.render(
    <Fragment>
        <TodoList />
        {/* <Father /> */}
    </Fragment>
  ,document.getElementById('root')
);

