import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as actionCreators from './store/actionCreators';
import { view, lensProp } from 'ramda';
import {LoginWrapper,LoginBox,Input,Button,Lable} from './style';
import {Redirect} from 'react-router-dom';

class Login extends Component {

  handleClick = () => {
    const account = this.account;
    const pwd = this.pwd;
    this.props.login(account.value, pwd.value);
  }

  render() {
    const {loginStatus} = this.props;
    if (loginStatus) {
      return <Redirect to='/'/>
    }
    return (
        <LoginWrapper>
            <LoginBox>
                <Lable>登&nbsp;&nbsp;录</Lable>
                <Input placeholder='账号' ref={input => this.account = input}/>
                <Input type='password' placeholder='密码' ref={password => this.pwd = password}/>
                <Button onClick={this.handleClick}>确认</Button>
            </LoginBox>
        </LoginWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const loginLen = lensProp('login');
  return view(loginLen, state);
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);