import {
  CAMPAIGN_PAGE_LOADED,
  CAMPAIGN_PAGE_UNLOADED,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case CAMPAIGN_PAGE_LOADED:
      return {
        ...state,
        campaign: action.payload[0].campaign,
        comments: action.payload[1].comments
      };
    case CAMPAIGN_PAGE_UNLOADED:
      return {};
    case ADD_COMMENT:
      return {
        ...state,
        commentErrors: action.error ? action.payload.errors : null,
        comments: action.error ?
          null :
          (state.comments || []).concat([action.payload.comment])
      };
    case DELETE_COMMENT:
      const commentId = action.commentId
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== commentId)
      };
    default:
      return state;
  }
};
