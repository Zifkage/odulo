import React from 'react';

import client from '../../../Client/Client';

class SearchBar extends React.Component{

  state = {
    value: ''
  };

  t = null;

  change = e => {
    const value = e.target.value;
    this.setState({value});
    if(this.t){
      clearTimeout(this.t);
    }
    const onResult = this.props.onResult;
    this.t = setTimeout(function () {
      client.fetchUser(value, function (result, JWR) {
        onResult(result);
      });
    }, 500);
  };

  render(){
    return (
      <input value={this.state.value} onChange={this.change} type="text" />
    )
  }

}

export default SearchBar;