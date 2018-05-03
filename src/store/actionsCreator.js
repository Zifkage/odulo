import Actions from './actions'

  function addMessage(text, threadId, author) {
    return {
      type: Actions.ADD_MESSAGE,
      text,
      threadId,
      author
    }
  }

  function addThread(threadId, title){
    return{
      type: Actions.ADD_THREAD,
      threadId,
      title
    }
  }

  function openThread(id){
    return {
      type: Actions.OPEN_THREAD,
      id: id
    }
  }

  function updateThreadId(oldId, newId){
    return{
      type: Actions.UPDATE_THREAD_ID,
      oldId,
      newId
    }
  }

  const actionsCreator =  {
    addMessage,
    openThread,
    addThread,
    updateThreadId
  };

  export default actionsCreator;
