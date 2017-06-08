import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

/* 
    Converts initial state to a object and using lodash to map the
    id to from the action.payload so it will be easier to get data.

    Instead of using loops, we can now just use state["id"].
*/

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
