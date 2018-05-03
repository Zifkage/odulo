import React from 'react';
import io from './socket';


//components
import NavBar from './components/NavBar/NavBar';
import ThreadsTab from './components/ThreadsTab/ThreadsTab';
import ThreadDisplay from "./components/ThreadDisplay/ThreadDisplay";

class App extends React.Component {

  componentDidMount(){
    io.socket.get('/user/join', (body, JWR) => {

      console.log('[didM] and with status code: ', JWR.statusCode);
    });
  }

  render(){
    return(
      <div>
        <NavBar/>
        <ThreadsTab/>
        <ThreadDisplay/>
      </div>
    )
  }
}

export default App;
