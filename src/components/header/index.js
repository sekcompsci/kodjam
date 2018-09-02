import React, {Component} from 'react';
import './header.css';
import {TiArrowLeftThick} from "react-icons/ti";
import {Input, Icon} from 'antd';
import {Link} from 'react-router-dom';

const Search = Input.Search;

class HeaderBar extends Component {
    render() {
        if (this.props.mode === 'navigator') {
            return (
                <div>
                    <div className="head">
                        <TiArrowLeftThick style={{float: 'left', fontSize: '2rem', marginLeft: '20px'}}/>
                    </div>
                    {this.props.children}
                </div>
            )
        }

        return (
            <div>
                <div className="head">
                    <Search
                        placeholder="search"
                        onSearch={value => console.log(value)}
                        style={{width: 200}}
                        enterButton={<Link to='/search'><Icon type="search" /></Link>}
                    />
                </div>
                {this.props.children}
            </div>
        )
    }
}


export default HeaderBar