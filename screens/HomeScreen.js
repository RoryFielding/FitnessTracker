import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'firebase';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  logOut() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Had enough fun?</Text>
          <TouchableOpacity onPress={() => this.logOut()}>
            <Text style={styles.signupButton}> Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C272A',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
});
