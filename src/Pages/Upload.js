import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Loader, Dimmer } from 'semantic-ui-react'

import Fetcher from '../adaptor.js'

function Upload(props) {

    const [dragging, setDragging] = useState(false)
    const [loading, setLoading] = useState(false)

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

    function handleDragOver(e){
        e.preventDefault()
        e.stopPropagation()
    }
    
    function handleDrop(e){
        e.preventDefault()
        e.stopPropagation()
        setDragging(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            let filenames = props.fileList.map((file) => {return file.name})
            for(let i = 0; i < e.dataTransfer.files.length; i++){
                let file = e.dataTransfer.files[i]
                if(['image/gif', 'image/jpeg', 'image/png', 'image/tiff'].includes(file['type'])){
                    if(filenames.includes(file.name)){
                        props.deleteFileFromList(file.name)
                        props.appendFileList(file)
                    } else {
                        props.appendFileList(file)
                    }
                }
            }
        }
    }

    function handleFileLoad(e){
        e.preventDefault()
        let filenames = props.fileList.map((file) => {return file.name})
        for(let i = 0; i < e.target.files.length; i++){
            let file = e.target.files[i]
            console.log(file)
            if(['image/gif', 'image/jpeg', 'image/png', 'image/tiff'].includes(file['type'])){
                if(file.size <= 10485760){
                    let filenames = props.fileList.map((file) => {return file.name})
                    if(filenames.includes(file.name)){
                        props.deleteFileFromList(file.name)
                        props.appendFileList(file)
                    } else {
                        props.appendFileList(file)
                    }
                } else {
                    console.log(`${file.name} filesize too big: ${file.size}`)
                }
            }
        }
    }

    function handleFileSubmit(){
        setLoading(true)
        Fetcher.uploadImages(props.fileList)
        .then((response) => {
            props.addImages(response)
            props.setFileList([])
            setLoading(false)
        })
    }

    function genFileTags(){
        let fileTags = []
        if(props.fileList){
            for(let i = 0; i < props.fileList.length; i++){
                let file = props.fileList[i]
                fileTags.push(
                    <div className='file-label'>
                        <p>{file.name}</p>
                        <button onClick={()=>{props.deleteFileFromList(file.name)}}>Remove File</button>
                    </div>
                )
            }
        }
        return fileTags
    }

    return (
        <div className='upload-page-container'>
            <Dimmer active={loading}>
                <Loader/>
            </Dimmer>
            <div className='upload-page'>
                <div className='upload-title'>
                    <h1>Upload Files</h1>
                </div>
                <div className='upload-dropbox'
                    onDrop={handleDrop} 
                    onDragEnter={handleDragIn}
                    onDragLeave={handleDragOut}
                    onDragOver={handleDragOver}>
                        <div className='upload-placeholder'>
                            <input style={{display:'none'}}
                                   onChange={handleFileLoad} 
                                   multiple
                                   type='file'
                                   name='file'
                                   id='file'
                                   value=""/>
                            <label for='file'>Choose a File or Drag and Drop</label>
                        </div>
                </div>
                <div className='upload-form-container'>
                    <div className='file-queue-list'>
                        {genFileTags()}
                    </div>
                    <div className='submission'>
                        <button onClick={handleFileSubmit}>Yeet</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state){
    return {
        fileList: state.fileList
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteFileFromList: (filename) => {
            dispatch({
                type:'DELETE_FILE_FROM_LIST',
                value:filename
            })
        },
        appendFileList: (file) => {
            dispatch({
                'type':'APPEND_FILE_LIST',
                'value':file
            })
        },
        setFileList: (filesArr) => {
            dispatch({
                'type':'SET_FILE_LIST',
                'value':filesArr
            })
        },
        addImages: (images) => {
            dispatch({
                type:'ADD_IMAGES',
                value:images
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);