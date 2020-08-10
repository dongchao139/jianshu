import React, {PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import * as img from '../../statics/3356997-6b687f4a1850c966.webp';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { lensProp, pick, view } from 'ramda';
import * as actionCreators from './store/actionCreator';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';

class Home extends PureComponent {
  componentDidMount(){
    this.props.initHomeDatas();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll', this.changeScrollTopShow);
  }
  changeScrollTopShow = () => {
    let length = document.documentElement.scrollTop;
    if (length > 200) {
      this.props.toggleTopShow(true);
    } else {
      this.props.toggleTopShow(false);
    }
  };
  handleScrollTop = () => {
    window.scrollTo(0,0);
  };
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.changeScrollTopShow);
  };
  
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="img" style={{width: '625px', height: '250px', objectFit: 'cover'}} src={img}/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {this.props.showScroll ? 
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>: null
        }
      </HomeWrapper>
    )
  }
}

Home.loadData = ()=> {
  this.props.initHomeDatas();
}

const mapStateToProps = (state) => {
  const homeLens = lensProp('home');
  return pick(['showScroll'], view(homeLens, state));
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators,dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);