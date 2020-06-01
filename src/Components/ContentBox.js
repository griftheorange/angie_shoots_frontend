import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom'

import Main from '../Pages/Main.js'
import AboutMe from '../Pages/AboutMe.js'
import Upload from '../Pages/Upload.js'

function ContentBox(props) {
    return (
        <div className='content-box'>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/about-me' component={AboutMe}/>
                <Route path='/upload' component={Upload}/>
            </Switch>
        </div>
    );
}

export default ContentBox;