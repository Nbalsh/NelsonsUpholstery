import React, { Component } from 'react';
import './Gallery.css';

const galleryData = require('../../gallery.json');

class Gallery extends Component {
// store entire obj that is selected? all images?
// onClick passed down and then is triggered (so set the pictures selected above) 
    constructor (props) {
        super(props);
         this.state = {
            isExpandedPopUp: false,
            selectedThumbnailItem: galleryData.features[0],
            selectedThumbnailImage: galleryData.features[0].pictures[0]
        };

        this.expandImage = this.expandImage.bind(this);
        this.setSelectedThumbnail = this.setSelectedThumbnail.bind(this);
        this.renderItemArea = this.renderItemArea.bind(this);
        this.renderFullScreenPopup = this.renderFullScreenPopup.bind(this);
        this.closeFullScreenViewer = this.closeFullScreenViewer.bind(this);
    }

    expandImage() {
        this.setState({isExpandedPopUp: true});
    }

    setSelectedThumbnail(i) {
        this.expandImage();
        this.setState({
            selectedThumbnailItem: i,
            selectedThumbnailImage: i.pictures[0]
        });
    }

    closeFullScreenViewer() {
        this.setState({
            isExpandedPopUp: false,
            selectedThumbnailImage: null
        });
    }

    renderItemArea (item, key) {
        let backgroundImage = {
            backgroundImage: 'url('+item.pictures[0].src+')'
        };
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
                    <div className='-picture' style={backgroundImage} onClick={() => this.setSelectedThumbnail(item)}/>
                </div>
            </div>
        );
    }

    renderFullScreenPopup () {
        let thumbnail = this.state.selectedThumbnailItem.pictures.length > 1 ?
        <div className='-thumbnailContainer'>
        {
            this.state.selectedThumbnailItem.pictures.map((item, i) => {
                return (
                    <div key={i} className='-thumbnailPictureContainer'>
                        <img src={item.src} className='-thumbnailImage' alt={i} width='100%' height='100%' onClick={() => this.setState({selectedThumbnailImage: item})}/>
                    </div>
                );
            })
        }
        </div>
        : 
        null;
        return (
            <div className='-fullScreenView'>
                <div className='-fullScreenContainer'>
                    <div className='-left'>{thumbnail}</div>
                    <div className='-right'>
                        <img src={this.state.selectedThumbnailImage.src} className='-fullScreenThumbnail' alt={this.state.selectedThumbnailItem.title}/>
                        <img src='../../../closeFullImage.svg' className='-closeFullScreenPic' onClick={this.closeFullScreenViewer} alt='closeButton'/>
                    </div>
                </div>
            </div>
        );
    }

    render() {

        return (
            <div className='-gallery'>
                {galleryData.features.map((item, key) => this.renderItemArea(item, key))}
                {this.state.isExpandedPopUp ? this.renderFullScreenPopup() : null}
            </div>
        );
    }
}

export default Gallery;



