import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
class PostsIndex extends Component {
    componentWillMount() {
    this.props.fetchPosts();
  }
  renderPost() {
    
      return this.props.posts.map((post) => {
          return (
                  <li className="list-group-item" key={post.id}>
                  <Link to={'posts/'+post.id}>
                      <div className="panel-heading">
                      <span className="pull-xs-right">
                        {post.categories}
                      </span>
                      </div>
                      <div className="panel-body">
                      <strong>
                      {post.title}
                      </strong>
                      </div>
                </Link>
                  </li>
                  );
                  });
  }
  render() {
    if(!this.props.posts){
      return (
        <div><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span></div>
      );
    }
    return (
      <div>
        <div className='text-xs-right container'> <Link to="/posts/new" className="btn btn-primary">Add Post</Link></div>
          <h3>Posts</h3>
          <ul className="list-group">
          {this.renderPost()}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  //console.log(state.post.all);
  return { posts : state.post.all};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);
// import React from 'react';
// export const PostsIndex= ()=> {
//   return (
//     <div> thsi is post</div>
//   );
// }
