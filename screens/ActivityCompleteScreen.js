import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import TimeFormatter from 'minutes-seconds-milliseconds';
import firebase from 'firebase';

export default class AchievementsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      notes: '',
      date: '',
    }
  }

  setNotes(notes) {
    this.setState({ notes })
  }

  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    this.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }

  saveActivity () {

    const { navigation } = this.props;
    const distanceTravelled = navigation.getParam('distanceTravelled', 'NO-ID');
    const speed = navigation.getParam('speed', 'NO-ID');
    const kCal = navigation.getParam('kCal', 'NO-ID');
    const mainTimer = navigation.getParam('mainTimer', 'NO-ID');
    var userId = firebase.auth().currentUser.uid;

    firebase.database().ref('activity/' + userId).push(
      {
        Date: this.state.date,
        Distance: distanceTravelled,
        Time: mainTimer,
        Speed: speed,
        kCalBurned: kCal,
        Notes: this.state.notes
      }
    ).then(() => {
      console.log('Inserted to db');
      this.props.navigation.navigate('Analytics');
    }).catch((error) => {
      console.log(error);
    });

  }

  render() {

    const { navigation } = this.props;
    const distanceTravelled = navigation.getParam('distanceTravelled', 'NO-ID');
    const speed = navigation.getParam('speed', 'NO-ID');
    const kCal = navigation.getParam('kCal', 'NO-ID');
    const mainTimer = navigation.getParam('mainTimer', 'NO-ID');
    const mapSnapshot = navigation.getParam('mapSnapshot', 'NO-ID');

    return (
      <ScrollView style={styles.container}>
      <View style={styles.container2}>

        <Image style={{ width: 260, height: 160 }}
          source={require('../assets/images/icon3.png')} />
        <Text style={styles.titleText}>Completed Activity</Text>
          <Text style={styles.activityText}>
            Date/Time: {this.state.date}
          </Text>

          <View style={styles.rowWrap}>
            <Text style={styles.activityText2}>
              Distance:  {parseFloat(distanceTravelled.toFixed(2))} km
          </Text>
            <Text style={styles.activityText2}>
              Speed: {parseFloat(speed.toFixed(2))} kmph
          </Text>
          </View>

          <View style={styles.rowWrap}>
            <Text style={styles.activityText2}>
              Time: {TimeFormatter(mainTimer)}
            </Text>
            <Text style={styles.activityText2}>
              kCal Burned: {parseFloat(kCal.toFixed(2))}
            </Text>
            </View>
            <Text style={styles.activityText3}>
            Notes: 
          </Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Notes"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            onChangeText={(notes) => this.setNotes(notes)}
            value={this.state.notes}
            blurOnSubmit={false}
          />

          <Text style={styles.activityText3}>
            Route Snapsnot:
          </Text>
          <Image style={{ width: 260, height: 160, marginVertical: 10 }}
          source={{ uri: mapSnapshot}} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.saveActivity();
            }}>
            <Text style={styles.buttonText}>SAVE ACTIVITY{this.props.type}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Record');
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
  activityText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 18,
  },
  activityText2: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 18,
    paddingHorizontal: 20
  },
  activityText3: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 18,
  },
  titleText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 32,
    top: -35,
    borderColor: 'black'
  },
  title2Text: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 22,
    borderColor: 'black'
  },
  buttonText: {
    fontSize: 32,
    color: 'blue',
    right: 25,
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5
  },
  inputBox: {
    width: 300,
    backgroundColor: '#0C2331',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
    paddingVertical: 16,
  },
  button: {
    width: 300,
    backgroundColor: '#4CA4B0',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
});
