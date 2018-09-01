import React from 'react';
import FeedItem from '../feed-item';
import Header from '../header';
import './feed.css';

class Feed extends React.Component {
    render() {
        return (
            <Header>
                <div className="feed">
                    <FeedItem />
                </div>
            </Header>
        )
    }
}

export default Feed;