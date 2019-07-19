import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import OurServices from './OurServices';
import Profile from './Profile';
import Booking from './Booking';
import Employees from './Employees';
import YourBooking from './yourbooking';
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import HomeScreenTabNavigator from './HomeScreenTabNavigator'

const InnerStackNavigator = new StackNavigator({
    TabNavigator: {
        screen: HomeScreenTabNavigator
    }
})

const HomeStackNavigator = new StackNavigator({
    HomeNavigator: {
        screen: OurServices
    },
    EmployeesNav: {
        screen: Employees
    },
    ProfileNav: {
        screen: Profile
    },
    BookingNav: {
        screen: Booking
    },
    YourBooking: {
        screen: YourBooking
    }
})

const YourBookingInnerStackNavigator = new StackNavigator({
    ForBooking: {
        screen: YourBooking
    }
})

const AppDrawerNavigator = new DrawerNavigator({
    'About Us': { screen: InnerStackNavigator },
    'Your Booking':{screen:YourBookingInnerStackNavigator},
    'Our Services': { screen: HomeStackNavigator },
    'Online Booking': { screen: InnerStackNavigator },
    'Gallery': { screen: InnerStackNavigator },
    'Find Our Branches': { screen: InnerStackNavigator },
    'Contact Us': { screen: InnerStackNavigator },
})


export default AppDrawerNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});