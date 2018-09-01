import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

// import Home from './components/home/home';
// import PageNotFound from './components/pagenotfound/pagenotfound';
import App from './App'
import Profile from './components/profile'
import Login from './components/login'
import firebase from "firebase";

class AppRoute extends React.Component {
    constructor(props) {
        super(props);

        let config = {
            apiKey: "AIzaSyBaJz9bECtxlDw4RnpbXE34LxH-2Nuy6eU",
            authDomain: "eculture-kodjam.firebaseapp.com",
            databaseURL: "https://eculture-kodjam.firebaseio.com",
            projectId: "eculture-kodjam",
            storageBucket: "eculture-kodjam.appspot.com",
            messagingSenderId: "408877158212"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/login" component={Login}/>
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