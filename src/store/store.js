import { createStore, combineReducers } from 'redux'
import Actions from './actions'
import uuid from 'uuid';

function activeThreadIdReducer(state = '1-fe3', action){
  switch (action.type){
    case Actions.OPEN_THREAD:
      return action.id;
    default:
      return state;
  }
}

function messagesReducer(state = [], action, messageId){
  switch (action.type){
    case Actions.ADD_MESSAGE: {
      console.log(action.author);
      return [
        ...state,
        {
          id: messageId,
          text: action.text,
          author: action.author
        }
      ]
    }
    default:
      return state;
  }
}

function threadsReducer(state = [
  {
    threadId: '1-fe3',
    title: 'my first tab',
    lastMessage: 'Hello World',
    messages: [],
    lastNewMessage: ''
  },
  {
    threadId: '2-fe56',
    title: 'my second tab',
    lastMessage: 'Another last message',
    messages: [],
    lastNewMessage: ''
  }
], action) {
  switch (action.type){
    case Actions.ADD_MESSAGE: {
      const threadIndex = state.findIndex(t => t.threadId === action.threadId);
      const oldThread = state[threadIndex];
      const messageId = uuid.v4();
      const newThread = {
        ...oldThread,
        messages: messagesReducer(oldThread.messages, action, messageId)
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
