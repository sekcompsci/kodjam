import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Cookies, withCookies} from 'react-cookie';
import {instanceOf} from 'prop-types';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import {selectTab, selectFooterType} from '../../actions/settings';

class Mainbar extends Component {
    state = {
        value: 1,
    };

    handleChange = (event, value) => {
        if (value === 1) {
            this.props.selectFooterType('timeline');
        } else {
            this.props.selectTab(value);
        }
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
                    value={this.props.tabSelect}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="primary"
                    fullWidth
                >
                    <Tab key="Home" label={<Link to='/feed' style={{color: '#ecf0f1'}}>
                        <Icon type="home" style={{fontSize: '1.7rem', marginTop: '5px'}}/>
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

const mapStateToProps = state => {
    return {
        tabSelect: state.settings.tab
    }
};

const mapDispatchToProps = {
    selectTab,
    selectFooterType
};

Mainbar.propTypes = {
    cookies: instanceOf(Cookies).isRequired
};

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(Mainbar));