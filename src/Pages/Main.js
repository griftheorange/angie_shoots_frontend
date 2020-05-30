import React, { useState } from 'react';
import { connect } from 'react-redux'

import Fetcher from '../adaptor.js'

function Main(props) {

    const [dragging, setDragging] = useState(false)

    function handleFileSubmit(e){
        e.preventDefault()
        let fetch = Fetcher.uploadImage(e.target.querySelector('input').files[0])
        if(fetch){
            fetch
            .then(console.log)
        }
    }

    function handleDragIn(e){
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDragging(true)
        }
    }

    function handleDragOut(e){
        e.preventDefault()
        e.stopPropagation()
        setDragging(false)
    }

    function handleDrop(e){
        e.preventDefault()
        e.stopPropagation()
        setDragging(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            let fetch = Fetcher.uploadImages(e.dataTransfer.files)
            if(fetch){
                fetch
                .then(console.log)
        }
        }
    }

    function handleDragOver(e){
        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <>
        <div className='title-container'>
            <h1 className='title'>#AngieShoots</h1>
        </div>
        <div className='photos' style={{height:'100%', width:'90%', marginLeft:'5%'}}>
            <form encType='multipart/form-data' onSubmit={handleFileSubmit}>
                <input type='file' multiple/>
                <input type='submit'/>
            </form>
            <div onDrop={handleDrop} 
                 onDragEnter={handleDragIn}
                 onDragLeave={handleDragOut}
                 onDragOver={handleDragOver}
                 style={{width:'100%', height:'30%', border:'1px solid green'}}>

            </div>
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