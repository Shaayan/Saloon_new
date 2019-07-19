import React, { Component } from "react";
import { Button,Text } from 'native-base';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    AsyncStorage
} from "react-native";
import styles from './styles/WelcomeScreen';
// import PushRN from "./rn-push";

const {height, width} = Dimensions.get("window");

// const Push = PushRN;

const sendTokenToServer = (token) => {
  // alert(`Sending token ${token} to server`);
  fetch(`https://secret-lake-46137.herokuapp.com/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: token,
  })
    .then(() => { console.log('Successfully sent token'); })
    .catch((err) => { console.error('Failed to send token', err); });
};

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        const onTokenReceived = (token) => { 
            alert(token)
            console.log(token, '111111111')
            this.handleTokenUpdate(token);
        };
        // // this.push = new Push(onTokenReceived);
        // // this.push.registerNotificationListener((notification) => {
        // //     console.log(notification, '3333333333')
        // //     this.onNotificationReceived(notification);
        // });
        this.state = {
            token: 'No device token registered yet.',
            notification: 'No notification received yet',
        };
    }

    componentWillUnmount() {
        // this.push.unregister();
    }

    async onNotificationReceived(notification) {
        console.log('Received push notification', notification);
        this.setState({ notification: notification.title });
    }

    handleTokenUpdate(token) {
        console.log('Received token', token);
        this.setState({ token });
        sendTokenToServer(token);
    }

    componentDidMount = () =>{
        this.getAllBooking();
    }

    async getAllBooking(){
        AsyncStorage.getItem('user')
        .then((response) => {
            let obj = JSON.parse(response);
            console.log(response, 'responseeeeeeee')
            if(response.role == 'user'){
                this.props.navigation.navigate('EmployeesHomeScreen');
            }else {
                this.props.navigation.navigate('DrawerNavigator');
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop: height*0.3}}></View>
                <View>
                    <Image source={require('../../assets/Dark/logof-14.png')} style={{width:width*0.7,height:height*0.1}}></Image>
                </View>
                {/*<View style={{ width: width*0.7 }}>
                    <Button title="Log in"
                        onPress={() => this.props.navigation.navigate('LoginScreen')} />
                </View>
                <View style={{height: height*0.01}}>
                </View>
                <View style={{ width: width*0.7 }}>
                    <Button title="Sign Up"
                        onPress={() => this.props.navigation.navigate('SignUpScreen')} />
                </View>*/}
                <View style={{marginTop: height*0.35}}></View>
                <View>
                    <Button bordered dark onPress={() => this.props.navigation.navigate('SignUpScreen')} style={{ width: width*0.7,justifyContent:'center'}}>
                        <Text>Create your Account</Text>
                    </Button>
                </View>
                <View style={{marginTop:30}}>
                    <Text onPress={() => this.props.navigation.navigate('LoginScreen')}>You already have a <Text style={{color:'blue'}}>login</Text>?</Text>
                </View>
            </View>
        );
    }
}

export default WelcomeScreen;

WelcomeScreen.navigationOptions = ({ navigation }) => ({
    header: null
})

