import { createStore, combineReducers } from 'redux'
import Actions from './actions'
import uuid from 'uuid';

function activeThreadIdReducer(state = '', action){
  switch (action.type){
    case Actions.OPEN_THREAD:
      return action.id;
    default:
      return state;
  }
}

function messagesReducer(state = [], action){
  switch (action.type){
    case Actions.ADD_MESSAGE: {
      return [
        ...state,
        {
          id: uuid.v4(),
          text: action.text,
          author:  parseInt(action.author, 0)
        }
      ]
    }
    default:
      return state;
  }
}

// {
//   threadId: '1-fe3',
//     title: 'my first tab',
//   lastMessage: 'Hello World',
//   messages: [],
// }

function threadsReducer(state = [], action) {
  switch (action.type){
    case Actions.ADD_MESSAGE: {
      const threadIndex = state.findIndex(t => t.id === action.threadId);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        messages: messagesReducer(oldThread.messages, action)
      };
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length)
      ]
    }
    case Actions.ADD_THREAD: {
      const newThread = [...action.threads];

      return state.concat(newThread)
    }
    case Actions.UPDATE_THREAD_ID: {
      const threadIndex = state.findIndex(t => t.id === action.oldId);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        threadId: action.newId
      };

      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length)
      ]
    }
    default:
      return state;
  }
}


const reducer = combineReducers({
  activeThreadId: activeThreadIdReducer,
  threads: threadsReducer
});

const store = createStore(reducer);

export default store;
