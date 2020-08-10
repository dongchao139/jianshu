import React, {PureComponent} from 'react';
import {RecommendWrapper, RecommendItem} from '../style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../store/actionCreator';
import { lensProp, view, pick } from 'ramda';

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {this.props.recommendList.map(recommend => (
          <RecommendItem key={recommend} style={{backgroundImage: `url(${recommend})`}}>
            <a href="#"></a>
          </RecommendItem>
        ))}
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) =>  {
  const homeLens = lensProp('home');
  const home = view(homeLens, state);
  return pick(['recommendList'], home);
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);