import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Constants } from 'expo';
import Weather from './Weather';

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          isLoaded: true
        });
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? <Weather />:
        <View style={styles.loading}>
        <Text style={styles.loadingText}>Getting the aewsome weather</Text></View>}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 15
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  },
  errorText: {
    color: "red",
    marginBottom: 40
  }
});
