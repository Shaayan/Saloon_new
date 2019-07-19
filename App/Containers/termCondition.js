import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");

import {
    View,
    Text,
    ScrollView,
    StyleSheet, Dimensions
} from 'react-native';
import Backgroundgroundimage from '../Components/backgroundImage';


class TermCondition extends Component {

    static navigationOptions = {
        headerTitle:'Term & Condition',
        headerStyle: {backgroundColor: '#F7941E'},
        headerTitleStyle: {fontSize:20,  color: 'white',alignSelf:'center', textAlign: 'center',flex:1},
        headerRight: (
            <View>

            </View>
        ),
        headerLeftStyle:{
            fontColor:'white'
        }
    };


    render(){
        return(
            <View>
                <Backgroundgroundimage />
                <ScrollView>
                    <View>
                        <Text style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        <Text style={{color:'black'}}> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default TermCondition;


