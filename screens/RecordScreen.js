import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Expo from 'expo';

export default class RecordScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    location: null,
  }


  _getLocationAsync = async () => {
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if (status != 'granted') {
      console.error("Location permission not granted!");
      return;
    }
    console.log('Working');
    let location = await Expo.Location.getCurrentPositionAsync({});
    console.log('Done');
    this.setState({ location });
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  render() {
    if (!this.state.location) {
      return (<View style={styles.container}>
        <Text style={styles.signupTextCont}>
          Loading Loading Loading
        </Text>
      </View>)
    }
    return (
      <Expo.MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.0922 /4,
          longitudeDelta: 0.0421 /4,
        }}>
        <Expo.MapView.Marker.Animated
        ref={marker => {
          this.marker = marker;
        }} 
        coordinate={this.state.location.coords}
        image={require('../assets/images/location3.png')}
        />
        <Expo.MapView.Polyline
        coordinate={this.state.location.coords}
        strokeWidth={5}
        />
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={styles.topBarContent}>
              Distance: {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
            <Text style={styles.topBarContent}>
              Time: {parseFloat(this.state.distanceTravelled).toFixed(2)} 
            </Text>
            <Text style={styles.topBarContent}>
              Calories Burned: {parseFloat(this.state.distanceTravelled).toFixed(2)} 
            </Text>
          </TouchableOpacity>
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
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  },
  topBarContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  }
});