import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Cookies, withCookies} from 'react-cookie';
import {instanceOf} from 'prop-types';
import {Link} from 'react-router-dom';

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
                       lineHeight: '46px',
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
                    <Tab key="Search" label={<Link to='/rank' style={{color: '#ecf0f1'}}>Search</Link>}/>
                    <Tab key="Flag" label={<Link to='/feed' style={{color: '#ecf0f1'}}>Flag</Link>}/>
                    <Tab key="Profile"
                         label={
                             <Link to={'/profile/' + this.props.cookies.get('FIREBASEUID')}
                                   style={{color: '#ecf0f1'}}>Profile
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