import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    let location = await Expo.Location.getCurrentPositionAsync({});
    this.setState({ location });
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  render() {

    if (!this.state.location) {
      return (
        <View>
          <Text Loading></Text>
        </View>
      )
    }
    return (
      <Expo.MapView 
        style={{ flex: 1 }} 
        initialRegion={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.0922 / 3 ,
          longitudeDelta: 0.0421 / 3,
        }}
        >
        <Expo.MapView.Marker 
        coordinate={this.state.location.coords} 
        title="You are here" />
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
});
