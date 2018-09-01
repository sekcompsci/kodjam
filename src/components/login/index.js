import React, {Component} from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Login extends Component {
    state = {
        isSignedIn: false
    };

    // Configure FirebaseUI.
    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    };

    constructor(props) {
        super(props);
        var config = {
            apiKey: "AIzaSyBaJz9bECtxlDw4RnpbXE34LxH-2Nuy6eU",
            authDomain: "eculture-kodjam.firebaseapp.com",
            databaseURL: "https://eculture-kodjam.firebaseio.com",
            projectId: "eculture-kodjam",
            storageBucket: "eculture-kodjam.appspot.com",
            messagingSenderId: "408877158212"
        };
        firebase.initializeApp(config);
    }

    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user})
        );
    }

    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        if (!this.state.isSignedIn) {
            return (
                <div className="container">
                    <div className="authen">
                        <h1>FirebaseUI-React</h1>
                        <h1>with Firebase Authentication</h1>
                        {/* <Header title="Simple Firebase App" /> */}
                        <br></br>
                        <p>Please sign-in:</p>
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <div className="authen">
                    <h1>FirebaseUI-React</h1>
                    <h1>with Firebase Authentication</h1>
                    {/* <Header title="Simple Firebase App" /> */}
                    <br></br>
                    <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
                    <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
                    <br></br>
                    <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
                </div>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;

