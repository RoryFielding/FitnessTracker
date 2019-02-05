import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import TimeFormatter from 'minutes-seconds-milliseconds';

export default class AchievementsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    const { navigation } = this.props;
    const distanceTravelled = navigation.getParam('distanceTravelled', 'NO-ID');
    const speed = navigation.getParam('speed', 'NO-ID');
    const kCal = navigation.getParam('kCal', 'NO-ID');
    const mainTimer = navigation.getParam('mainTimer', 'NO-ID');


    return (
      <View style={styles.container}>
       <Image style={{ width: 260, height: 160, top: -48 }}
          source={require('../assets/images/icon3.png')} />
        <Text style={styles.title2Text}>
          Completed Activity Summary
          </Text>

        <Text style={styles.signupText}>
          Date/Time: return current timestamp
          </Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text style={styles.signupText}>
            Distance:  {parseFloat(distanceTravelled.toFixed(2))} km
          </Text>
          <Text style={styles.signupText}>
            Speed: {parseFloat(speed.toFixed(2))} kmph
          </Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text style={styles.signupText}>
            Time: {TimeFormatter(mainTimer)}
          </Text>
          <Text style={styles.signupText}>
            kCal Burned: {parseFloat(kCal.toFixed(2))}
          </Text>
        </View>

        <Text style={styles.signupText}>
          Notes:
          </Text>

        <Text style={styles.signupText}>
          Route Image Snapsnot here
          </Text>
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
});
