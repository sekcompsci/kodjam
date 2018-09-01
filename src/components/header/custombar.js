import React, {Component} from 'react';
import { Icon } from 'antd';
const Custombar=(props)=>{
    if(props.typeBar=="custom"){
        if(props.addicon){
            return(
                <div className="head">
                    <Icon  className="btn-left" type="arrow-left" />
                    <h3 className="title">{props.addtitle}</h3>
                </div>
            )
        }
        else{
            return(
                <div className="head">
                    <h3 className="title">{props.addtitle}</h3>
                </div>
            )

        }
        
    }
    
}
export default Custombar