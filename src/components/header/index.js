import React, {Component} from 'react';
import './header.css';
import CustomBar from './custombar'
import SearchBar from './searchbar'

class HeaderBar extends Component {
    render() {
        if (this.props.typeBar === "main") {
            return (
                <CustomBar history={this.props.history} typeBar="custom" icon={true} addtitle={this.props.title}/>
            )
        }
        else if (this.props.typeBar === "search") {
            return (
                <SearchBar history={this.props.history}/>
            )
        }
        else {
            return (
                <div/>
            )
        }
    }
}


export default HeaderBar