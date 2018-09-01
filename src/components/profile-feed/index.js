import React from 'react';
import {Avatar, Card, Icon} from "antd";

class ProfileFeed extends React.Component {
    state = {
        fav: false
    };

    changeFav = () => {
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