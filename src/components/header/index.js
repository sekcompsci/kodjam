import React, {Component} from 'react';
import './header.css';
import SearchBar from './searchbar'

class HeaderBar extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                {this.props.children}
            </div>
        )
    }
}


export default HeaderBar