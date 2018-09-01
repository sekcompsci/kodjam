import React, { Component } from 'react';
import Footer from './components/footer';
// import Review from './components/box_review';
import PostTimeline from './components/post/post_timeline'
import PostReview from './components/post/post_review'
import Header from './components/header'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header typeBar="search"></Header>
          {/* <PostTimeline></PostTimeline> */}
          <PostReview></PostReview>

          <Footer typeBar="review" ForTimelineisFirst={true}></Footer>
      </div>
    );
  }
}

export default App;
