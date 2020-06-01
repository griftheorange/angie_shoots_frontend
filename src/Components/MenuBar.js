import React from 'react';
import {
    Link
} from 'react-router-dom'

function MenuBar(props) {

    function genMenuLinks(itemHash){
        return (
            (Object.keys(itemHash)).map((key) => {
                return (
                    <Link to={itemHash[key]}>
                        <div className='navbar-link'>
                            {'| ' + key + ' |'}
                        </div>
                    </Link>
                )
            })
        )
    }

    return (
        <div className='menu-bar'>
            {genMenuLinks({
                'Home':'/',
                'About Me':'/about-me',
                'File Upload':'/upload'
            })}
        </div>
    );
}

export default MenuBar;