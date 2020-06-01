import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { connect } from 'react-redux'

import Fetcher from './adaptor.js'
import MenuBar from './Components/MenuBar.js'
import ContentBox from './Components/ContentBox.js'
import './CSS/App.css'

function App(props) {

  Fetcher.getImages()
  .then((response) =>{
    props.setImages(response)
  })

  return (
    <Router>
      <div className="page">
        <MenuBar/>
        <ContentBox/>
      </div>
    </Router>
  );
}

function mapStateToProps(state){
  return {}
}

function mapDispatchToProps(dispatch){
  return {
    setImages: (images) => {
      dispatch({
        type:'SET_IMAGES',
        value:images
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
