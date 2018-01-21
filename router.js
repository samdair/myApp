import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Feed from './components/Feed';
import UserDetail from './components/UserDetails';
import Profile from './components/Profile';
import Notification from './components/Notification';


export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}`,
      //headerTintColor: 'white',
      //headerStyle: { backgroundColor: tabColor, borderWidth: 1, borderBottomColor: 'white' },
      //headerTitleStyle: { color: 'white', fontWeight: 'bold'}
    }),
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      //title: `${navigation.state.routeName}`,
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
      //headerTintColor: 'white',
      //headerStyle: { backgroundColor: tabColor, borderWidth: 1, borderBottomColor: 'white' },
      //headerTitleStyle: { color: 'white', fontWeight: 'bold' }
    }),
  },
});

const ProfileTab = TabNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      //tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    },
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      tabBarLabel: 'Notification',
      //tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
}, {
  initialRouteName: 'Profile',
  tabBarPosition: 'top',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: 'black',
    labelStyle: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    style: {
      //backgroundColor: 'gray',
      paddingBottom: 5
    },
  },
});


export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  }
},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'black',
  },
});








//TODO 

// export const SettingsStack = StackNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings',
//     },
//   },
// });

// export const Root = StackNavigator({
//   Tabs: {
//     screen: Tabs,
//   },
//   Settings: {
//     screen: SettingsStack,
//   },
// }, {
//   mode: 'modal',
//   headerMode: 'none',
// });