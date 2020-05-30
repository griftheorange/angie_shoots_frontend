import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import MenuBar from './Components/MenuBar.js'
import ContentBox from './Components/ContentBox.js'
import './CSS/App.css'

function App() {
  return (
    <Router>
      <div className="page">
        <MenuBar/>
        <ContentBox/>
      </div>
    </Router>
  );
}

export default App;
