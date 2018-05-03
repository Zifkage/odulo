import React from 'react';
import SearchBar from '../UI/SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import { connect } from 'react-redux';
import actionsCreator from '../../store/actionsCreator';


class NewMessage extends React.Component {

  state = {
    searchResult: []
  };

  handleResult = (result) => {
    this.setState({searchResult: result})
  };

  render(){
    return (
      <div onClick={e => e.stopPropagation()}>
        <SearchBar onResult={this.handleResult}/>
        <SearchResult closeModal={this.props.closeModal} onNewThread={this.props.onNewThread} result={this.state.searchResult} />
      </div>
    )
  }

}

const mapDispatchToNewThreadProps = (dispatch) => {
  return{
    onNewThread: (threadId, title) => {
      dispatch(actionsCreator.addThread(threadId, title));
      dispatch(actionsCreator.openThread(threadId));
    }
  }
};



export  default connect(undefined, mapDispatchToNewThreadProps)(NewMessage);