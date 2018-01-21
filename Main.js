/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import store from './store';
import { userActions } from './actions/userAction';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

 class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {userData: null};
  }
  componentDidMount(){
    this.loadUserData()
  }

  async loadUserData(){
    const response = await this.props.getUsers()
    const users = await this.props.user;
    console.log('debug1',users.user)
    this.setState({userData: users.user})
  }
    
  
  render() {
    if(this.state.userData){
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {this.state.userData[0].email}
          </Text>
        </View>
      );
    }

    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Loading!!!!
          </Text>
        </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(userActions.getUsers()),
  getUserById: (id) => dispatch(userActions.getUserById(id)),
  addUser: (id, username, email) => dispatch(userActions.addUser(id, username, email))

})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
