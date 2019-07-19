import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class ScreenFour extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="ScreenFour" />
            </View>
        );
    }
}
export default ScreenFour;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});