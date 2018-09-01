import React, {Component} from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {connect} from 'react-redux';
import {setName, setProfile} from "../../actions/user";
import './login.css';
import { Form, Icon, Input, Button, Divider } from 'antd';

class Login extends Component {
    state = {
        isSignedIn: false
    };

    // Configure FirebaseUI.
    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => this.props.history.push(`/`)
        }
    };

    // Listen to the Firebase Auth state and set the local state.
    componentWillMount() {
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
        const FormItem = Form.Item;
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <div className="background-image" />
                <div className="content">
                    {/*<h1>Login</h1>*/}
                    <Form className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input className="inputOpasity" prefix={<Icon type="user" style={{ color: 'rgb(217, 217, 217)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input className="inputOpasity" prefix={<Icon type="lock" style={{ color: 'rgb(217, 217, 217)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button htmlType="submit" className={["login-form-button", "inputOpasity"]} style={{width: '100%', color: 'rgb(217, 217, 217)'}}>
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                    <Divider>OR</Divider>
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    setName,
    setProfile
};

export default Form.create()(connect(null, mapDispatchToProps)(Login));

