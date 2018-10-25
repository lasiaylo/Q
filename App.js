import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
  componentDidMount() {
    Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Avenir-Book': require('./assets/fonts/AvenirLTStd-Book.otf'),
      'Avenir-Light': require('./assets/fonts/AvenirLTStd-Light.otf'),
      'Avenir-Roman': require('./assets/fonts/AvenirLTStd-Roman.otf'),
      'Glacial': require('./assets/fonts/GlacialIndifference-Regular.otf'),
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
