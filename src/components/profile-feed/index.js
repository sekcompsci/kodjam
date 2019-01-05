import React from 'react';
import {Avatar, Card, Icon} from "antd";
import firebase from 'firebase';

class ProfileFeed extends React.Component {
    state = {
        fav: false,
        count: 1,
        username: null,
        userimage: null,
        follower_n: 0,
        following_n: 0,
        favorite: 0,
        timeline: 0,
        achievement: 0,
        caption: "",
        follow: false,
        userpath: 'Users/' + this.props.uid
    };

    componentWillMount() {
        let db_userpath = firebase.database().ref(this.state.userpath);

        db_userpath.on('value', ss => {
            this.setState({
                username: ss.val().username,
                userimage: ss.val().userimage,
                follower_n: ss.val().follower_n,
                following_n: ss.val().following_n,
                favorite: ss.val().favorite,
                timeline: ss.val().timeline,
                achievement: ss.val().achievement,
                caption: ss.val().caption,
            })
        })

    }

    changeFav = () => {
        let db_userpath = firebase.database().ref(this.state.userpath);

        if (this.state.count % 2 === 0) {
            db_userpath.set({
                username: this.state.username,
                userimage: this.state.userimage,
                follower_n: this.state.follower_n,
                following_n: this.state.following_n,
                favorite: this.state.favorite - 1,
                timeline: this.state.timeline,
                achievement: this.state.achievement,
                caption: this.state.caption,
            })
            this.setState({favorite: this.state.favorite - 1})
        }
        else {
            db_userpath.set({
                username: this.state.username,
                userimage: this.state.userimage,
                follower_n: this.state.follower_n,
                following_n: this.state.following_n,
                favorite: this.state.favorite + 1,
                timeline: this.state.timeline,
                achievement: this.state.achievement,
                caption: this.state.caption,
            })
            this.setState({favorite: this.state.favorite + 1})
        }
        this.setState({count: this.state.count + 1})
        this.setState({fav: !this.state.fav});
    };

    render() {
        const {Meta} = Card;
        const fav = {float: 'right', fontSize: '1.4rem'};
        const favO = {...fav, color: '#f1c40f'};

        return (
            <Card
                style={{margin: '20px 10px'}}
                cover={<img alt="example" src={this.props.img}/>}
                actions={this.props.own ? [<Icon type="edit"/>, <Icon type="ellipsis"/>] : ''}
            >
                <Meta
                    avatar={<Avatar src={this.props.profile}/>}
                    title={
                        <div>
                            <b>{this.props.type}</b>
                            <Icon style={this.state.fav ? favO : fav} type={this.state.fav ? 'star' : 'star-o'}
                                  onClick={this.changeFav}/>
                        </div>
                    }
                    description={this.props.description}
                />
            </Card>
        );
    }
}

export default ProfileFeed;