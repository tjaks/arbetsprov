import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { fetchPosts } from '../actions';

class PostNew extends Component {

    renderField(field) {
        //ES6 refactor
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {/* if field has been touched, show error if it is true else show empty string*/}
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
             this.props.fetchPosts();
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    //Arbitrary properties
                    label="Title"
                    //reference to function that returns jsx
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="E-mail"
                    //reference to function that returns jsx
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Post Content"
                    //reference to function that returns jsx
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title.";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories.";
    }
    if (!values.content) {
        errors.content = "Enter some content.";
    }

    return errors;
}


export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostNew)
    );