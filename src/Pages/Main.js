import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

function Main(props) {

    const [numColumns, setNumColumn] = useState(3)

    function genPhotos(){
        return props.images.map((image) => {
            return (
                <a href={image.route}>
                    <figure className='gallery__item'>
                        <img className='gallery__img' src={image.route}/>
                    </figure>
                </a>
            )
        })
    }

    return (
        <>
        <div className='title-container'>
            <h1 className='title'>#AngieShoots</h1>
        </div>
        <div className='photos-container'>
            <div className='photos'>
                {genPhotos()}
            </div>
        </div>
        </>
    );
}

function mapStateToProps(state){
    return {
        images:state.images
    }
}

function mapDispatchToProps(dispatch){
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);