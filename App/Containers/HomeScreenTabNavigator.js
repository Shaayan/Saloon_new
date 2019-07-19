import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    AsyncStorage
} from "react-native";


import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthUtils} from "../Services/AuthUtils";
import ScreenOne from './TabNavigator/ScreenOne'
import ScreenTwo from './TabNavigator/ScreenTwo'
import ScreenThree from './TabNavigator/ScreenThree'
import ScreenFour from './TabNavigator/ScreenFour'




class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../assets/Dark/logof-14.png')}
        style={{ width: 120, height: 50 }}
      />
    );
  }
}
// headerTitle: (
//               <Image
//                 source={require('../../assets/Dark/loginuser.png')}
//                 style={{ width: 30, height: 30 }}
//               />
//             ),

class AppTabNavigator extends Component {

    static navigationOptions = ({ navigation }) => {
        console.log((navigation, 'navigation123'))
        return {
            headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><LogoTitle /></View>,
            headerStyle: {backgroundColor: 'absolute'},
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Icon name="bars" size={24} onPress={() => navigation.openDrawer()} />
                </View>
            ),
            headerRight:(
                <View style={{ padding: 20 }}>
                    <Icon name="sign-out" size={24}
                        onPress={() => {
                            AsyncStorage.removeItem('user')
                            .then((response) => {
                                navigation.navigate('WelcomeScreen');
                            })
                        }} />
                </View>
            )
        }
    }
    render() {
        return (
            <HomeScreenTabNavigator screenProps={{ navigation: this.props.navigation }} />
        )
    }
}

const HomeScreenTabNavigator = new TabNavigator({

    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Icon name="rocket" size={24} />
            )

        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Icon name="rocket" size={24} />
            )
        }
    },
    ScreenThree: {
        screen: ScreenThree,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: () => (
                <Icon name="rocket" size={24} />
            )
        }
    },
    ScreenFour: {
        screen: ScreenFour,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: () => (
                <Icon name="rocket" size={24} />
            )
        }
    }
},{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
     backgroundColor: 'white',
  }
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AppTabNavigator;
