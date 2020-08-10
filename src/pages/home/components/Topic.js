import React, {PureComponent} from "react";
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';
import {lensProp, pick, view} from 'ramda';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../store/actionCreator';

class Topic extends PureComponent {

  render() {
    return (
    <TopicWrapper>
      {this.props.topicList.map(topic => {
        return (
          <TopicItem key={topic.id}>
            <img alt="img" className='topic-img' src={topic.imgUrl}/>
            {topic.title}
          </TopicItem>
        )
      })}
    </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const homeReducerLens = lensProp('home');
  return pick(['topicList'], view(homeReducerLens, state));
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);