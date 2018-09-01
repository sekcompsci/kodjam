import React, {Component} from 'react';
import PostTimelineBar from './posttimelinebar'
import PostReviewBar from './postreviewbar'
import Mainbar from './mainbar'

class FooterBar extends Component {
    render() {
        if (this.props.typeBar === "main") {
            return (
                <Mainbar />
            )
        }
        else if (this.props.typeBar === "timeline") {
            return (
                <PostTimelineBar isFirst={this.props.ForTimelineisFirst} />
            )
        }
        else if (this.props.typeBar === "review") {
            return (
                <PostReviewBar />
            )
        }
    }
}

export default FooterBar