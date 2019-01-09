import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  state = {
    isLoaded: false
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? null:
        <View style={styles.loading}>
        <Text style={styles.loadingText}>Getting the aewsome weather</Text></View>}
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
  }
});
