import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';


export default class AimScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            maintainChecked: false,
            loseChecked: false,
            gainChecked: false
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkLoseBox() {
        loseChecked = this.state.loseChecked;
        maintainChecked = this.state.maintainChecked;
        gainChecked = this.state.gainChecked;

        this.setState({ loseChecked: !this.state.loseChecked })
        if (maintainChecked === true) {
            this.setState({ maintainChecked: !this.state.maintainChecked })
        }
        if (gainChecked === true) {
            this.setState({ gainChecked: !this.state.gainChecked })
        }
    }

    checkMaintainBox() {
        maintainChecked = this.state.maintainChecked;
        gainChecked = this.state.gainChecked;
        loseChecked = this.state.loseChecked;

        this.setState({ maintainChecked: !this.state.maintainChecked })
        if (loseChecked === true) {
            this.setState({ loseChecked: !this.state.loseChecked })
        }
        if (gainChecked === true) {
            this.setState({ gainChecked: !this.state.gainChecked })
        }
    }

    checkGainBox() {
        gainChecked = this.state.gainChecked;
        loseChecked = this.state.loseChecked;
        maintainChecked = this.state.maintainChecked;
        
        this.setState({ gainChecked: !this.state.gainChecked })
        if (loseChecked === true) {
            this.setState({ loseChecked: !this.state.loseChecked })
        }
        if (maintainChecked === true) {
            this.setState({ maintainChecked: !this.state.maintainChecked })
        }
    }
    render() {

        const { navigation } = this.props;
        const username = navigation.getParam('username', 'NO-ID');
        const password = navigation.getParam('password', 'NO-ID');
        const weight = navigation.getParam('weight', 'NO-ID');
        const height = navigation.getParam('height', 'NO-ID');

        return (
            <View style={styles.container2}>
                <Text style={styles.signupText3}>Your Goals</Text>
                <Text style={styles.signupText2}>Please select the the fitness goal you would like to achieve below</Text>
                <CheckBox
                    title='Lose Weight'
                    containerStyle={styles.checkBox}
                    checked={this.state.loseChecked}
                    textStyle={styles.signupText}
                    onPress={() => this.checkLoseBox()}
                />
                <CheckBox
                    title='Maintain Weight'
                    containerStyle={styles.checkBox}
                    checked={this.state.maintainChecked}
                    textStyle={styles.signupText}
                    onPress={() => this.checkMaintainBox()}
                />
                <CheckBox
                    title='Gain Weight'
                    containerStyle={styles.checkBox}
                    checked={this.state.gainChecked}
                    textStyle={styles.signupText}
                    onPress={() => this.checkGainBox()}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Goal', {
                            username: username,
                            password: password,
                            weight: weight,
                            height: height
                        });
                    }}>
                    <Text style={styles.buttonText}>NEXT{this.props.type}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Height');
                    }}>
                    <Text style={styles.buttonText}>BACK{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    createAccount(e) {
        // fire.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).then((u) => {
        // }).catch((error) => {
        //     alert(error);
        // });
        this.props.navigation.navigate('Consent');
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C272A',
        flexGrow: 1,
    },
    container2: {
        backgroundColor: '#1C272A',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    signupTextCont: {
        flexGrow: 1,
        paddingVertical: 16,
        flexDirection: 'row'
    },
    TcText: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    TcTextCont: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        paddingVertical: 16
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupText2: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 250
    },
    signupText3: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 24,
        paddingVertical: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupButton: {
        color: '#4CA4B0',
        fontSize: 16,
        fontWeight: '500'
    },
    tcButton: {
        color: '#4CA4B0',
        fontSize: 16,
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
    },
    tcView: {
        backgroundColor: '#1C272A',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
