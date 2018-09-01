import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Cookies, withCookies} from 'react-cookie';
import {instanceOf} from 'prop-types';

class Mainbar extends Component {
    state = {
        value: 1,
    };

    handleChange = (event, value) => {
        this.setState({value});

        switch (value) {
            case 0: {
                this.props.history.push(`/rack`);

                break;
            }
            case 1: {
                this.props.history.push(`/flag`);

                break;
            }
            case 2: {
                this.props.history.push(`/profile/${this.props.cookies.get('FIREBASEUID')}`);

                break;
            }
            default: {
                this.props.history.push(`/feed`);
            }
        }
    };

    render() {
        return (
            <Paper square
                   style={{
                       backgroundColor: '#dce775',
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
                    fullWidth
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab key="Search" label="Search"/>
                    <Tab key="Flag" label="Flag"/>
                    <Tab key="Profile" label="Profile"/>
                </Tabs>
            </Paper>
        )

    }
}

Mainbar.propTypes = {
    cookies: instanceOf(Cookies).isRequired
};

export default withCookies(Mainbar)