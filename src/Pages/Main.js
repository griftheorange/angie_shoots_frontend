import React from 'react';
import { connect } from 'react-redux'

function Main(props) {

    function genPhotos(){
        return props.images.map((image) => {
            return (
                <a href={image.route}>
                    <img title={image.title}
                            src={image.route}
                            style={{width:"100%", height:'auto'}}/>
                </a>
            )
        })
    }

    return (
        <>
        <div className='title-container'>
            <h1 className='title'>#AngieShoots</h1>
        </div>
        <div className='photos'>
            {genPhotos()}
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