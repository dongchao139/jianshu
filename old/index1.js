import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../src/common/header/store/actionCreators';
import {lens, path, assocPath, set, lensProp, view} from 'ramda';
import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button,
  SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoList, SearchInfoSwitch, SearchInfoItem
} from '../src/common/header/style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.fetched = false;
  }

  getSearchInfoArea = (show) => {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {this.props.list.map(item => {
              return <SearchInfoItem href='#' key={item}>{item}</SearchInfoItem>
            })}
          </SearchInfoList>
        </SearchInfo>
      )
    }
    return null;
  };

  handleInputFocus = () => {
    if (!this.fetched) {
      this.props.handleInfoListInit();
      this.fetched = true;
    }
    this.props.handleInputFocus();
  };

  render() {
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'><i className='iconfont iconAa'/></NavItem>
          <SearchWrapper>
            <CSSTransition timeout={250} in={this.props.focused} classNames="slide">
              <NavSearch className={this.props.focused ? 'focused' : ''}
                         placeholder='搜索'
                         onFocus={this.handleInputFocus} onBlur={this.props.handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont iconfangdajing' : 'iconfont iconfangdajing'}/>
            {this.getSearchInfoArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Button className='writting'><i className='iconfont iconpen'/> 写文章</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  // const listPath = ['header', 'list'];
  // const listLens = lens(path(listPath), assocPath(listPath));
  // console.log(view(listLens, state));
  // console.log(set(listLens, ['a', 'b', 'c'], state));
  const headerLens = lensProp('header');
  return view(headerLens, state);
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);