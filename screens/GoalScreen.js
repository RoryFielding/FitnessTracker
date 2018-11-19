import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import fire from '../config/fire';

export default class GoalScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {


    const { navigation } = this.props;
    const username = navigation.getParam('username', 'NO-ID');
    const password = navigation.getParam('password', 'NO-ID');

    return (
      <View style={styles.container}>
       <Button style={styles.button}
       title='back'
          onPress={() => this.props.navigation.navigate('Height')}
        />
        <Text style={styles.signupText}>Goal Screen</Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.createAccount(username, password) }}>
            <Text style={styles.buttonText}>COMPLETE SIGN UP{this.props.type}</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }

    createAccount(username, password) {
    fire.auth().createUserWithEmailAndPassword(username, password).then((u) => {
    }).catch((error) => {
      alert(error);
    });
  }

  setAuthVars(){

  }

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C272A',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});