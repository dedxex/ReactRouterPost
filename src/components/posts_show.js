import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import { fetchNewPost,deletePost,showComment } from '../actions/index';
import { Link } from 'react-router';
let show;
class PostsShow extends Component {
  static contextTypes = {
    router : PropTypes.object
  };
  componentWillMount(props) {
    this.props.fetchNewPost(this.props.params.id);
  }
  componentWillUnmount() {
    this.show="";
  }
  onDelete() {
    this.props.deletePost(this.props.params.id)
    .then (() => {this.context.router.push('/')});
  }
  renderDetails() {
    console.log("details are",this.props.details);
    if(this.show) {
      const { name,email,body} =this.props.details;
      return (
      <div className="col-xs-5">
            <div className="card">
            <img className="card-img-top" width="400" height="200" src="http://lorempixel.com/400/200/sports/" alt="Card image cap" />
            <div className="card-block">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{body}</p>
            </div>
            </div>
        </div>
    );
    }
      return (
        <div>Click to explore</div>
      );
    
    
  }
  showComment() {
    const randomNumber = Math.floor(Math.random() * 20);
    this.props.showComment(randomNumber);
    this.show=this.props.details;
  }
  render() {
    if(!this.props.post){
      return (
        <div><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span></div>
      );
    }
    const { post } = this.props;
   
    return(
      <div className="container">
        <div>
        <div className="form-group">
        
        </div>
        <div className="form-group btn-group">
        <button
          onClick={this.onDelete.bind(this)}
          className="btn btn-danger">delete
        </button>
        <Link to="/" className="btn btn-primary">back</Link>
      </div>
        <div className="form-group">
          
        </div>
        <div className="card">
        <div className="card-block">
        <h4 className="card-title" onClick={this.showComment.bind(this)}>{post.title}</h4>
        <p className="card-text">category : {post.categories}<br/>content : {post.content}</p>   
        </div>
        </div>
      </div>
      <div>
        {this.renderDetails.call(this)}
      </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { post : state.post.post, details : state.post.comment}
}
export default connect(mapStateToProps,{ fetchNewPost,deletePost,showComment })(PostsShow);
