import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import firebase from 'firebase';
import { ImagePicker } from 'expo';
import { Camera, Permissions } from 'expo';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      weight: 0,
      fName: null,
      lName: null,
      BMI: 0,
      goal: 0,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      image: null,
    }
  }

  logOut() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }, function (error) {
      // An error happened.
    });
  }

  _pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  
  render() {

    let { image } = this.state;

    return (
      <View style={styles.container}>
        <Image style={{ width: 260, height: 160 }}
          source={require('../assets/images/icon3.png')} />


        <View style={styles.profilePic}>
          {!image &&
            <View style={styles.imagePicked} />}
          {image &&
            <Image source={{ uri: image }} style={styles.imagePicked} />}
          <TouchableOpacity
                    style={styles.button}
                    onPress={this._pickImage}>
                    <Text style={styles.buttonText}>+{this.props.type}</Text>
          </TouchableOpacity>


          <View style={styles.nameView}>
            <Text style={styles.signupText}>
              First Name:  {this.state.fName}
            </Text>
            <Text style={styles.signupText}>
              Last Name:  {this.state.lName}
            </Text>
          </View>
        </View>



        <View style={styles.healthData}>
          <Text style={styles.signupText}>
            Height:  {this.state.height}
          </Text>
          <Text style={styles.signupText}>
            Weight:  {this.state.weight}
          </Text>
          <Text style={styles.signupText}>
            BMI:  {this.state.BMI}
          </Text>
          <Text style={styles.signupText}>
            Goal:  {this.state.goal} kCal per week
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.signupText}>Had enough fun?</Text>
          <TouchableOpacity onPress={() => this.logOut()}>
            <Text style={styles.signupButton}> Log Out</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 18
  },
  imagePicked: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'grey',
  },
  profilePic: {
    flexDirection: 'row',
    right: 35,
    top: -35
  },
  nameView: {
    top: 45
  },
  healthData: {
    right: 65
  },
  buttonText: {
    fontSize: 32,
    color: 'blue',
    right: 25,
    top: -15
  }
});
