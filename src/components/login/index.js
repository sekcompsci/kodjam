import React, {Component} from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {connect} from 'react-redux';
import {setUserID} from "../../actions/user";
import './login.css';
import {Button, Divider, Form, Icon, Input} from 'antd';
import { withCookies, Cookies } from 'react-cookie';

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
            signInSuccess: () => this.props.history.push(`/feed`)
        }
    };

    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                this.setState({ isSignedIn: user });
                if (user) {
                    let userpath = 'Users/' + firebase.auth().currentUser.uid;
                    let db = firebase.database().ref(userpath);

                    db.on('value', ss => {
                        // Facebook Login Only
                        if (ss.val() === null) {
                            var jsonObj = {
                                username: firebase.auth().currentUser.displayName,
                                userimage: firebase.auth().currentUser.photoURL,
                                follower_n: 0,
                                following_n: 0,
                                favorite: 0,
                                timeline: 0,
                                achievement: 0,
                                caption: ""
                            };
                            db.update(jsonObj)
                        }
                    });

                    this.props.setUserID(firebase.auth().currentUser.uid);
                }
            }
        );
    }

    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        const FormItem = Form.Item;
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <div className="background-image"/>
                <div className="content">
                    {/*<h1>Login</h1>*/}
                    <Form className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input className="inputOpasity"
                                       prefix={<Icon type="user" style={{color: 'rgb(217, 217, 217)'}}/>}
                                       placeholder="Username"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input className="inputOpasity"
                                       prefix={<Icon type="lock" style={{color: 'rgb(217, 217, 217)'}}/>}
                                       type="password" placeholder="Password"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button htmlType="submit" className={["login-form-button", "inputOpasity"]}
                                    style={{width: '100%', color: 'rgb(217, 217, 217)'}}>
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
    setUserID
};

export default Form.create()(connect(null, mapDispatchToProps)(Login));

