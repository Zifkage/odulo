import React from 'react';
import SearchBar from '../UI/SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';


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
        <SearchResult onTabExist={this.props.onpenTab} tabs={this.props.tabs} closeModal={this.props.closeModal} onNewThread={this.props.onNewThread} result={this.state.searchResult} />
      </div>
    )
  }

}


export  default NewMessage;