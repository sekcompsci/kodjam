import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {createApp} from '../../actions/application';

class Profile extends React.Component {
    render() {
        return <div>Profile {this.props.command}</div>
    }
}

Profile.propTypes = {
    name: PropTypes.string
};

Profile.defaultProps = {
    command: 'Sirawit Moonrinta'
};

const mapStateToProps = state => {
    return {
        command: state.command
    }
};

const mapDispatchToProps = {
    createApp
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)