import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';

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
    const state = this.state;
    return (
<View style={styles.container} >
        <Text style={styles.title2Text}>
            Activity Complete
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
