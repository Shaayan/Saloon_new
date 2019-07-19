
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import WelcomeScreen from './App/Containers/WelcomeScreen'
import LoginScreen from './App/Containers/LoginScreen';
import EmployeesScreen from './App/Containers/Employees';
import ProfileScreen from './App/Containers/Profile';
import SignUpScreen from './App/Containers/SignUpScreen';
import DrawerNavigator from './App/Containers/DrawerNavigator'
import TermCondition from './App/Containers/termCondition';
import YourBookingScreen from './App/Containers/yourbooking';
import EmployeesHomeScreen from './App/Containers/EmployessHomeScreen';
import OurServices from './App/Containers/OurServices';
import DashboardScreen from './App/Containers/DashboardScreen';
import DealsAvailable from './App/Containers/DealsAvailable';
// import TimeSlot from './App/Containers/TimeslotSelect';
import ServiceBooked from './App/Containers/ServiceBooked';
import Employees from './App/Containers/Employees';
import ArtistScreen from './App/Containers/ArtistScreen';

export default class App extends Component {
    render() {
        return (
            <AppStackNavigator />
        )
    }
}

const AppStackNavigator = createStackNavigator({
    // ProfileScreen: {screen: ProfileScreen},
    // EmployeesScreen: { screen: EmployeesScreen},
    // YourBookingScreen:{screen:YourBookingScreen},
    WelcomeScreen: { screen: DashboardScreen },
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen },
    EmployeesHomeScreen:{screen:WelcomeScreen},
    TermCondition: { screen: TermCondition },
    Dashboard: {
        screen: DashboardScreen
    },
    Deals: {
        screen: DealsAvailable
    },
    Services: {
        screen: OurServices
    },
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null
        }
    }
},{
    navigationOptions: {
        gesturesEnabled: false
    },
    transitionConfig: getSlideFromRightTransition

});
