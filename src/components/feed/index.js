import React from 'react';
import FeedItem from '../feed-item';
import Header from '../header';
import './feed.css';
import firebase from 'firebase';

class Feed extends React.Component {
    state = {
        data: null,
    };

    componentWillMount() {
        let db = firebase.database().ref('/');
        db.on('value', data => {
            this.setState({data: data.val().Data.E});
        })
    }

    render() {
        return (
            <Header>
                <div className="feed">
                    {
                        this.state.data ?
                            this.state.data.map((obj, index) => {
                                return (
                                    <FeedItem key={index}
                                              img={obj.images}
                                              profile={obj.title}
                                              type={obj.title}
                                              description={obj.Description}
                                    />
                                )
                            }) : ''
                    }
                </div>
            </Header>
        )
    }
}

export default Feed;