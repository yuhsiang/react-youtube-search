import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCs5G_bqUGgp7XKtPMkcXX9u0TopBw_IeU';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo : null
    };

    this.videoSearch('Curry');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onVideoSearch={videoSearch}></SearchBar>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
           onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
           videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
