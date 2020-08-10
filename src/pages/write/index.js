import React, { Component } from 'react';
import {connect} from 'react-redux';
import { view, lensProp } from 'ramda';
import {Redirect} from 'react-router-dom';

class Write extends Component {

  handleClick = () => {
    const account = this.account;
    const pwd = this.pwd;
    this.props.login(account.value, pwd.value);
  }

  render() {
    const {loginStatus} = this.props;
    if (!loginStatus) {
      return <Redirect to='/login'/>
    }
    return (
        <div>写文章</div>
    );
  }
}

const mapStateToProps = (state) => {
  const loginLen = lensProp('login');
  return view(loginLen, state);
}

export default connect(mapStateToProps, null)(Write);