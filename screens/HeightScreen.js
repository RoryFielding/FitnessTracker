import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';

export default class HeightScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      height: "",
    }
  }

  setHeight(height) {
    this.setState({ height })
  }

  render() {

    const { navigation } = this.props;
    const username = navigation.getParam('username', 'NO-ID');
    const password = navigation.getParam('password', 'NO-ID');
    const age = navigation.getParam('age', 'NO-ID');
    const mchecked = navigation.getParam('mchecked' ,'NO-ID');
    const fchecked = navigation.getParam('fchecked' ,'NO-ID');
    const weight = navigation.getParam('weight', 'NO-ID');

    
    return (
      <View style={styles.container}>

        <Text style={styles.signupText3}>Your Height</Text>

        <Text style={styles.signupText2}>Please enter your height in CM</Text>

        <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="CM"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="numeric"
                    onChangeText={(height) => this.setHeight(height)}
                    value={this.state.height}
                    onSubmitEditing={() => { this.passwordInput.focus(); }}
                    blurOnSubmit={false}
                />

        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Aim', {
                username: username,
                password: password,
                age: age,
                mchecked: mchecked,
                fchecked: fchecked,
                weight: weight,
                height: this.state.height
              })
            }}>
            <Text style={styles.buttonText}>NEXT{this.props.type}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Weight')}>
            }}>
            <Text style={styles.buttonText}>BACK{this.props.type}</Text>
          </TouchableOpacity>

        </View>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C272A',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#1C272A',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupButton: {
    color: '#4CA4B0',
    fontSize: 16,
    fontWeight: '500'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  signupText2: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    paddingVertical: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupText3: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 24,
    paddingVertical: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 300,
    backgroundColor: '#4CA4B0',
    borderRadius: 25,
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 16
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  backButton: {
    backgroundColor: '#4CA4B0',
    width: 30,
    height: 25,
    borderRadius: 25,
    marginVertical: 25,
    paddingVertical: 16,
    flexDirection: 'row'
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
});