import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default class WeightScreen extends React.Component {
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
      <View style={styles.container2}>
      <TouchableOpacity style={styles.backButton}
          onPress={() => this.props.navigation.navigate('Consent')}>
          <View>
          <Text style={styles.buttonText}>BACK{this.props.type}</Text>
          </View>
        </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.signupText}>Weight Screen</Text>
        <Text>username: {JSON.stringify(username)}</Text>
        <Text>password: {JSON.stringify(password)}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Height', {
                username: username,
                password: password,
              })
            }}>
            <Text style={styles.buttonText}>NEXT{this.props.type}</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row'
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
  }
});