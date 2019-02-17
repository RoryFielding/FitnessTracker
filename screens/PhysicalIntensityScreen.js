import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { CheckBox } from 'react-native-elements';


export default class PsychicalIntensityScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            sedentary: false,
            lowActive: false,
            active: false,
            veryActive: false
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkSedentaryBox() {
        sedentary = this.state.sedentary;
        lowActive = this.state.lowActive;
        active = this.state.active;
        veryActive = this.state.veryActive;

        this.setState({ sedentary: !this.state.sedentary })
        if (lowActive === true) {
            this.setState({ lowActive: !this.state.lowActive })
        }
        if (active === true) {
            this.setState({ active: !this.state.active })
        }
        if (veryActive === true) {
            this.setState({ veryActive: !this.state.veryActive })
        }
    }

    checklowActiveBox() {
        sedentary = this.state.sedentary;
        lowActive = this.state.lowActive;
        active = this.state.active;
        veryActive = this.state.veryActive;

        this.setState({ lowActive: !this.state.lowActive })
        if (sedentary === true) {
            this.setState({ sedentary: !this.state.sedentary })
        }
        if (active === true) {
            this.setState({ active: !this.state.active })
        }
        if (veryActive === true) {
            this.setState({ veryActive: !this.state.veryActive })
        }
    }

    checkActiveBox() {
        sedentary = this.state.sedentary;
        lowActive = this.state.lowActive;
        active = this.state.active;
        veryActive = this.state.veryActive;

        this.setState({ active: !this.state.active })
        if (sedentary === true) {
            this.setState({ sedentary: !this.state.sedentary })
        }
        if (lowActive === true) {
            this.setState({ lowActive: !this.state.lowActive })
        }
        if (veryActive === true) {
            this.setState({ veryActive: !this.state.veryActive })
        }
    }

    checkveryActiveBox() {
        sedentary = this.state.sedentary;
        lowActive = this.state.lowActive;
        active = this.state.active;
        veryActive = this.state.veryActive;

        this.setState({ veryActive: !this.state.veryActive })
        if (sedentary === true) {
            this.setState({ sedentary: !this.state.sedentary })
        }
        if (lowActive === true) {
            this.setState({ lowActive: !this.state.lowActive })
        }
        if (active === true) {
            this.setState({ active: !this.state.active })
        }
    }

    render() {

        const { navigation } = this.props;
        const username = navigation.getParam('username', 'NO-ID');
        const password = navigation.getParam('password', 'NO-ID');
        const age = navigation.getParam('age', 'NO-ID');
        const mchecked = navigation.getParam('mchecked', 'NO-ID');
        const fchecked = navigation.getParam('fchecked', 'NO-ID');
        const firstName = navigation.getParam('firstName' ,'NO-ID');
        const lastName = navigation.getParam('lastName' ,'NO-ID');
        const weight = navigation.getParam('weight', 'NO-ID');
        const height = navigation.getParam('height', 'NO-ID');
        const maintainChecked = navigation.getParam('maintainChecked', 'NO-ID');
        const loseChecked = navigation.getParam('loseChecked', 'NO-ID');
        const gainChecked = navigation.getParam('gainChecked', 'NO-ID');

        return (
            <ScrollView style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.signupText3}>Your Lifestyle</Text>
                    <Text style={styles.signupText2}>Please select the description that matches your current lifestyle</Text>
                    <CheckBox
                        title='Sedentary'
                        containerStyle={styles.checkBox}
                        checked={this.state.sedentary}
                        textStyle={styles.signupText}
                        onPress={() => this.checkSedentaryBox()}
                    />
                    <Text style={styles.signupText2}>Includes only the light physical activity associated with typical day-to-day life</Text>
                    <CheckBox
                        title='Low Active'
                        containerStyle={styles.checkBox}
                        checked={this.state.lowActive}
                        textStyle={styles.signupText}
                        onPress={() => this.checklowActiveBox()}
                    />
                    <Text style={styles.signupText2}>Adds 30 minutes per day walk at a speed of 4 miles per hour (mph)</Text>
                    <CheckBox
                        title='Active'
                        containerStyle={styles.checkBox}
                        checked={this.state.active}
                        textStyle={styles.signupText}
                        onPress={() => this.checkActiveBox()}
                    />
                    <Text style={styles.signupText2}>Adds an hourly moderate daily exercise</Text>
                    <CheckBox
                        title='Very Active'
                        containerStyle={styles.checkBox}
                        checked={this.state.veryActive}
                        textStyle={styles.signupText}
                        onPress={() => this.checkveryActiveBox()}
                    />
                    <Text style={styles.signupText2}>Includes vigorous daily exercise</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('Goal', {
                                username: username,
                                password: password,
                                age: age,
                                mchecked: mchecked,
                                fchecked: fchecked,
                                firstName: firstName,
                                lastName: lastName,
                                weight: weight,
                                height: height,
                                maintainChecked: maintainChecked,
                                loseChecked: loseChecked,
                                gainChecked: gainChecked,
                                sedentary: this.state.sedentary,
                                lowActive: this.state.lowActive,
                                active: this.state.active,
                                veryActive: this.state.veryActive
                            });
                        }}>
                        <Text style={styles.buttonText}>NEXT{this.props.type}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('Aim');
                        }}>
                        <Text style={styles.buttonText}>BACK{this.props.type}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
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
        paddingVertical: 10,
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
