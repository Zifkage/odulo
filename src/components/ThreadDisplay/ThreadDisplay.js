import { connect } from 'react-redux';
import ActionsCreator from '../../store/actionsCreator';
import Thread from "../Thread/Thread";

const mapStateToThreadProps = (state) => {
  const thread = state.threads.find(t => t.threadId === state.activeThreadId) || {};
  return {
    thread,
    threadId: thread.threadId || null
  }
};

const mapDispatchToThreadProps = (dispatch) => {
  return{
    onMessageSubmit: (text, author, threadId) => {
      dispatch(ActionsCreator.addMessage(text,threadId, author));
    },

    onThreadIdUpdate: (oldId, newId) => {
      dispatch(ActionsCreator.updateThreadId(oldId, newId));
      dispatch(ActionsCreator.openThread(newId));
    }
  }
};


const ThreadDisplay = connect(mapStateToThreadProps, mapDispatchToThreadProps)(Thread);

export default ThreadDisplay;