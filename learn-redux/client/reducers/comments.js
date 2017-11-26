// a reducer takes in two things:
// 1. the action (information about what happened)
// 2. copy of current state

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postNewComment(state[action.postId], action)
    }
  }

  return state;
}

function postNewComment(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export default comments;
