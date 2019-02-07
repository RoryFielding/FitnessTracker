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
    const age = navigation.getParam('age' ,'NO-ID');
    const mchecked = navigation.getParam('mchecked' ,'NO-ID');
    const fchecked = navigation.getParam('fchecked' ,'NO-ID');

    return (
      <ScrollView style={styles.container}>
        <View  style={styles.container2}>
          <Text style={styles.signupText3}>Your Consents</Text>
          <View style={styles.textBox2}>
          <Text style={styles.signupText2}>We want you to understand how we collect and use your data. Please accept all of the following data consents to be able to use your account. </Text>
         </View>
         </View>
          <View style={styles.container}>
            <CheckBox
              title='Sensitive Data Processing'
              containerStyle={styles.checkBox}
              checked={this.state.dpConsent}
              textStyle={styles.signupText}
              onPress={() => this.checkDpBox()}
            />
            <View style={styles.textBox}>
            <Text style={styles.signupText2}>RunTracker and its affiliates are allowed to process my sensitive personal data to provide wellness and fitness services.</Text>
          </View>
          </View>

          <View style={styles.container}>
            <CheckBox
              title='Data Transfer Outside Country'
              containerStyle={styles.checkBox}
              checked={this.state.dtocConsent}
              textStyle={styles.signupText}
              onPress={() => this.checkDtocBox()}
            />
            <View style={styles.textBox}>
            <Text style={styles.signupText2}>RunTracker is allowed to transfer my personal data across the globe, including Europe and the United States of America. I'm aware that laws in different countries may be less protective than those of my country/region. </Text>
          </View>
          </View>

          <View style={styles.container}>
            <CheckBox
              title='Location Data Access'
              containerStyle={styles.checkBox}
              checked={this.state.locAccess}
              textStyle={styles.signupText}
              onPress={() => this.checkLocBox()}
            />
            <View style={styles.textBox}>
            <Text style={styles.signupText2}>Before we start we will need to access your location so we can track your activies while you're using the application.</Text>
          </View>
          </View>

          <View style={styles.container}>
            <CheckBox
              title='Health Data Access'
              containerStyle={styles.checkBox}
              checked={this.state.healthAccess}
              textStyle={styles.signupText}
              onPress={() => this.checkHealthBox()}
            />
            <View style={styles.textBox}>
            <Text style={styles.signupText2}>RunTracker collects and uses health data from paired devices, like a heart rate monitor, to give you interesting and useful performance analysis. We collect this data only from sensors or devices you've connected to RunTracker. We do not share it without your consent. </Text>
          </View>
          </View>

        <View style={styles.container2}> 

        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Weight', {
                username: username,
                password: password,
                age: age,
                mchecked: mchecked,
                fchecked: fchecked
              })
            }}>
            <Text style={styles.buttonText}>NEXT{this.props.type}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            }}>
            <Text style={styles.buttonText}>BACK{this.props.type}</Text>
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
  textBox: {
    width: 320,
    left: 30
  },
  textBox2: {
    width: 320,
  }
});