import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import fire from '../config/fire';
import { CheckBox } from 'react-native-elements';

export default class GoalScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      fhbox: false,
      onekbox: false,
      oneptfkbox: false,
      twokbox: false,
      twoptfbox: false,
      threekbox: false,
      threeptfbox: false,
      fourkbox: false,
      BMI: ""
    }
  }

  checkFhBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
    threeptfbox = this.state.threeptfbox;
    fourkbox = this.state.fourkbox;
    this.setState({ fhbox: !this.state.fhbox })
    if (onekbox === true) {
      this.setState({ onekbox: !this.state.onekbox })
    }
    if (oneptfkbox === true) {
      this.setState({ oneptfkbox: !this.state.oneptfkbox })
    }
    if (twokbox === true) {
      this.setState({ twokbox: !this.state.twokbox })
    }
    if (twoptfbox === true) {
      this.setState({ twoptfbox: !this.state.twoptfbox })
    }
    if (threekbox === true) {
      this.setState({ threekbox: !this.state.threekbox })
    }
    if (threeptfbox === true) {
      this.setState({ threeptfbox: !this.state.threeptfbox })
    }
    if (fourkbox === true) {
      this.setState({ fourkbox: !this.state.fourkbox })
    }
  }

  checkOnekBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
    threeptfbox = this.state.threeptfbox;
    fourkbox = this.state.fourkbox;
    this.setState({ onekbox: !this.state.onekbox })
    if (fhbox === true) {
      this.setState({ fhbox: !this.state.fhbox })
    }
    if (oneptfkbox === true) {
      this.setState({ oneptfkbox: !this.state.oneptfkbox })
    }
    if (twokbox === true) {
      this.setState({ twokbox: !this.state.twokbox })
    }
    if (twoptfbox === true) {
      this.setState({ twoptfbox: !this.state.twoptfbox })
    }
    if (threekbox === true) {
      this.setState({ threekbox: !this.state.threekbox })
    }
    if (threeptfbox === true) {
      this.setState({ threeptfbox: !this.state.threeptfbox })
    }
    if (fourkbox === true) {
      this.setState({ fourkbox: !this.state.fourkbox })
    }
  }

  checkOneptfBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
    threeptfbox = this.state.threeptfbox;
    fourkbox = this.state.fourkbox;
    this.setState({ oneptfkbox: !this.state.oneptfkbox })
    if (onekbox === true) {
      this.setState({ onekbox: !this.state.onekbox })
    }
    if (fhbox === true) {
      this.setState({ fhbox: !this.state.fhbox })
    }
    if (twokbox === true) {
      this.setState({ twokbox: !this.state.twokbox })
    }
    if (twoptfbox === true) {
      this.setState({ twoptfbox: !this.state.twoptfbox })
    }
    if (threekbox === true) {
      this.setState({ threekbox: !this.state.threekbox })
    }
    if (threeptfbox === true) {
      this.setState({ threeptfbox: !this.state.threeptfbox })
    }
    if (fourkbox === true) {
      this.setState({ fourkbox: !this.state.fourkbox })
    }
  }

  checkTwokBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
    threeptfbox = this.state.threeptfbox;
    fourkbox = this.state.fourkbox;
    this.setState({ twokbox: !this.state.twokbox })
    if (onekbox === true) {
      this.setState({ onekbox: !this.state.onekbox })
    }
    if (oneptfkbox === true) {
      this.setState({ oneptfkbox: !this.state.oneptfkbox })
    }
    if (twokbox === true) {
      this.setState({ fhbox: !this.state.fhbox })
    }
    if (twoptfbox === true) {
      this.setState({ twoptfbox: !this.state.twoptfbox })
    }
    if (threekbox === true) {
      this.setState({ threekbox: !this.state.threekbox })
    }
    if (threeptfbox === true) {
      this.setState({ threeptfbox: !this.state.threeptfbox })
    }
    if (fourkbox === true) {
      this.setState({ fourkbox: !this.state.fourkbox })
    }
  }

  checkTwoptfBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
    threeptfbox = this.state.threeptfbox;
    fourkbox = this.state.fourkbox;
    this.setState({ twoptfbox: !this.state.twoptfbox })
    if (onekbox === true) {
      this.setState({ onekbox: !this.state.onekbox })
    }
    if (oneptfkbox === true) {
      this.setState({ oneptfkbox: !this.state.oneptfkbox })
    }
    if (twokbox === true) {
      this.setState({ twokbox: !this.state.twokbox })
    }
    if (fhbox === true) {
      this.setState({ fhbox: !this.state.fhbox })
    }
    if (threekbox === true) {
      this.setState({ threekbox: !this.state.threekbox })
    }
    if (threeptfbox === true) {
      this.setState({ threeptfbox: !this.state.threeptfbox })
    }
    if (fourkbox === true) {
      this.setState({ fourkbox: !this.state.fourkbox })
    }
  }

  checkThreekBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
    threeptfbox = this.state.threeptfbox;
    fourkbox = this.state.fourkbox;
    this.setState({ threekbox: !this.state.threekbox })
    if (onekbox === true) {
      this.setState({ onekbox: !this.state.onekbox })
    }
    if (oneptfkbox === true) {
      this.setState({ oneptfkbox: !this.state.oneptfkbox })
    }
    if (twokbox === true) {
      this.setState({ twokbox: !this.state.twokbox })
    }
    if (twoptfbox === true) {
      this.setState({ twoptfbox: !this.state.twoptfbox })
    }
    if (fhbox === true) {
      this.setState({ fhbox: !this.state.fhbox })
    }
    if (threeptfbox === true) {
      this.setState({ threeptfbox: !this.state.threeptfbox })
    }
    if (fourkbox === true) {
      this.setState({ fourkbox: !this.state.fourkbox })
    }
  }

  checkThreeptfBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
    threeptfbox = this.state.threeptfbox;
    fourkbox = this.state.fourkbox;
    this.setState({ threeptfbox: !this.state.threeptfbox })
    if (onekbox === true) {
      this.setState({ onekbox: !this.state.onekbox })
    }
    if (oneptfkbox === true) {
      this.setState({ oneptfkbox: !this.state.oneptfkbox })
    }
    if (twokbox === true) {
      this.setState({ twokbox: !this.state.twokbox })
    }
    if (twoptfbox === true) {
      this.setState({ twoptfbox: !this.state.twoptfbox })
    }
    if (threekbox === true) {
      this.setState({ threekbox: !this.state.threekbox })
    }
    if (fhbox === true) {
      this.setState({ fhbox: !this.state.fhbox })
    }
    if (fourkbox === true) {
      this.setState({ fourkbox: !this.state.fourkbox })
    }
  }

  checkFourkBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
    threeptfbox = this.state.threeptfbox;
    fourkbox = this.state.fourkbox;
    this.setState({ fourkbox: !this.state.fourkbox })
    if (onekbox === true) {
      this.setState({ onekbox: !this.state.onekbox })
    }
    if (oneptfkbox === true) {
      this.setState({ oneptfkbox: !this.state.oneptfkbox })
    }
    if (twokbox === true) {
      this.setState({ twokbox: !this.state.twokbox })
    }
    if (twoptfbox === true) {
      this.setState({ twoptfbox: !this.state.twoptfbox })
    }
    if (threekbox === true) {
      this.setState({ threekbox: !this.state.threekbox })
    }
    if (threeptfbox === true) {
      this.setState({ threeptfbox: !this.state.threeptfbox })
    }
    if (fhbox === true) {
      this.setState({ fhbox: !this.state.fhbox })
    }
  }



  displayBMIMessage(BMI) {
    if (BMI < 18.5) {
      return <Text style={styles.signupText}> Your current BMI is less than 18.5. You are currently underweight.</Text>;
    } else if (BMI > 18.5 && BMI < 24.9) {
      return <Text style={styles.signupText}> Your current BMI is between 18.5 and 24.9. You are currently a normal weight </Text>;
    } else if (BMI > 24.9 && BMI < 29.9) {
      return <Text style={styles.signupText}> Your current BMI is between 24.9 and 29.9 . You are currently a overweight </Text>;
    } else if (BMI > 30) {
      return <Text style={styles.signupText}> Your current BMI is over 30. You are currently a obese. </Text>;
    }
  };


  render() {


    const { navigation } = this.props;
    const username = navigation.getParam('username', 'NO-ID');
    const password = navigation.getParam('password', 'NO-ID');
    const weight = navigation.getParam('weight', 'NO-ID');
    const height = navigation.getParam('height', 'NO-ID');

    // BMI = kg/m2
    //weight is in KG, height is in CM so divide height by 100
    const bmiHeight = height / 100;
    const bmiHeightSq = bmiHeight * bmiHeight;
    const BMI = weight / bmiHeightSq;


    return (
      <ScrollView style={styles.container}>
        <View style={styles.container2}>

          <Text style={styles.signupText3}>Your Goals</Text>
          <View style={styles.textBox2}>
          <Text style={styles.signupText}> Your current BMI is: {BMI.toFixed(2)}</Text>
          <View> {this.displayBMIMessage(BMI)}</View>
          <Text style={styles.signupText}>Based on your current height and weight, we would reccommend you aim to burn calories weekly. If you have any underlying health problems, please first consult with your doctor before beginning any period of exercise.</Text>
          </View>
          <Text style={styles.signupText3}>Calories you want to burn weekly</Text>

          <CheckBox
            title='500'
            containerStyle={styles.checkBox}
            checked={this.state.fhbox}
            textStyle={styles.signupText}
            onPress={() => this.checkFhBox()}
          />
          <CheckBox
            title='1000'
            containerStyle={styles.checkBox}
            checked={this.state.onekbox}
            textStyle={styles.signupText}
            onPress={() => this.checkOnekBox()}
          />
          <CheckBox
            title='1500'
            containerStyle={styles.checkBox}
            checked={this.state.oneptfkbox}
            textStyle={styles.signupText}
            onPress={() => this.checkOneptfBox()}
          />
          <CheckBox
            title='2000'
            containerStyle={styles.checkBox}
            checked={this.state.twokbox}
            textStyle={styles.signupText}
            onPress={() => this.checkTwokBox()}
          />
          <CheckBox
            title='2500'
            containerStyle={styles.checkBox}
            checked={this.state.twoptfbox}
            textStyle={styles.signupText}
            onPress={() => this.checkTwoptfBox()}
          />
          <CheckBox
            title='3000'
            containerStyle={styles.checkBox}
            checked={this.state.threekbox}
            textStyle={styles.signupText}
            onPress={() => this.checkThreekBox()}
          />
          <CheckBox
            title='3500'
            containerStyle={styles.checkBox}
            checked={this.state.threeptfbox}
            textStyle={styles.signupText}
            onPress={() => this.checkThreeptfBox()}
          />
          <CheckBox
            title='4000'
            containerStyle={styles.checkBox}
            checked={this.state.fourkbox}
            textStyle={styles.signupText}
            onPress={() => this.checkFourkBox()}
          />

          <View style={styles.container2}>

          <TouchableOpacity
              style={styles.button}
              onPress={() => { this.createAccount(username, password) }}>
              <Text style={styles.buttonText}>COMPLETE SIGN UP{this.props.type}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Weight')}>
              }}>
            <Text style={styles.buttonText}>BACK{this.props.type}</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView >

    );
  }

  createAccount(username, password) {
    fire.auth().createUserWithEmailAndPassword(username, password).then((u) => {
    }).catch((error) => {
      alert(error);
    });
  }

  setAuthVars() {

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
  checkBox: {
    backgroundColor: '#1C272A',
    width: 140,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: '#1C272A',
  },
  textBox2: {
    width: 320,
  }
});