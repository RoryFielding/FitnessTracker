import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default class AchievementsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  render() {

    const { navigation } = this.props;
    const username = navigation.getParam('username', 'NO-ID');
    const password = navigation.getParam('password', 'NO-ID');
    return (
      <View style={styles.container}>
        <Text style={styles.signupText}>Consent Screen</Text>
        <Text>username: {JSON.stringify(username)}</Text>
        <Text>password: {JSON.stringify(password)}</Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Weight', {
                username: username,
                password: password,
              })
            }}>
            <Text style={styles.buttonText}>NEXT{this.props.type}</Text>
          </TouchableOpacity>
          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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