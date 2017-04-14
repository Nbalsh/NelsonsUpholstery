import React, { Component } from 'react';
import './Picture.css';

class Picture extends Component {
    render() {
        return (
            <div className='-picture' onClick={() => this.props.setItem(this.props.featureItem)}>
                <img src={this.props.featureItem.pictures[0].src} className='-pictureThumbnailImage' alt={this.props.featureItem.pictures[0].title}/>
                
            </div>
        );
    }
}

export default Picture;



