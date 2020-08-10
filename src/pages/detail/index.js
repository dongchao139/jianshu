import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as actionCreators from './store/actionCreators';
import { view, lensProp } from 'ramda';

class Detail extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    // const {search} = this.props.location;
    // const _id = search.slice(1).split('=')[1];
    // console.log(_id);
    this.props.getDatas(id);
  }

  render() {
    return (
    <DetailWrapper>
      <Header>
        {this.props.header}
      </Header>
      <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
    </DetailWrapper>)
  }
}

const mapStateToProps = (state) => {
  const detailLens = lensProp('detail');
  return view(detailLens, state);
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));