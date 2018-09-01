import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import firebase from "firebase";
import App from './App';
import Profile from './components/profile';
import Login from './components/login';


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
                            <Route exact path="/feed" component={() => <div>Hello World!</div>}/>
                            <Route exact path="/profile/:uid" component={Profile}/>
                        </App>
                    </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRoute;