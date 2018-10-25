import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import Start from './components/Start';
import { Root } from "native-base";
import { Container, Content } from 'native-base';

export default class App extends Component {
  state = {
    fontLoaded: false,
  };
  constructor(props){
    super(props);

  }
  render() {
    return (
      <Container>
        <Content>
          {
            this.state.fontLoaded ? (
              <Start />
            ) : null
          }

        </Content>
      </Container>
    );
  }
  async componentDidMount() {
    try {
      await Font.loadAsync({
        'Avenir-Light': require('./assets/fonts/AvenirLTStd-Light.otf'),
        'Glacial': require('./assets/fonts/GlacialIndifference-Regular.otf'),
      })
      this.setState({ fontLoaded: true });
      console.log('fonts are loaded')
    } catch (err) {
      console.log(err)
    }
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