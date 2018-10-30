import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

export default class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mchecked: false,
            fchecked: false,
            tcchecked: false,
            date: null,
            username: null,
            password: null,
            password2: null,
            firstName: null,
            lastName: null,
        };
    }

    checkMaleBox() {
        fchecked = this.state.fchecked;
        this.setState({ mchecked: !this.state.mchecked })
        if (fchecked === true) {
            this.setState({ fchecked: !this.state.fchecked })
        }
    }

    checkFemaleBox() {
        mchecked = this.state.mchecked;
        this.setState({ fchecked: !this.state.fchecked })
        if (mchecked === true) {
            this.setState({ mchecked: !this.state.mchecked })
        }
    }

    checkTcBox() {
        this.setState({ tcchecked: !this.state.tcchecked })
    }


    setUsername(username) {
        this.setState({ username })
        console.log(this.state.username)
    }

    setPassword(password) {
        this.setState({ password: password })
        console.log(password)
    }

    setPassword2(password) {
        this.setState({ password2: password })
        console.log(password)
    }



    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.container}>
                <Image style={{ width: 260, height: 160 }}
                    source={require('../assets/images/icon3.png')} />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onChangeText={(username) => this.setUsername(username)}
                    value={this.state.username}
                    onSubmitEditing={() => { this.passwordInput.focus(); }}
                    blurOnSubmit={false}
                />
                <TextInput style={styles.inputBox}
                    ref={(input) => { this.passwordInput = input; }}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    onChangeText={(password) => this.setPassword(password)}
                    value={this.state.password}
                    onSubmitEditing={() => { this.confirmPasswordInput.focus(); }}
                    blurOnSubmit={false}
                />
                <TextInput style={styles.inputBox}
                    ref={(input) => { this.confirmPasswordInput = input; }}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    onChangeText={(password) => this.setPassword2(password)}
                    value={this.state.password2}
                    onSubmitEditing={() => { this.firstNameInput.focus(); }}
                    blurOnSubmit={false}
                />
                <TextInput style={styles.inputBox}
                    ref={(input) => { this.firstNameInput = input; }}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="First Name"
                    placeholderTextColor="#ffffff"
                    value={this.state.firstName}
                    onSubmitEditing={() => { this.lastNameInput.focus(); }}
                    blurOnSubmit={false}
                />
                <TextInput style={styles.inputBox}
                    ref={(input) => { this.lastNameInput = input; }}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Last Name"
                    placeholderTextColor="#ffffff"
                    value={this.state.lastName}
                />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <CheckBox
                        title='Male'
                        containerStyle={styles.checkBox}
                        checked={this.state.mchecked}
                        textStyle={styles.signupText}
                        onPress={() => this.checkMaleBox()}
                    />
                    <CheckBox
                        title='Female'
                        containerStyle={styles.checkBox}
                        checked={this.state.fchecked}
                        textStyle={styles.signupText}
                        onPress={() => this.checkFemaleBox()}
                    />
                </View>
                <DatePicker
                    style={styles.datePicker}
                    date={this.state.date}
                    mode="date"
                    placeholder="Date Of Birth"
                    format="YYYY-MM-DD"
                    minDate="1900-01-01"
                    maxDate="2018-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36,
                        },
                    }}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />
                <View style={styles.TcText}>
                    <Text style={styles.TcTextCont}>I have read the</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLoading')}>
                        <Text style={styles.signupButton}> terms and conditions</Text></TouchableOpacity>
                    <CheckBox
                        checked={this.state.tcchecked}
                        containerStyle={styles.tccheckBox}
                        onPress={() => this.checkTcBox()}
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
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBox: {
        backgroundColor: '#1C272A',
        width: 125,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: '#1C272A',
    },
    tccheckBox: {
        backgroundColor: '#1C272A',
        width: 45,
        height: 45,
        borderColor: '#1C272A',
        flexDirection: 'row',
        paddingVertical: -160
    },
    signupTextCont: {
        flexGrow: 1,
        paddingVertical: 16,
        flexDirection: 'row'
    },
    TcText: {
        flexWrap: 'wrap',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    TcTextCont: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
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
    datePicker: {
        width: 200,
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
