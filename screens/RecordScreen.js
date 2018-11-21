import Expo from 'expo';
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import pick from 'object.pick';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class App extends Component {
  state = {
    location: { coords: { latitude: 0, longitude: 0 } },
    routeCoordinates: []
  };

  componentWillMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);

  }

  locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.05,
    },
      this.setState({ location, region })
    console.log(routeCoordinates);

    const { routeCoordinates } = this.state
    const positionLatLngs = pick(location.coords, ['latitude', 'longitude'])
    this.setState({ routeCoordinates: routeCoordinates.concat(positionLatLngs) })
  }


  //on location changed, we need to append the location to 
  //the polyline coordinates array, therefore drawing a route as user moves

  render() {
    return (
      <Expo.MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        region={this.state.region}
      >

        <Expo.MapView.Polyline
          coordinates={this.state.routeCoordinates}
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