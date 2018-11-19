import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class ConsentScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      dpConsent: false,
      dtocConsent: false,
      locAccess: false,
      healthAccess: false,
    }
  }

  checkDpBox() {
    this.setState({ dpConsent: !this.state.dpConsent })
}

checkDtocBox() {
  this.setState({ dtocConsent: !this.state.dtocConsent })
}

checkLocBox() {
  this.setState({ locAccess: !this.state.locAccess })
}

checkHealthBox() {
  this.setState({ healthAccess: !this.state.healthAccess })

}

  render() {

    const { navigation } = this.props;
    const username = navigation.getParam('username', 'NO-ID');
    const password = navigation.getParam('password', 'NO-ID');
    return (
      <ScrollView style={styles.container}>
        <View  style={styles.container2}>
          <Text style={styles.signupText3}>Your Consents</Text>
          <Text style={styles.signupText2}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum </Text>
         </View>
          <View style={styles.container}>
            <CheckBox
              title='Data Processing'
              containerStyle={styles.checkBox}
              checked={this.state.dpConsent}
              textStyle={styles.signupText}
              onPress={() => this.checkDpBox()}
            />
            <Text style={styles.signupText2}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum </Text>
          </View>

          <View style={styles.container}>
            <CheckBox
              title='Data Transfer Outside Country'
              containerStyle={styles.checkBox}
              checked={this.state.mchecked}
              textStyle={styles.signupText}
              onPress={() => this.checkDtocBox()}
            />
            <Text style={styles.signupText2}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum </Text>
          </View>

          <View style={styles.container}>
            <CheckBox
              title='Location Data Access'
              containerStyle={styles.checkBox}
              checked={this.state.mchecked}
              textStyle={styles.signupText}
              onPress={() => this.checkLocBox()}
            />
            <Text style={styles.signupText2}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum </Text>
          </View>

          <View style={styles.container}>
            <CheckBox
              title='Health Data Access'
              containerStyle={styles.checkBox}
              checked={this.state.mchecked}
              textStyle={styles.signupText}
              onPress={() => this.checkHealthBox()}
            />
            <Text style={styles.signupText2}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum </Text>
          </View>

        <View style={styles.container2}> 
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            }}>
            <Text style={styles.buttonText}>BACK{this.props.type}</Text>
          </TouchableOpacity>

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
          </View>
      </ScrollView>
    );
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
    fontSize: 12,
    paddingVertical: 8
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
  checkBox: {
    backgroundColor: '#1C272A',
    width: 140,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: '#1C272A',
  },
});