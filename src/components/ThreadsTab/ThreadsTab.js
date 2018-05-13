import actionsCreator from '../../store/actionsCreator';

import { connect } from 'react-redux';

//components
import  Tabs from '../Tabs/Tabs';

const mapStateToTabsProps = (state) => {
  console.log(state);
  const tabs = state.threads.map(t => {
    return {
      id: t.id,
      title: t.title,
      active: t.id === state.activeThreadId,
      lastMessage: t.lastMessage
    }
  });

  return {
    tabs
  };
};

const mapDispatchToTabsProps = (dispatch) => {
  return {
    onTabClick: (id) => {
      dispatch(actionsCreator.openThread(id));
    },
    onNewThread: (threads, byAuthor) => {
      dispatch(actionsCreator.addThreads(threads));
      if(threads.length === 1 && byAuthor){
        dispatch(actionsCreator.openThread(threads[0].id));
      }

    }
  }
};

const ThreadsTab = connect(mapStateToTabsProps, mapDispatchToTabsProps)(Tabs);

export default ThreadsTab;