import React, {Component} from 'react';
import './header.css';
import CustomBar from './custombar'
import SearchBar from './searchbar'

class HeaderBar extends Component {
    render() {
        if(this.props.typeBar=="main"){
            return(
               <CustomBar typeBar="custom" addicon={true} addtitle="Username"></CustomBar>
            
            )
        }
        else if(this.props.typeBar=="search"){
            return(
                <SearchBar></SearchBar>
            )
        }
        else{
            return(
             <div></div>   
            )
        }
    }
}


export default HeaderBar