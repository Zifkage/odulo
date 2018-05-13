import Actions from './actions'

  function addMessage(text, threadId, author) {
    return {
      type: Actions.ADD_MESSAGE,
      text,
      threadId,
      author
    }
  }

  function addThreads(threads){
    return{
      type: Actions.ADD_THREAD,
      threads: threads
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
    addThreads,
    updateThreadId
  };

  export default actionsCreator;
