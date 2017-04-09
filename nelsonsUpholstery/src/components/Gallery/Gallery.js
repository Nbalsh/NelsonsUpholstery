import React, { Component } from 'react';
import './Gallery.css';
import Picture from '../Picture/Picture';

const galleryData = require('../../gallery.json');

class Gallery extends Component {

    constructor (props) {
        super(props);
        
        this.renderItemArea = this.renderItemArea.bind(this);
    }

    renderItemArea (item, key) {
        let images = item.pictures.map((item, i) => <Picture item={item} key={i}/>);
        return (
            <div key={key} className='-pictureArea'>
                <div className='-top'>
                    <div className='-title'>
                        {item.title ? item.title : null}
                    </div>
                    <div className='-description'>
                        {item.description ? item.description : null}
                    </div>
                </div>
                <div className='-bottom'>
                    {images}
                </div>
            </div>
        );
    }

    render() {
        console.log(galleryData);
        return (
            <div className='-gallery'>
                {galleryData.features.map((item, key) => this.renderItemArea(item, key))}
            </div>
        );
    }
}

export default Gallery;



