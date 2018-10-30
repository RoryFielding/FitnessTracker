import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import Logo from '../components/Logo';

export default class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mchecked: false,
            fchecked: false,
        };
    }

    checkMaleBox() {
        fchecked = this.state.fchecked;
        if (fchecked === true) {
            this.setState({ fchecked: !this.state.fchecked })
            this.setState({ mchecked: !this.state.mchecked })
        }
        this.setState({ mchecked: !this.state.mchecked })
    }

    checkFemaleBox() {
        mchecked = this.state.mchecked;
        if (mchecked === true) {
            this.setState({ mchecked: !this.state.mchecked })
            this.setState({ fchecked: !this.state.fchecked })
        }
        this.setState({ fchecked: !this.state.fchecked })
    }

    render() {
        return (

            <ScrollView contentContainerStyle={styles.container}>
                <Image  style={{width:260, height: 160}}
          			source={require('../assets/images/icon3.png')}/>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.next = input}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.next = input}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="First Name"
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.next = input}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Last Name"
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.next = input}
                />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <CheckBox
                        title='Male'
                        containerStyle={styles.checkBox}
                        checked={this.state.mchecked}
                        onPress={() => this.checkMaleBox()}
                    />
                    <CheckBox
                        title='Female'
                        containerStyle={styles.checkBox}
                        checked={this.state.fchecked}
                        onPress={() => this.checkFemaleBox()}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>NEXT{this.props.type}</Text>
                </TouchableOpacity>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLoading')}>
                        <Text style={styles.signupButton}> Log In</Text></TouchableOpacity>
                </View>
            </ScrollView>
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
    checkBox: {
        backgroundColor: '#1C272A',
        width: 100,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    signupTextCont: {
        flexGrow: 1,
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
        width: 300,
        backgroundColor: '#0C2331',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        paddingVertical: 16
    },
    button: {
        width: 300,
        backgroundColor: '#4CA4B0',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 16
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});
