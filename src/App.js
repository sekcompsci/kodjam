import React, { Component } from 'react';
import Footer from './components/footer';
// import Review from './components/box_review';
import PostTimeline from './components/post_timeline'
import PostReview from './components/post_review'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <PostReview></PostReview>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
