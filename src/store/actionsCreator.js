import Actions from './actions'

  function addMessage(text, threadId, author) {
    return {
      type: Actions.ADD_MESSAGE,
      text,
      threadId,
      author
    }
  }

  function openThread(id){
    return {
      type: Actions.OPEN_THREAD,
      id: id
    }
  }

  const actionsCreator =  {
    addMessage,
    openThread
  };

  export default actionsCreator;
