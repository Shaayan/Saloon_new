import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");

import {
    View,
    Text,
    StyleSheet, Dimensions, Image
} from 'react-native';
import styles from './styles/mainlogo_backimage';


class BackgroundImage extends Component {

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
            <View style={styles.container}>
                {/* <Image source={require('../../assets/bg_screen.png')} style={styles.backgroundImage}></Image> */}
            </View>
        )
    }
}

export default BackgroundImage;


