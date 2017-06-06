import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import PostsNew from './components/post_new';
import Home from './components/home';
import Home2 from './components/home2';
import Comments from './components/comments';
import Footer from './components/footer';
import Header from './components/header';

import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        < Header />
        <Switch>
          <Route path="/comments" component={Comments} />
          <Route path="/home" component={Home2} />
          <Route path="/" component={Home} />
        </Switch>
        < Footer />
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.app'));
