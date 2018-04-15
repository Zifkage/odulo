import { createStore, combineReducers } from 'redux'
const ADD_MESSAGE = 'ADD_MESSAGE';
const OPEN_THREAD = 'OPEN_TABS';

function activeThreadIdReducer(state = '1-fe3', action){
  switch (action.type){
    case OPEN_THREAD:
      return action.id;
    default:
      return state;
  }
}

function messagesReducer(state, action){
  switch (action.type){
    case ADD_MESSAGE: {
      return [
        ...state,
        action.text
      ]
    }
    default:
      return state;
  }
}

function threadsReducer(state = [
  {
    id: '1-fe3',
    title: 'my first tab',
    lastMessage: 'Hello World',
    messages: [
      {
        id: 1,
        username: 'Nazif',
        text: 'Yo men'
      }
    ]
  },
  {
    id: '2-fe56',
    title: 'my second tab',
    lastMessage: 'Another last message',
    messages: []
  }
], action) {
  switch (action.type){
    case ADD_MESSAGE: {
      const threadIndex = state.find(t => t.id === action.threadId);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        messages: messagesReducer(state.messages, action)
      };
      return {
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length)
      }
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
