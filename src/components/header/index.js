import React, {Component} from 'react';
import './header.css';
import CustomBar from './custombar'
import SearchBar from './searchbar'

class HeaderBar extends Component {
    render() {
        if(this.props.typeBar === "main"){
            return(
               <CustomBar typeBar="custom" addicon={true} addtitle="Username" />
            
            )
        }
        else if(this.props.typeBar === "search"){
            return(
                <SearchBar />
            )
        }
        else{
            return(
             <div />
            )
        }
    }
}


export default HeaderBar