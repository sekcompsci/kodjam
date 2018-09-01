import React, {Component} from 'react';
import Footer from './components/footer';
// import SearchPage from './components/search'
// import Header from './components/header'
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Header history={this.props.history} typeBar="main" icon={true} title="Timeline"/>*/}
                {this.props.children}
                <Footer typeBar="main" ForTimelineisFirst={false}/>
            </div>
        );
    }
}

export default App;
