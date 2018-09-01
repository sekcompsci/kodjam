import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Mainbar extends Component {
    state = {
        value: 10,
    };
    handleChange = (event, value) => {
        this.setState({value});
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
                    <Tab key="Search" label="Search" onClick={() => this.props.history.push(`/search`)}/>
                    <Tab key="Flag" label="Flag" onClick={() => this.props.history.push(`/timeline`)}/>
                    <Tab key="Profile" label="Profile" onClick={() => this.props.history.push(`/profile`)}/>
                </Tabs>
            </Paper>
        )

    }


}

export default Mainbar