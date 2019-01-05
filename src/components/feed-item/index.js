import React from 'react';
import {Avatar, Card, Icon} from 'antd';

const {Meta} = Card;
const fav = {float: 'right', fontSize: '1.4rem'};
const favO = {...fav, color: '#f1c40f'};

class FeedItem extends React.Component {
    state = {
        fav: false
    };

    favHandler = () => {
        this.setState({fav: !this.state.fav});
    };

    render() {
        return (
            <Card
                style={{margin: '20px 10px'}}
                cover={<img alt="example" src={this.props.img}/>}
            >
                <Meta
                    avatar={<Avatar src={this.props.profile}/>}
                    title={
                        <div>
                            <b>{this.props.type}</b>
                            <Icon style={this.state.fav ? favO : fav} type={this.state.fav ? 'star' : 'star-o'}
                                  onClick={this.favHandler}/>
                        </div>
                    }
                    description={this.props.description}
                />
                <a style={{float: 'right', marginTop: '10px'}}>อ่านเพิ่มเติม</a>
            </Card>
        )
    }
}

export default FeedItem;