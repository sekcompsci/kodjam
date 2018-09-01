import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Avatar, Button, Col, Row} from 'antd';
import {TiArrowLeftThick, TiCogOutline} from "react-icons/ti";
import './profile.css';
import Footer from '../footer';
import ProfileFeed from '../profile-feed';

class Profile extends React.Component {
    state = {
        follow: this.props.follow
    };

    changeFollow = () => {
        this.setState({follow: !this.state.follow});
    };

    render() {
        return (
            <div>
                <header className="avatar-header">
                    <TiArrowLeftThick className="icon-app" onClick={() => {
                        this.props.history.push(`/`)
                    }}/>
                    {this.props.own ? <TiCogOutline className="icon-app" style={{float: 'right'}}/> : ''}
                </header>
                <Row type="flex" justify="center">
                    <Col className="avatar"><Avatar shape="square" size={120} src={this.props.profile_picture}/></Col>
                </Row>
                <div style={{textAlign: 'center', paddingTop: '5px'}}>
                    {this.props.own ? '' : this.state.follow ?
                        <Button onClick={this.changeFollow} style={{margin: '5px'}}>กำลังติดตาม</Button> :
                        <Button onClick={this.changeFollow} type="primary" style={{margin: '5px'}}>ติดตาม</Button>}
                    <div className="profile-name">{this.props.name}</div>
                    <div className="profile-description">"{this.props.description}"</div>
                </div>
                <Row gutter={8} style={{margin: '10px 8px'}}>
                    <Col span={8}>
                        <div className="profile-stat">
                            <div className="box">
                                <div><b>500</b></div>
                                <div className="title">ติดตาม</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="profile-stat">
                            <div className="box">
                                <div><b>24</b></div>
                                <div className="title">ชื่นชอบ</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="profile-stat">
                            <div className="box">
                                <div><b>100</b></div>
                                <div className="title">ไทม์ไลน์</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <h4 className="achievement">ความสำเร็จ (23)</h4>
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
                        profile={this.props.profile_picture}
                        type="ได้โพส ไทม์ไลน์"
                        description="ทริปลุยเขา เผาไฟป่า"
                    />
                    <ProfileFeed
                        img="https://images.unsplash.com/photo-1524027556923-66e7ec51e251?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2125b2ecf005515f7701153a086d4789&auto=format&fit=crop&w=1950&q=80"
                        profile={this.props.profile_picture}
                        type="ได้โพส รีวิว"
                        description="เผาเสร็จแล้ว เที่ยวเขาหัวโล้นได้"
                    />
                    <ProfileFeed
                        img="https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjI0MX0&s=436a11a0fee324bde54ffd8d515c3ab1&auto=format&fit=crop&w=1950&q=80"
                        profile={this.props.profile_picture}
                        type="ได้โพส ไทม์ไลน์"
                        description="มิชชันแก้ผ้าหน้าหนาว"
                    />
                </div>
                <Footer typeBar="main"/>
            </div>
        )
    }
}

Profile.propTypes = {
    name: PropTypes.string
};

Profile.defaultProps = {
    own: false,
    follow: false
};

const mapStateToProps = state => {
    return {
        name: state.users.name || 'โคตรแจ่ม จุงเบย',
        profile_picture: state.users.picture,
        description: "ฝันอะไรไว้หลากหลาย เป็นอะไรก็ได้ที่อยากเป็น"
    }
};

export default connect(mapStateToProps)(Profile)