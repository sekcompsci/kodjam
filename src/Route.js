import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

// import Home from './components/home/home';
// import Application from './containers/application';
// import ApplicationApp from './containers/application.devices';
// import Devices from './components/application/device';
// import Freeboard from './components/freeboard/freeboard';
// import Feed from './components/feed/feed';
// import Nodepie from './components/nodepie/nodepie';
// import PageNotFound from './components/pagenotfound/pagenotfound';
import App from './App'
import Profile from './components/profile'

class AppRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/profile" component={Profile}/>
                    {/*<Route exact path="/application" component={Application}/>*/}
                    {/*<Route exact path="/404" component={PageNotFound}/>*/}
                    {/*<Redirect from="*" to="/404"/>*/}
                    <Redirect from="*" to="/"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRoute;