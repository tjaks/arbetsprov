import React, { Component } from 'react';
import PostIndex from './posts_index';
import PostNew from './post_new';

export default class App extends Component {
    render() {
        return (
            <div>
                <PostNew />
                <PostIndex />
            </div>
        );
    }
}