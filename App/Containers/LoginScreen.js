import React, { Component } from 'react';
import {View, StyleSheet, Image, Dimensions, ActivityIndicator, ScrollView, AsyncStorage,TouchableOpacity} from 'react-native';
import MainLogin_backimage from '../Components/mainlogo_backimage';
import { Container, Header, Content, Item, Input,Button,Text,Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputCompoent from '../Components/InputCompoent';
//import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/loginScreen'
import {HttpUtils} from "../Services/HttpUtils";

const {height, width} = Dimensions.get("window");

const remote = './images/bg_screen.png';

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: true,
            loader: false
        }
        this.handleUserInput = this.handleUserInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static navigationOptions = ({ navigation }) => {
        return{
        headerTitle:'Login',
        headerStyle: {backgroundColor: 'white'},
        headerTitleStyle: {fontSize: height*0.035, color:'black', textAlign: 'center',flex:1},
        headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            >
            <Text style={{marginLeft:14}}><Icon name="chevron-left" size={20} color="#00000073" /></Text>
        </TouchableOpacity>
    ),
        headerRight:(
            <View>
            </View>
            )
        }
    }

    handleUserInput(val, e ) {
        const name = e;
        const value = val;
        console.log(name)
        console.log(value)
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    async handleSubmit(){
        // this.props.navigation.navigate('DrawerNavigator');
        const { email, password, loader } = this.state;
        if(email && password && !loader) {
            try {
                this.setState({loader: true, formValid: false});
                let obj = {
                    email,
                    password
                };
                let res = await HttpUtils.post('auth', obj);
                if (res.code === 200) {
                    AsyncStorage.setItem('user', JSON.stringify(res.content))
                        .then((response) => {
                            this.setState({loader: false});
                            if(res.content.role == 'user'){
                                this.props.navigation.navigate('DrawerNavigator');                                
                            }else {
                                this.props.navigation.navigate('EmployeesHomeScreen');
                            }
                        });
                }
            } catch {
                console.log('errorrrrrrrrrrr')
            }
        }
    }

    render(){
        const { formErrors } = this.state;
        let error = '';
        if(!!formErrors.email){
            error = 'email' + formErrors.email;
        }else if(!!formErrors.password){
            error = 'password' + formErrors.password;
        }
        return(
            <View style={styles.container}>
                
                <ScrollView>
                    <View>
                        <View style={error.length ? {marginTop:140} : {marginTop: 200}}>
                            {!!error && <Text style={{color:'white',backgroundColor:'blue'}}>{error}</Text>}
                        </View>
                        <View style={styles.inputComponent}>
                            <Item regular>
                                {/*<Icon name="user" size={19} color="white" style={{marginLeft:10}} />*/}
                                <Image source={require('../../assets/Dark/loginuser.png')} style={{width:50,height:50}}></Image>
                                <Input name='email' placeholder='Email' placeholderTextColor='white'
                                       value={this.state.email}
                                       onChangeText={(text) => this.handleUserInput(text, 'email')} style={{color:'white'}} />
                            </Item>
                        </View>
                        <View style={styles.inputComponent}>
                            <Item regular>
                                {/*<Icon name="unlock-alt" size={19} color="white" style={{marginLeft:10}} />*/}
                                <Image source={require('../../assets/Dark/loginpassword.png')} style={{width:50,height:50}}></Image>
                                <Input name='password' placeholder='Password' placeholderTextColor='white' secureTextEntry={true}
                                       value={this.state.password}
                                       onChangeText={(text) => this.handleUserInput(text, 'password')}/>
                            </Item>
                        </View>
                        <View style={{marginTop:25}}></View>
                        <View>
                            <Text style={styles.orStyling}>OR</Text>
                        </View>
                        <View>
                            <Button light style={styles.buttonFacebook}>
                                <Text style={styles.buttonFacebookText}>SIGN WITH FACEBOOK</Text>
                            </Button>
                        </View>
                        {/*<View>
                            <Button warning disabled={!this.state.formValid} style={styles.buttonComponent}
                                    onPress={() => this.handleSubmit()}>
                                {this.state.loader && <ActivityIndicator size="small" color="#00ff00" />}
                                <Text> Login </Text>
                            </Button>
                        </View>
                        <View>
                            <Button primary style={styles.buttonFacebook}>
                                <Text>Facebook</Text>
                            </Button>
                        </View>
                        <Button warning style={styles.buttonNewuser}
                                onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                            <Text>New User</Text>
                        </Button>
                    */}
                    </View>
                </ScrollView>
                <Footer style={{backgroundColor:'white'}} warning disabled={!this.state.formValid} onPress={() => this.handleSubmit()}>
                <Button style={{width:width,height:height*0.1,justifyContent:'center',alignItem:'center'}} disabled={!this.state.formValid} onPress={() => this.handleSubmit()}>
                    <Text style={{marginTop:-15,fontWeight:'bold'}}>Sign In</Text>
                </Button>
                    {this.state.loader && <ActivityIndicator size="small" color="#00ff00" />}
                        
                </Footer>
            </View>
        )
    }
}

export default LoginScreen;


