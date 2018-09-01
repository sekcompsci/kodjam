import React, {Component} from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {connect} from 'react-redux';
import {setName, setProfile} from "../../actions/user";

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

    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                if (!!user) {
                    let profilePath = 'Profile/' + firebase.auth().currentUser.uid;
                    let dbprofile = firebase.database().ref(profilePath);

                    let jsonObj = {
                        username: firebase.auth().currentUser.displayName,
                        profileImage: firebase.auth().currentUser.photoURL
                    };

                    dbprofile.update(jsonObj);

                    this.props.setName(firebase.auth().currentUser.displayName);
                    this.props.setProfile(firebase.auth().currentUser.photoURL + '?height=300');
                }

                this.setState({isSignedIn: !!user});
            }
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
                    <img id="photo" alt="profile" className="pic" src={firebase.auth().currentUser.photoURL}/>
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
                <a onClick={()=>{this.props.history.push(`/profile`)}}>Profile</a>
            </div>
        );
    }
}

const mapDispatchToProps = {
    setName,
    setProfile
};

export default connect(null, mapDispatchToProps)(Login);

