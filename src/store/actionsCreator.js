function actionsCreator() {
  const ADD_MESSAGE = 'ADD_MESSAGE';
  const OPEN_THREAD = 'OPEN_TABS';

  function addMessage(text, threadId) {
    return {
      type: ADD_MESSAGE,
      text,
      threadId
    }
  }

  function openTabs(id){
    return {
      type: OPEN_THREAD,
      id
    }
  }

  return {
    addMessage,
    openTabs
  }
}