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
      BMI: "",
      TEE: ""
    }
  }

  checkFhBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
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
  }

  checkOnekBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
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
  }

  checkOneptfBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
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
  }

  checkTwokBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
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
  }

  checkThreekBox() {
    fhbox = this.state.fhbox
    onekbox = this.state.onekbox;
    oneptfkbox = this.state.oneptfkbox;
    twokbox = this.state.twokbox;
    twoptfbox = this.state.twoptfbox;
    threekbox = this.state.threekbox;
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
  }



  displayTEEMessage(age, weight, height) {
    const { navigation } = this.props;
    
    const mchecked = navigation.getParam('mchecked', 'NO-ID');
    const sedentary = navigation.getParam('sedentary', 'NO-ID');
    const lowActive = navigation.getParam('lowActive', 'NO-ID');
    const active = navigation.getParam('active', 'NO-ID');
    const veryActive = navigation.getParam('veryActive', 'NO-ID');
    meterHeight = height/100;
    let TEE = 0;

    //If user is male
    if (mchecked) {
      if (sedentary) {
        //1.0
        TEE = 864 - 9.72 * age + 1.0 * (14.2 * weight + 503 * meterHeight);
        return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
      }
      if (lowActive) {
        //1.12
        TEE = 864 - 9.72 * age + 1.12 * (14.2 * weight + 503 * meterHeight);
        return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
      }
      if (active) {
        //1.27
        TEE = 864 - 9.72 * age + 1.27 * (14.2 * weight + 503 * meterHeight);
        return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
      }
      if (veryActive) {
        //1.54
        TEE = 864 - 9.72 * age + 1.54 * (14.2 * weight + 503 * meterHeight);
        return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
      }
      //If user is female
      else
        if (sedentary) {
          //1.0
          TEE = 387 - 7.31 * age + 1.0 * (14.2 * weight + 503 * meterHeight)
          return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
        }
      if (lowActive) {
        //1.12
        TEE = 387 - 7.31 * age + 1.12 * (14.2 * weight + 503 * meterHeight)
        return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
      }
      if (active) {
        //1.27
        TEE = 387 - 7.31 * age + 1.27 * (14.2 * weight + 503 * meterHeight)
        return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
      }
      if (veryActive) {
        //1.54
        TEE = 387 - 7.31 * age + 1.54 * (14.2 * weight + 503 * meterHeight)
        return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
      }
      this.setState({ TEE: TEE });
    }
  };

  displayBMIMessage(BMI) {
    if (BMI < 18.5) {
      return <Text style={styles.signupText}> 0-18.5. 
      You are currently underweight.</Text>;
    } else if (BMI > 18.5 && BMI < 24.9) {
      return <Text style={styles.signupText}> 18.5-24.9. 
      You are currently a normal weight. </Text>;
    } else if (BMI > 24.9 && BMI < 29.9) {
      return <Text style={styles.signupText}> 24.9-29.9. 
      You are currently overweight. </Text>;
    } else if (BMI > 30) {
      return <Text style={styles.signupText}> >30. 
      You are currently obese. </Text>;
    }
  };

  displayBurnMessage (loseChecked, maintainChecked, gainChecked) {
    if(loseChecked){
      return <Text style={styles.signupText}>You want to lose weight, we recommend 
      you aim to burn an extra 1500 kCal per week to increase your fitness. Maintain or slightly 
      decrease your current calorie intake in order to lose weight. Ensure a healthy diet.</Text>;
    }
    if(maintainChecked){
      return <Text style={styles.signupText}>To maintain your weight, we recommend 
      you aim to burn 1200 kCal per week to increase your fitness. Increase your calorie intake 
      to match your new exercise regime in order to maintain your weight. Ensure a healthy diet.</Text>;
    }
    if(gainChecked){
      return <Text style={styles.signupText}>To gain weight, we recommend 
      you aim to burn an extra 600 kCal per week. Increase your calorie intake by between 
      300-500kCal more than you burn each time you exercise to gain weight. 
      </Text>;
    }

  }

  setCheckBoxL(loseChecked){
    twoptfbox = this.state.twoptfbox;
    if(loseChecked){
      this.setState({twoptfbox: true});
    }
  }

  setCheckBoxM(twokbox){
    twokbox = this.state.twokbox;
    if(twokbox){
      this.setState({twokbox: true});
    }
  }

  setCheckBoxG(gainChecked){
    onekbox = this.state.onekbox;
    if(gainChecked){
      this.setState({onekbox: true});
    }
  }

  componentWillMount() {
    const { navigation } = this.props;
    const loseChecked = navigation.getParam('loseChecked', 'NO-ID');
    const gainChecked = navigation.getParam('gainChecked', 'NO-ID');
    const maintainChecked = navigation.getParam('maintainChecked', 'NO-ID');
    this.setCheckBoxL(loseChecked)
    this.setCheckBoxM(maintainChecked)
    this.setCheckBoxG(gainChecked)
  }

  writeUserData(authData) {

    const { navigation } = this.props;
    const username = navigation.getParam('username', 'NO-ID');
    const age = navigation.getParam('age', 'NO-ID');
    const weight = navigation.getParam('weight', 'NO-ID');
    const height = navigation.getParam('height', 'NO-ID');
    const mchecked = navigation.getParam('mchecked', 'NO-ID');
    const firstName = navigation.getParam('firstName' ,'NO-ID');
    const lastName = navigation.getParam('lastName' ,'NO-ID');
    const loseChecked = navigation.getParam('loseChecked', 'NO-ID');
    const gainChecked = navigation.getParam('gainChecked', 'NO-ID');
    const maintainChecked = navigation.getParam('maintainChecked', 'NO-ID');

    var today = new Date();

    const bmiHeight = height / 100;
    const bmiHeightSq = bmiHeight * bmiHeight;
    const BMI = weight / bmiHeightSq;


    fire.database().ref('users/' + authData + '/').set({
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: username,
        registered: today,
        height: height,
        weight: weight,
        male: mchecked,
        loseChecked: loseChecked,
        gainChecked: gainChecked,
        maintainChecked: maintainChecked,
        BMI: BMI
    }).then(() => {
      console.log('Inserted to db');
    }).catch((error) => {
      console.log(error);
    });
}

createAccount(username, password) {
  fire.auth().createUserWithEmailAndPassword(username, password).then((u) => {
  }).catch((error) => {
    alert(error);
  }).then(() => {
    var userId = fire.auth().currentUser.uid;
    this.writeUserData(userId);
}).catch(function(error){
    console.warn(error)
});
}

  render() {


    const { navigation } = this.props;
    const username = navigation.getParam('username', 'NO-ID');
    const password = navigation.getParam('password', 'NO-ID');
    const age = navigation.getParam('age', 'NO-ID');
    const weight = navigation.getParam('weight', 'NO-ID');
    const height = navigation.getParam('height', 'NO-ID');
    const loseChecked = navigation.getParam('loseChecked', 'NO-ID');
    const gainChecked = navigation.getParam('gainChecked', 'NO-ID');
    const maintainChecked = navigation.getParam('maintainChecked', 'NO-ID');

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
            <Text style={styles.signupText}>BMI: {BMI.toFixed(2)}</Text>
            <Text style={styles.signupText}>You are in the BMI range: {this.displayBMIMessage(BMI)}</Text>
            <Text style={styles.signupText}>Based on your current weight, height & age and lifestyle, Runtracker
            has calculated your daily calorie needs to be {this.displayTEEMessage(age, weight, height)} kCal. </Text>
            <Text style={styles.signupText}>{this.displayBurnMessage(loseChecked, maintainChecked, gainChecked)}</Text>
            <Text style={styles.signupText}>If you have any underlying
            health problems, please first consult with your doctor before beginning any
            period of exercise.</Text>
          </View>
          <Text style={styles.signupText3}>Calories to burn weekly</Text>

          <CheckBox
            title='300'
            containerStyle={styles.checkBox}
            checked={this.state.fhbox}
            textStyle={styles.signupText}
            onPress={() => this.checkFhBox()}
          />
          <CheckBox
            title='600'
            containerStyle={styles.checkBox}
            checked={this.state.onekbox}
            textStyle={styles.signupText}
            onPress={() => this.checkOnekBox()}
          />
          <CheckBox
            title='900'
            containerStyle={styles.checkBox}
            checked={this.state.oneptfkbox}
            textStyle={styles.signupText}
            onPress={() => this.checkOneptfBox()}
          />
          <CheckBox
            title='1200'
            containerStyle={styles.checkBox}
            checked={this.state.twokbox}
            textStyle={styles.signupText}
            onPress={() => this.checkTwokBox()}
          />
          <CheckBox
            title='1500'
            containerStyle={styles.checkBox}
            checked={this.state.twoptfbox}
            textStyle={styles.signupText}
            onPress={() => this.checkTwoptfBox()}
          />
          <CheckBox
            title='2000'
            containerStyle={styles.checkBox}
            checked={this.state.threekbox}
            textStyle={styles.signupText}
            onPress={() => this.checkThreekBox()}
          />
        
          <View style={styles.container2}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { this.createAccount(username, password) }}>
              <Text style={styles.buttonText}>COMPLETE SIGN UP{this.props.type}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Physical')}>
              }}>
            <Text style={styles.buttonText}>BACK{this.props.type}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView >

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