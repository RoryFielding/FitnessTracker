import Expo from 'expo';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, ListView } from 'react-native';
import { Location, Permissions } from 'expo';
import pick from 'object.pick';
import TimeFormatter from 'minutes-seconds-milliseconds';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

let laps = [{}]

let ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});

var geo = require('node-geo-distance');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(laps),
      isRunning: false,
      mainTimer: null,
      LapTimer: null,
      mainTimerStart: null,
      LapTimerStart: null,
      location: { coords: { latitude: 0, longitude: 0 } },
      routeCoordinates: [],
      lineCoordinates: [],
      prevLatLng: {},
      distanceTravelled: 0,
      changeCount: 0,
      speed: 0,
      calBurned: 0,
    };
  }


  componentWillMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);

  }

  calcDistance = newLatLng => {
    distanceTravelled = this.state.distanceTravelled;
    var arridx = this.state.lineCoordinates.length;


    if (arridx < 1) {
      return;
    }

    var coord1 = {
      latitude: newLatLng.latitude,
      longitude: newLatLng.longitude
    }

    if (arridx > 1) {
      let coord2 = this.state.prevLatLng;

      var haversineDist = geo.haversineSync(coord1, coord2);

      this.setState({
        distanceTravelled: distanceTravelled + (haversineDist / 1000)
      })
    }
  };

  locationChanged = (location) => {

    const { routeCoordinates } = this.state
    const { lineCoordinates } = this.state
    const positionLatLngs = pick(location.coords, ['latitude', 'longitude'])
    const newCoordinate = this.state.location.coords;
    isRunning = this.state.isRunning;

    if (isRunning === true) {
      this.calcDistance(newCoordinate)

      this.setState({ lineCoordinates: lineCoordinates.concat(positionLatLngs) })
    }

    //update user location and map drawn
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.05,
    },
      this.setState({ location, region })

    this.setState({ prevLatLng: routeCoordinates[this.state.routeCoordinates.length - 1] })
    this.setState({ routeCoordinates: routeCoordinates.concat(positionLatLngs) })
    if (location.coords.speed > 0){
    this.setState({ speed: location.coords.speed });
    }
    //when not moving api returns -1 for speed so set 0 in this case
    else {
      this.setState({ speed: 0})
    }

  }

  _renderTimers() {
    return (
      <View styles={styles.timerWrapper}>
        <Text style={styles.mainTimer}>{TimeFormatter(this.state.mainTimer)}</Text>
      </View>
    )
  }

  _renderDistance() {
    return (
      <View styles={styles.timerWrapper}>
        <Text style={styles.mainTimer}>{parseFloat(this.state.distanceTravelled).toFixed(2)} km</Text>
      </View>
    )
  }

  _renderSpeed() {
    return (
      <View styles={styles.timerWrapper}>
        <Text style={styles.mainTimer}>{parseFloat(this.state.speed).toFixed(2)} mph</Text>
      </View>
    )
  }

  _renderStartButton() {
    return (
      <View styles={styles.rowWrapper}>
        <TouchableHighlight style={styles.rowWrapper} underlayColor='#ddd' onPress={this.handleStartStop.bind(this)} style={styles.button}>
          <Text style={[styles.startBtn, this.state.isRunning && styles.stopBtn]}>{this.state.isRunning ? 'Stop' : 'Start'}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _renderFinishButton() {
    return (
      <View styles={styles.rowWrapper}>
        <TouchableHighlight style={styles.rowWrapper} underlayColor='#777' onPress={this.handleLapReset.bind(this)} style={styles.button}>
          <Text>{(this.state.mainTimerStart && !this.state.isRunning) ? 'Reset' : 'Finish'}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  handleStartStop() {
    let { isRunning, firstTime, mainTimer, LapTimer } = this.state;

    //Stop button clicked
    if (isRunning) {
      clearInterval(this.interval);
      this.setState({
        isRunning: false,
      });
      return;
    }

    //Start button clicked
    this.setState({
      mainTimerStart: new Date(),
      LapTimerStart: new Date(),
      isRunning: true
    });

    this.interval = setInterval(() => {
      this.setState({
        mainTimer: new Date() - this.state.mainTimerStart + mainTimer,
        LapTimer: new Date() - this.state.LapTimerStart + LapTimer,
      });
    }, 30);
  }

  handleLapReset() {
    let { isRunning, mainTimerStart } = this.state;

    //Reset button clicked
    if (mainTimerStart && !isRunning) {
      laps: [],
        this.setState({
          mainTimerStart: null,
          LapTimerStart: null,
          mainTimer: 0,
          LapTimer: 0,
        });
    }

    //Lap button clicked do nothing
  }

  render() {
    return (

      <Expo.MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        region={this.state.region}
      >

        <Expo.MapView.Polyline
          coordinates={this.state.lineCoordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000'
          ]}
          strokeWidth={6}
        />

        <View style={styles.top}>
          {this._renderTimers()}
          {this._renderDistance()}
          {this._renderSpeed()}
        </View>
        <View style={styles.buttonWrapper}>
          {this._renderStartButton()}
          {this._renderFinishButton()}
        </View>
      </Expo.MapView>

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
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topBarContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  timerWrapper: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  },
  timerWrapperInner: {
    borderWidth: 0.5,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF'
  },
  top: {
    flex: 1,
  },
  bottom: {
    height: 50
  },
  mainTimer: {
    fontSize: 60,
    fontWeight: '100',
    alignSelf: 'center'
  },
  LapTimer: {
    fontSize: 18,
    borderWidth: 0.5,
    alignSelf: 'flex-end'
  },
  startBtn: {
    color: '#00cc00'
  },
  stopBtn: {
    color: 'red'
  },
  buttonWrapper: {
    paddingVertical: 25,
    bottom: 0,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  rowWrapper: {
    flexDirection: 'row',
  }
});