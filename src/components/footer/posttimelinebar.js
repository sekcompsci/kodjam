import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {selectFooterType, selectTab} from "../../actions/settings";

class PostTimelineBar extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        if (value === 1) {
            this.props.selectFooterType('main');
        } else {
            this.props.selectTab(0);
        }

        this.setState({value});
    };

    render() {
        if (this.props.isFirst) {
            return (
                <Paper square
                       style={{
                           backgroundColor: "#dce775",
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
                        <Tab key="FlagBlue" label="Start"/>
                    </Tabs>
                </Paper>
            )

        }
        else {
            return (
                <Paper square
                       style={{
                           backgroundColor: "#dce775",
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
                        <Tab key="FlagGreen" label={
                            <Link to='/feed' style={{color: '#ecf0f1'}}>
                                <b>NEXT</b>
                            </Link>
                        }/>
                        <Tab key="FlagBlue" label={
                            <Link to='/feed' style={{color: '#ecf0f1'}}>
                                <b>END</b>
                            </Link>
                        }/>
                    </Tabs>
                </Paper>
            )

        }

    }
}

const mapDispatchToProps = {
    selectTab,
    selectFooterType
};

export default connect(null, mapDispatchToProps)(PostTimelineBar);