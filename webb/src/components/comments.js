import React, { Component } from 'react';
import PostIndex from './posts_index';
import PostNew from './post_new';

export default class App extends Component {
    render() {
        return (
            <section className="comments">
                <div className="container">
                    <div className="row">
                        <h1>Kommentarer</h1>
        
                        <div className="col-md-5 col-xs-12">
                            <PostNew />
                        </div>
                        <div className="col-md-7 col-xs-12">
                            <article>
                                <PostIndex />
                            </article>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}