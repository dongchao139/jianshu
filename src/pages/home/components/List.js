import React, { PureComponent } from 'react';
import { ListItem, ListInfo,LoadMore } from '../style';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { lensProp, pick, view } from 'ramda';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actionCreator';
import {Link} from 'react-router-dom';

class List extends PureComponent {

  render() {
    const idLens = lensProp('id');
    return (
      <Fragment>
        {this.props.articleList.map(article => (
        <Link key={article.id + Math.random()} to={'/detail/' + view(idLens, article) + '?id=' + view(idLens, article)}>
          <ListItem>
          <img alt='img' src={article.imgUrl} />
            <ListInfo>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <p>
                <span><i style={{ color: 'red' }} className="iconfont icondiamond" />{article.score}</span>
                <span>{article.author}</span><span><i className="iconfont icondialogue" />{article.comment}</span>
                <span><i className="iconfont iconheart" />{article.like}</span>
              </p>
            </ListInfo>
          </ListItem>
        </Link>
        ))}
        <LoadMore onClick={this.props.loadMoreArticle}>更多</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const homeLens = lensProp('home');
  return pick(['articleList'], view(homeLens, state));
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);