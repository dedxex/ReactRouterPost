import React, {Component,PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';
class PostsNew extends Component {
  static contextTypes = {
    router : PropTypes.object
  };
  onSubmit(props) {
    this.props.createPost(props)
    .then( ()=> {
      this.context.router.push('/');
    });
  }

  //const handleSubmit= this.props.handleSubmit;
  render() {
    const { fields:{ title,categories,content },handleSubmit }=this.props;
    //const title= this.props.fields.title;
    return (
      <form onSubmit ={handleSubmit(this.onSubmit.bind(this))}>
      <h4> create new post</h4>
      <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ' '}`}>
        <input type="text" className="form-control" {...title} placeholder="Enter the Title" />
        <div className="has-danger">{title.touched ? title.error : ' '}</div>
      </div>
      <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ' '}`}>
        <input type="text" className="form-control" {...categories} placeholder="Enter the Category" />
          <div className="has-danger">{categories.touched ? categories.error : ' '}</div>
      </div>
      <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ' '}`}>
        <input type="textare" className="form-control" {...content} placeholder="Enter the Content" />
            <div className="has-danger">{content.touched ? content.error : ' '}</div>
      </div>
      <div className="form-group btn-group">
        <button type="submit" className="btn btn-primary">submit</button>
        <Link to="/" className='btn btn-danger'>cancel</Link>
      </div>

      </form>
    );
  }
}
function validate(value) {
  //console.log(value);
  const errors = {};
  if(!value.title) {
    errors.title = 'Add a Title';
  }
  if(!value.categories) {
    errors.categories = 'Add a Category';
  }
  if(!value.content) {
    errors.content = 'Add content';
  }
  return errors;
}
export default reduxForm({
  form:'PostNewForm',
  fields:['title','categories','content'],
  validate
},null,{createPost})(PostsNew);
