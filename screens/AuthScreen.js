import { StyleSheet, Button, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import fire from '../config/fire';
import Logo from '../components/Logo';

export default class AuthScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            date: null,
            username: "Rory@test.com",
            password: "test123",
            error: null,
            loading: false,
        };
        this.login = this.login.bind(this);
        this.handleChange.bind(this)
    }

    login(e) {
        fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then((u) => {
        }).catch((error) => {
          console.log(error);
        });
      }

      handleChange(e) {
          this.setState({
              [e.target.name]: e.target.value
          });
      }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder={this.state.username}
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder={this.state.password}
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button} 
                //onPress={() => this.props.navigation.navigate('Main')}>
                onPress={() => {this.login()}}>
                    <Text style={styles.buttonText}>Log In{this.props.type}</Text>
                </TouchableOpacity>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}
                    ><Text style={styles.signupButton}> Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C272A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#4CA4B0',
        fontSize: 16,
        fontWeight: '500'
    },
    inputBox: {
        width:300,
        backgroundColor:'#0C2331',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10,
        paddingVertical: 16
      },
      button: {
        width:300,
        backgroundColor:'#4CA4B0',
         borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 16
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      }
});
