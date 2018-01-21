import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, ActivityIndicator } from 'react-native';
const { height, width } = Dimensions.get('screen');

export default class Profile extends Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.title}>Profile</Text>
	  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    flexDirection: 'row',
  },
  title: {
  	marginTop: '5%',
  },
})