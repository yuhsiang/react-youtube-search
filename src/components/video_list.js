import React, { Component } from 'react';
import VideoListItem from './video_list_item';
import VideoDetail from './video_detail';

class VideoList extends Component {

  constructor(props) {
    super(props);
  }

  getVideoListItem() {
    return this.props.videos.map((video) => {
      return (
        <VideoListItem
          key={video.id.videoId}
          onVideoSelect={this.props.onVideoSelect}
          video={video}
        />
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <ul className="col-md-4 list-group">
        {this.getVideoListItem()}
      </ul>
    );
  }
}

export default VideoList;
