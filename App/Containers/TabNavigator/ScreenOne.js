import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions
} from "react-native";

const {height, width} = Dimensions.get("window");

class ScreenOne extends Component {
    render() {
        return (
            <View>
                <Image source={require('../../../assets/Dark/signup/dashboard.jpg')} style={{width:width,height:height}}></Image>
                <View style={styles.container}>
                    <Button title="Log out" onPress={() => this.props.screenProps.navigation.navigate('WelcomeScreen')} />
                </View>
            </View>
        );
    }
}
export default ScreenOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});