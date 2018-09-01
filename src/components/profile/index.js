import React from 'react';
import {connect} from 'react-redux';
import {Avatar, Button, Col, Row} from 'antd';
import {TiArrowLeftThick, TiCogOutline} from "react-icons/ti";
import './profile.css';
import ProfileFeed from '../profile-feed';
import firebase from "firebase/app";
import {Cookies, withCookies} from 'react-cookie';
import {instanceOf} from 'prop-types';
import {selectTab, selectFooterType} from "../../actions/settings";

class Profile extends React.Component {
    state = {
        username: null,
        userimage: null,
        follower_n: 0,
        following_n: 0,
        favorite: 0,
        timeline: 0,
        achievement: 0,
        caption: "",
        follow: false,
        userpath: 'Users/' + this.props.cookies.get('FIREBASEUID'),
        hostpath: 'Users/' + this.props.match.params.uid,
        own: this.props.match.params.uid === this.props.cookies.get('FIREBASEUID')
    };
    followState = () => {
        let db_userpath = firebase.database().ref(this.state.userpath);

        if (this.state.follow === false) {
            db_userpath.set({
                username: this.state.username,
                userimage: this.state.userimage,
                follower_n: this.state.follower_n,
                following_n: this.state.following_n + 1,
                favorite: this.state.favorite,
                timeline: this.state.timeline,
                achievement: this.state.achievement,
                caption: this.state.caption,
            })
        }
        else {
            db_userpath.set({
                username: this.state.username,
                userimage: this.state.userimage,
                follower_n: this.state.follower_n,
                following_n: this.state.following_n - 1,
                favorite: this.state.favorite,
                timeline: this.state.timeline,
                achievement: this.state.achievement,
                caption: this.state.caption,
            })
        }

        this.setState({follow: !this.state.follow})
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
                userProfile: ss.val().userimage + '?height=300'
            })
        })

        
    }

    render() {
        return (
            <div>
                <header className="avatar-header">
                    <TiArrowLeftThick className="icon-app" onClick={() => {
                        this.props.selectTab(0);
                        this.props.history.push(`/feed`)
                    }}/>
                    {this.state.own ? <TiCogOutline className="icon-app" style={{float: 'right'}}/> : ''}
                </header>
                <Row type="flex" justify="center">
                    <Col className="avatar"><Avatar shape="square" size={120} src={this.state.userProfile}/></Col>
                </Row>
                <div style={{textAlign: 'center', paddingTop: '5px'}}>
                    {this.state.own ? '' : this.state.follow ?
                        <Button onClick={this.followState} style={{margin: '5px'}}>กำลังติดตาม</Button> :
                        <Button onClick={this.followState} type="primary" style={{margin: '5px'}}>ติดตาม</Button>}
                    <div className="profile-name">{this.state.username}</div>
                    <div className="profile-description">"{this.state.caption}"</div>
                </div>
                <Row gutter={8} style={{margin: '10px 8px'}}>
                    <Col span={8}>
                        <div className="profile-stat">
                            <div className="box">
                                <div><b>{this.state.following_n}</b></div>
                                <div className="title">ติดตาม</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="profile-stat">
                            <div className="box">
                                <div><b>{this.state.favorite}</b></div>
                                <div className="title">ชื่นชอบ</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="profile-stat">
                            <div className="box">
                                <div><b>{this.state.timeline}</b></div>
                                <div className="title">ไทม์ไลน์</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <h4 className="achievement">ความสำเร็จ ({this.state.achievement})</h4>
                <Row gutter={16} className="badge">
                    <Col span={4} style={{paddingLeft: '5%'}}>
                        <Avatar src="https://image.ibb.co/eoKofK/001_waterfall.png" alt="001_waterfall"/>
                    </Col>
                    <Col span={4} style={{paddingLeft: '5%'}}>
                        <Avatar src="https://image.ibb.co/ndDELK/002_cityscape.png" alt="002_cityscape"/>
                    </Col>
                    <Col span={4} style={{paddingLeft: '5%'}}>
                        <Avatar src="https://image.ibb.co/mPLuLK/003_iceberg.png" alt="003_iceberg"/>
                    </Col>
                    <Col span={4} style={{paddingLeft: '5%'}}>
                        <Avatar src="https://image.ibb.co/c2uX7z/004_desert.png" alt="004_desert"/>
                    </Col>
                    <Col span={8} style={{textAlign: 'right', padding: '3px 8%'}}>
                        <a style={{fontSize: '14px'}}>ดูทั้งหมด</a>
                    </Col>
                </Row>
                <div style={{background: '#ECECEC', width: '100%', paddingTop: '1px', paddingBottom: '10vh'}}>
                    <ProfileFeed
                        img="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bec431d5c80ae862ceba47454d36d9cc&auto=format&fit=crop&w=1701&q=80"
                        profile={this.state.userProfile}
                        type="ได้โพส ไทม์ไลน์"
                        description="ทริปลุยเขา เผาไฟป่า"
                        own={this.state.own}
                        uid={this.props.match.params.uid}
                    />
                    <ProfileFeed
                        img="https://images.unsplash.com/photo-1524027556923-66e7ec51e251?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2125b2ecf005515f7701153a086d4789&auto=format&fit=crop&w=1950&q=80"
                        profile={this.state.userProfile}
                        type="ได้โพส รีวิว"
                        description="เผาเสร็จแล้ว เที่ยวเขาหัวโล้นได้"
                        own={this.state.own}
                        uid={this.props.match.params.uid}
                    />
                    <ProfileFeed
                        img="https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjI0MX0&s=436a11a0fee324bde54ffd8d515c3ab1&auto=format&fit=crop&w=1950&q=80"
                        profile={this.state.userProfile}
                        type="ได้โพส ไทม์ไลน์"
                        description="มิชชันแก้ผ้าหน้าหนาว"
                        own={this.state.own}
                        uid={this.props.match.params.uid}
                    />
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    cookies: instanceOf(Cookies).isRequired
};

const mapDispatchToProps = {
    selectTab,
    selectFooterType
};

export default withCookies(connect(null, mapDispatchToProps)(Profile))