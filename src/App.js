import React from 'react';

//components
import NavBar from './components/NavBar/NavBar';
import ThreadsTab from './components/ThreadsTab/ThreadsTab';
import ThreadDisplay from "./components/ThreadDisplay/ThreadDisplay";

const  App = () => (
  <div>

    <NavBar/>
          <ThreadsTab/>

            <ThreadDisplay/>
  </div>
);


export default App;
