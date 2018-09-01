import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Avatar, Button, Col, Row} from 'antd';
import {TiArrowLeftThick, TiCogOutline} from "react-icons/ti";
import './profile.css';

import Footer from '../footer';

class Profile extends React.Component {
    state = {
        follow: this.props.follow
    };

    changeFollow = () => {
        this.setState({follow: !this.state.follow});
    }

    render() {
        return <div>
            <header className="avatar-header">
                <TiArrowLeftThick className="icon-app" onClick={() => {
                    this.props.history.push(`/login`)
                }}/>
                <TiCogOutline className="icon-app" style={{float: 'right'}}/>
            </header>
            <Row type="flex" justify="center">
                <Col className="avatar"><Avatar shape="square" size={120} src={this.props.profile_picture}/></Col>
            </Row>
            <div style={{textAlign: 'center', paddingTop: '5px'}}>
                {this.props.own ? '' : this.state.follow ? <Button onClick={this.changeFollow} style={{margin: '5px'}}>Following</Button> :
                    <Button onClick={this.changeFollow} type="primary" style={{margin: '5px'}}>Follow</Button>}
                <div className="profile-name">{this.props.name}</div>
                <div className="profile-description">"{this.props.description}"</div>
            </div>
            <Row gutter={8} style={{margin: '10px 8px'}}>
                <Col span={8}>
                    <div className="profile-stat">
                        <div className="box">
                            <div><b>500</b></div>
                            <div className="title">Follow</div>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="profile-stat">
                        <div className="box">
                            <div><b>24</b></div>
                            <div className="title">Favorite</div>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="profile-stat">
                        <div className="box">
                            <div><b>100</b></div>
                            <div className="title">Timeline</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <h4 style={{paddingLeft: '10px'}}>Achievement</h4>
            <Row gutter={16} style={{padding: '0 10px'}}>
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
                    <a style={{fontSize: '14px'}}>View all</a>
                </Col>
            </Row>
            <Footer typeBar="main"/>
        </div>
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