import React, { Component } from 'react';

class VideoListItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {video, onVideoSelect} = this.props;
    const videoSnippet = this.props.video.snippet;
    const imageURL = videoSnippet.thumbnails.default.url;

    return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageURL}/>
          </div>
          <div className="media-body">
            <div className="media-heading">{videoSnippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
