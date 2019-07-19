import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions
} from 'react-native';
import styles from './styles/mainlogo_backimage';

const {height, width} = Dimensions.get("window");

//const remote = './images/bg_screen.png';

class MainLogoImage extends Component {

    static navigationOptions = {
        title : 'login'
    }



    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/bg_screen.png')} style={styles.backgroundImage}></Image>
                <Image source={require('../../assets/logo.png')} style={{width: 150, height: 150}}></Image>
            </View>
        )
    }
}

export default MainLogoImage;


