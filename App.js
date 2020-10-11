//This is an example code for Bottom Navigation//
import React from 'react';
import {Button, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screen/HomeScreen';
import StaffsScreen from './src/screen/StaffsScreen';
import ReservationScreen from './src/screen/ReservationScreen';
import CustomersScreen from './src/screen/CustomersScreen';
import SearchScreen from './src/screen/SearchScreen';
import PackegeScreen from './src/screen/PackegeScreen';
import ReserPackageScreen from './src/screen/ReserPackages';
import PackageGTourScreen from './src/screen/PackageGTour';
import PackageBTourScreen from './src/screen/PackageBTour';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {screen: HomeScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#15416d',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  },
);

const ReservationStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Reservation: {screen: ReservationScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#15416d',
      },
      headerTintColor: '#FFFFFF',
      title: 'Reservation',
      //Header title
    },
  },
);

const StaffStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Staffs: {screen: StaffsScreen},
    Search: {screen: SearchScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#15416d',
      },
      headerTintColor: '#FFFFFF',
      title: 'Staffs',
      //Header title
    },
  },
);

const CustomersStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Customers: {screen: CustomersScreen},
    PackegeGTour: {screen: PackageGTourScreen},
    PackegeBTour: {screen: PackageBTourScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#15416d',
      },
      headerTintColor: '#FFFFFF',
      title: 'Customers',
      //Header title
    },
  },
);

const PackegeStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Packege: {screen: PackegeScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#15416d',
      },
      headerTintColor: '#FFFFFF',
      title: 'Package',
      //Header title
    },
  },
);

const ReserPackegeStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Packege: {screen: ReserPackageScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#15416d',
      },
      headerTintColor: '#FFFFFF',
      title: 'Package',
      //Header title
    },
  },
);

const App = createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    Staff: {screen: StaffStack},
    Customers: {screen: CustomersStack},
    Packege: {screen: PackegeStack},
    Reservation: {screen: ReservationStack},
    Booking: {screen: ReserPackegeStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;

        switch (routeName) {
          case 'Home':
            iconName = `home${focused ? '' : '-outline'}`;
            break;
          case 'Customers':
            iconName = `man${focused ? '' : '-outline'}`;
            break;
          case 'Staff':
            iconName = `people${focused ? '' : '-outline'}`;
            break;
          case 'Packege':
            iconName = `gift${focused ? '' : '-outline'}`;
            break;
          case 'Booking':
            iconName = `book${focused ? '' : '-outline'}`;
            break;
          case 'Reservation':
            iconName = `receipt${focused ? '' : '-outline'}`;
            break;
          default:
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            break;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#15416d',
      inactiveTintColor: 'gray',
    },
  },
);
export default createAppContainer(App);
