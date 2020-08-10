import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './TodoList';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);

serviceWorker.unregister();