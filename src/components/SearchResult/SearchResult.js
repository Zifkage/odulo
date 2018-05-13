import React from 'react';
import cookie from 'react-cookies';
import Client from '../../Client/Client';

class SearchResult extends React.Component{

  state = {
    isLoading: false,
    resultClick: ''
  };

  onClick = (username, i) => {
    const thread = this.props.tabs.find(t => t.title === username);

    if(thread){
      this.props.closeModal();

      //Open existing thread
      return this.props.onTabExist(thread.id);
    }

    this.setState({
      isLoading: true,
      resultClick: i
    });
    const props = this.props;
    Client.postThread(cookie.load('token'), username, function (body, JWR) {
      if(JWR.statusCode !== 200) alert('[Client.post] une erreur !');
      props.closeModal();
      console.log(body);
      props.onNewThread(body, true);
    });
  };

  render(){
    return(
      this.props.result.map((u,i) => u.username !== cookie.load('username') ?
        (<p onClick={() => {
          if(!this.state.isLoading) return this.onClick(u.username, i);
        }} key={'su'+i} >{u.username} <span>{(this.state.isLoading && this.state.resultClick === i) ? 'loading...' : null}</span></p>)
        : null)
    )
  }

}

export default SearchResult;