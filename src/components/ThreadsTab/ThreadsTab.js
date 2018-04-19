import actionsCreator from '../../store/actionsCreator';

import { connect } from 'react-redux';

//components
import  Tabs from '../Tabs/Tabs';

const mapStateToTabsProps = (state) => {
  const tabs = state.threads.map(t => {
    return {
      id: t.threadId,
      title: t.title,
      active: t.threadId === state.activeThreadId,
      lastMessage: t.lastMessage
    }
  });

  return {
    tabs
  };
};

const mapDispatchToTabsProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(actionsCreator.openThread(id))
    }
  }
};

const ThreadsTab = connect(mapStateToTabsProps, mapDispatchToTabsProps)(Tabs);

export default ThreadsTab;