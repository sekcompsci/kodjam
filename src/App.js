import React, { Component } from 'react';
import Button from './components/button';
import Footer from './components/footer';
import Review from './components/box_review';
import PostTimeline from './components/post_timeline'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <PostTimeline></PostTimeline>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
