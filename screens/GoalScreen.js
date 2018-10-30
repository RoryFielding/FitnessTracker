import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import fire from '../config/fire';

export default class AchievementsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
    username: this.props.navigation.state.params.user.username,
    password: this.props.navigation.state.params.user.password
  }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.signupText}>Goal Screen</Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {this.createAccount()}}>
            <Text style={styles.buttonText}>NEXT{this.props.type}</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }


  createAccount(e) {
    fire.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).then((u) => {
    }).catch((error) => {
      alert(error);
    });
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