import React, {Component} from 'react';
import Footer from './components/footer';
// import Review from './components/box_review';
import SearchPage from './components/search'
import Header from './components/header'
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header typeBar="main" icon={true} title="Timeline"/>
                {/* <PostReview></PostReview> */}
                {/* <PostTimeline></PostTimeline> */}
                <SearchPage/>

                <Footer typeBar="main" ForTimelineisFirst={false}/>
            </div>
        );
    }
}

export default App;
