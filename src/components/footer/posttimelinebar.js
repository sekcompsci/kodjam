import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class PostTimelineBar extends Component {
    state = {
        value: 10,
    };

    handleChange = (event, value) => {
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
                        <Tab key="FlagBlue" label="Start"></Tab>
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
                        <Tab key="FlagGreen" label="Next"/>
                        <Tab key="FlagBlue" label="End"/>
                    </Tabs>
                </Paper>
            )

        }

    }


}

export default PostTimelineBar