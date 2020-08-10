import React from 'react';
import {Globalstyle} from './style';
import './statics/icons/iconfont.css';
import Header from './common/header';
import store from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import {UserContext} from './contexts/index';

function App() {
  return (
    <Provider store={store}>
        <Globalstyle/>
        <BrowserRouter>
          <UserContext.Provider value={{name: 'zhangsan', age: 23}}>
            <Header/>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/detail/:id" exact component={Detail}/>
            <Route path="/write" exact component={Write}/>
          </UserContext.Provider>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
