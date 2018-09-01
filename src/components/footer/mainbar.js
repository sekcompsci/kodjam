import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Cookies, withCookies} from 'react-cookie';
import {instanceOf} from 'prop-types';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';

class Mainbar extends Component {
    state = {
        value: 1,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        return (
            <Paper square
                   style={{
                       backgroundColor: '#2980b9',
                       lineHeight: '30px',
                       textAlign: 'center',
                       width: '100%',
                       position: 'fixed',
                       bottom: 0,
                       left: 0
                   }}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="primary"
                    fullWidth
                >
                    <Tab key="Search" label={<Link to='/search' style={{color: '#ecf0f1'}}>
                        <Icon type="search" style={{fontSize: '1.7rem', marginTop: '5px'}}/>
                    </Link>}/>
                    <Tab key="Flag" label={<Link to='/flag' style={{color: '#ecf0f1'}}>
                        <Icon type="flag" style={{position: 'relative', fontSize: '2.5rem', marginTop: '-20px', paddingTop: '20px'}}/>
                    </Link>}/>
                    <Tab key="Profile"
                         label={
                             <Link to={'/profile/' + this.props.cookies.get('FIREBASEUID')}
                                   style={{color: '#ecf0f1'}}
                             >
                                 <Icon type="user" style={{ fontSize: '1.7rem', marginTop: '5px' }}/>
                             </Link>
                         }
                    />
                </Tabs>
            </Paper>
        )

    }
}

Mainbar.propTypes = {
    cookies: instanceOf(Cookies).isRequired
};

export default withCookies(Mainbar)