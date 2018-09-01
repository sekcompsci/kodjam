import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import firebase from "firebase";
import App from './App';
import Profile from './components/profile';
import Login from './components/login';
import Header from './components/header';

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
                    <Route exact path="/" component={Login}/>
                    <App>
                        <Route exact path="/feed" component={() =>
                            <Header>
                                <p>Hello World!</p>
                                <p>Hello World!</p>
                                <p>Hello World!</p>
                                <p>Hello World!</p>
                                <p>Hello World!</p>
                                <p>Hello World!</p>
                            </Header>
                        }/>
                        <Route exact path="/profile/:uid" component={Profile}/>
                    </App>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRoute;