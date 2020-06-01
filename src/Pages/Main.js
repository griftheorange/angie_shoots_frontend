import React from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

function Main(props) {

    function genPhotos(){
        console.log(props.images)
        return props.images.map((image) => {
            return (
                <div className='image-card'>
                    <a href={image.route}>
                        <img title={image.title}
                                src={image.route}/>
                    </a>
                </div>
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