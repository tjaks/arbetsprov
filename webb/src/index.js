import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import PostsNew from './components/post_new';
import App from './components/app';
import Comments from './components/comments';

import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>

        <nav>
          <h1>HEADER</h1>
          <ul className="list-inline float-right">
            <li>
              <Link to="/">
                Start
              </Link>
            </li>

            <li>
              <Link to="/comments">
                Kommentarer
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/comments" component={Comments} />
          <Route path="/" component={App} />
        </Switch>
        <footer>footer</footer>
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
