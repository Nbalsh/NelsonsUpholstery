import React, { Component } from 'react';
import './Picture.css';

class Gallery extends Component {

    constructor (props) {
        super(props);

        this.state = {isExpandedPopUp: false}

        this.expandImage = this.expandImage.bind(this);
    }

    expandImage() {
        this.setState({isExpandedPopUp: !this.state.isExpandedPopUp});
    }

    render() {
        let fullScreenImg = (
            <div className='-fullScreenContainer'>
                <div className='-fullScreenPic'>
                    <img src={this.props.item.src} alt={this.props.item.title}/>
                </div>
            </div>
        );
        return (
            <div className='-picture' onClick={this.expandImage}>
                <img src={this.props.item.src} alt={this.props.item.title}/>
                {this.state.isExpandedPopUp ? fullScreenImg : null}
            </div>
        );
    }
}

export default Gallery;



