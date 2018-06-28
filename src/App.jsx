import React from 'react';

import './App.css';
import Tasks from './Container/Tasks'
import Header from './Container/Header'

const App = () => (
    
  <React.Fragment>
    <Header> To-do-list </Header>
    <Tasks />
  </React.Fragment>
  
);

export default App;
