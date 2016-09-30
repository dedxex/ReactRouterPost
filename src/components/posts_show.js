import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import { fetchNewPost,deletePost } from '../actions/index';
import { Link } from 'react-router';
class PostsShow extends Component {
  static contextTypes = {
    router : PropTypes.object
  };
  componentWillMount(props) {
    this.props.fetchNewPost(this.props.params.id);
  }
  onDelete() {
    this.props.deletePost(this.props.params.id)
    .then (() => {this.context.router.push('/')});
  }
  render() {
    if(!this.props.post){
      return (
        <div><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span></div>
      );
    }
    const { post } = this.props;
   
    return(
      <div>
      <Link to="/" className="btn btn-primary">back</Link>
      <button
      onClick={this.onDelete.bind(this)}
       className="btn btn-danger pull-right">delete</button>
        <div className="card">
        <div className="card-block">
        <h4 className="card-title">{post.title}</h4>
        <p className="card-text">{post.categories}<br/>
        {post.content}</p>   
        </div>
        </div>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return { post : state.post.post}
}
export default connect(mapStateToProps,{ fetchNewPost,deletePost })(PostsShow);
