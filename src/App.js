import React, { Component } from 'react';
import Footer from './components/footer';
// import Review from './components/box_review';
import PostTimeline from './components/post/post_timeline'
import PostReview from './components/post/post_review'
import SearchPage from './components/search'
import Header from './components/header'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header typeBar="main" icon={true} title="Timeline"></Header>
          {/* <PostReview></PostReview> */}
          {/* <PostTimeline></PostTimeline> */}
          <SearchPage></SearchPage>

          <Footer typeBar="main" ForTimelineisFirst={false}></Footer>
      </div>
    );
  }
}

export default App;
