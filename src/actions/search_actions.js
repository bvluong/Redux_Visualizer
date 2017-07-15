import { fetchGif } from '../util/giphy_util.js';
import { receiveCurrentComponent } from './meta_actions';

export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT';
export const RECEIVE_SEARCH_TERM = 'RECEIVE_SEARCH_TERM';
export const FETCH_GIPHY = 'FETCH_GIPHY';
export const RECEIVE_GIF = 'RECEIVE_GIF'
export const RECEIVE_GIPHY = 'RECEIVE_GIPHY';

export const receiveSearchTerm = searchTerm => ({
  type: RECEIVE_SEARCH_TERM,
  searchTerm
});

export const receiveGif = gif => ({
  type: RECEIVE_GIF,
  gif
});

export const requestGif = searchTerm => dispatch => (
  fetchGif(searchTerm)
    .then(gif => dispatch(receiveGif(gif)))
);
