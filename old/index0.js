import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../src/common/header/store/actionCreators';
import {  HeaderWrapper,  Logo,  Nav,  NavItem,  NavSearch,  Addition,  Button,  SearchWrapper
} from '../src/common/header/style';

function Header(props) {
  return (
    <HeaderWrapper>
      <Logo href='/' />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'><i className='iconfont iconAa'/></NavItem>
        <SearchWrapper>
          <CSSTransition timeout={250} in={props.focused} classNames="slide">
            <NavSearch className={props.focused ? 'focused' : ''}
              placeholder='搜索'
              onFocus={props.changeFocus} onBlur={props.changeFocus}>
            </NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont iconfangdajing' : 'iconfont iconfangdajing'}/>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='reg'>注册</Button>
        <Button className='writting'><i className='iconfont iconpen'/> 写文章</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return state.getIn(['header', 'focused']);
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);