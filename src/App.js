import React, {Component} from 'react';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Footer ForTimelineisFirst={false}/>
            </div>
        );
    }
}

export default App;
