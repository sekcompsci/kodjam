import React, {Component} from 'react';
import PostTimelineBar from './posttimelinebar'
import PostReviewBar from './postreviewbar'
import Mainbar from './mainbar'

class FooterBar extends Component {
    render() {
        if (this.props.typeBar === "main") {
            return (
                <Mainbar history={this.props.history} />
            )
        }
        else if (this.props.typeBar === "timeline") {
            return (
                <PostTimelineBar history={this.props.history} isFirst={this.props.ForTimelineisFirst} />
            )
        }
        else if (this.props.typeBar === "review") {
            return (
                <PostReviewBar history={this.props.history} />
            )
        }
    }
}

export default FooterBar