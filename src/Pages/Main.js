import React from 'react';
import { connect } from 'react-redux'

import Fetcher from '../adaptor.js'

function Main(props) {


    function handleFileSubmit(e){
        e.preventDefault()
        let fetch = Fetcher.uploadImage(e.target.querySelector('input').files[0])
        if(fetch){
            fetch
            .then(console.log)
        }
    }

    return (
        <>
        <div className='title-container'>
            <h1 className='title'>#AngieShoots</h1>
        </div>
        <div className='photos' style={{height:'100%', width:'90%', marginLeft:'5%'}}>
            <form encType='multipart/form-data' onSubmit={handleFileSubmit}>
                <input type='file'/>
                <input type='submit'/>
            </form>
        </div>
        </>
    );
}

function mapStateToProps(state){
    return {}
}

function mapDispatchToProps(dispatch){
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);