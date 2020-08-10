import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './store/actionCreators';
import {view, slice, lens, path, assocPath} from 'ramda';
import {Link} from 'react-router-dom';
import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button,
  SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoList, SearchInfoSwitch, SearchInfoItem
} from './style';
import {UserContext} from '../../contexts/index';

class Header extends Component {
  static contextType = UserContext;
  
  constructor(props) {
    super(props);
    this.fetched = false;
  }

  handleChangePage = () => {
    const spinIcon = this.spinIcon;
    const originAngle = spinIcon.style.transform.replace(/[^0-9]/gi,'');
    let rotate = parseInt(originAngle) === 360 ? 720 : 360;
    spinIcon.style.transform = `rotate(${rotate}deg)`;
    this.props.handleChangePage();
  };

  getSearchInfoArea = (show) => {
    if (show) {
      const pageList = slice(this.props.page - 1, 10, this.props.list);
      return (
        <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch href='#' onClick={this.handleChangePage}>
              <i ref={(icon)=> this.spinIcon = icon } className="iconfont iconspin"/>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList.map(item => {
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
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          {this.props.login ? 
          <NavItem className='right' onClick={this.props.doLogout}>退出</NavItem>:
          <Link to='/login'><NavItem className='right'>登录</NavItem></Link>}
          <NavItem className='right'><i className='iconfont iconAa'/></NavItem>
          <SearchWrapper>
            <CSSTransition timeout={250} in={this.props.focused} classNames="slide">
              <NavSearch className={this.props.focused ? 'focused' : ''}
                         placeholder='搜索'
                         onFocus={this.handleInputFocus} onBlur={this.props.handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont iconfangdajing' : 'iconfont iconfangdajing'}/>
            {this.getSearchInfoArea(this.props.focused || this.props.mouseIn)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Link to='/write'>
            <Button className='writting'><i className='iconfont iconpen'/> 写文章</Button>
          </Link>
          <NavItem className='right'>{this.context.name}</NavItem>
          <UserContext.Consumer>
            {(context) => <a>{context.name} - {context.age}</a>}
          </UserContext.Consumer>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const focusedLens = lens(path(['header','focused']),assocPath(['header','focused']));
  const mouseInLens = lens(path(['header','mouseIn']),assocPath(['header','mouseIn']));
  const listLens = lens(path(['header','list']),assocPath(['header','list']));
  const pageLens = lens(path(['header','page']),assocPath(['header','page']));
  const totalPageLens = lens(path(['header','totalPage']),assocPath(['header','totalPage']));
  const loginLens = lens(path(['login','loginStatus']),assocPath(['login','loginStatus']));
  return {
    focused: view(focusedLens, state),
    mouseIn: view(mouseInLens, state),
    list: view(listLens, state),
    page: view(pageLens, state),
    totalPage: view(totalPageLens, state),
    login: view(loginLens, state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);