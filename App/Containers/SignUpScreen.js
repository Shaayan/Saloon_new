import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");
import Modal from "react-native-modal";
import { AsyncStorage,Image } from "react-native";
import styles from './styles/signupscreen';

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import MainLogin_backimage from "../Components/mainlogo_backimage";
//import styles from './styles/loginScreen'
import {Input, Item, CheckBox, Body, Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import {HttpUtils} from '../Services/HttpUtils';


class SignUpScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            number: '',
            email: '',
            password: '',
            formErrors: {name: '', number: '' , email: '', password: ''},
            boo:true,
            nameValid: false,
            numberValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false,
            loader: false
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return{
        headerTitle:'',
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
    };

    handleUserInput(val, e ) {
        const name = e;
        const value = val;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let numberValid = this.state.numberValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length >= 6;
                fieldValidationErrors.name = nameValid ? '' : ' is too short';
                break;
            case 'number':
                numberValid = value.length >= 10;
                fieldValidationErrors.number = numberValid ? '': ' is too short';
                break;
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
            nameValid: nameValid,
            numberValid: numberValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.numberValid && this.state.emailValid && this.state.passwordValid});
    }

    async handleSubmit(){
        const { name, number, email, password, loader } = this.state;
        if(!loader) {
            try {
                this.setState({loader: true, formValid: false});
                let obj = {
                    name,
                    number: 0 + number,
                    email,
                    password,
                    role: 'user'
                };
                let res = await HttpUtils.post('users', obj);
                if (res.code === 200) {
                    AsyncStorage.setItem('user', JSON.stringify(res.content))
                        .then((response) => {
                            this.props.navigation.navigate('DrawerNavigator');
                        })
                }
            } catch {
                console.log('errorrrrrrrrrrr')
            }
        }
    }

    render(){
        const { formErrors } = this.state;
        let error = '';
        if(!!formErrors.name){
            error = 'name' + formErrors.name;
        }else if(!!formErrors.number){
            error = 'number' + formErrors.number;
        }else if(!!formErrors.email){
            error = 'email' + formErrors.email;
        }else if(!!formErrors.password){
            error = 'password' + formErrors.password;
        }
        return(
            <View style={styles.container}>
            
            <ScrollView>
            <View style={{backgroundColor:'white',marginTop: height*0.08,width:width*0.9,height:height*0.7,marginLeft:20}}>
                <View style={styles.signupheadingview}>
                    <Text style={styles.signupheadeing}>Sign up</Text>
                </View>
                <View style={error.length ? {marginTop:130} : {marginTop: 20}}>
                    {!!error && <Text>{error}</Text>}
                </View>
                <View style={styles.inputComponent}>
                    <Item regular>
                        <Input placeholder='Name'
                               value={this.state.name}
                               onChangeText={(text) => this.handleUserInput(text, 'name')}/>
                        <Image source={require('../../assets/Dark/signup/name.png')} style={{width:50,height:50}}></Image>       
                    </Item>
                </View>
                <View style={styles.inputComponent}>
                    <Item regular>
                        
                        <Text style={{marginLeft:10,color:'gray'}}>+92 |</Text>
                        <Input placeholder='Number'
                               value={this.state.number}
                               onChangeText={(text) => this.handleUserInput(text, 'number')}/>
                        <Icon name="phone" size={19} color="#900" style={{marginRight:10,color:'black'}} />
                    </Item>
                </View>
                <View style={styles.inputComponent}>
                    <Item regular>
                        
                        <Input name='email' placeholder='Email'
                               value={this.state.email}
                               onChangeText={(text) => this.handleUserInput(text, 'email')} />
                         <Icon name="envelope" size={19} color="#900" style={{marginRight:10,color:'black'}} />      
                    </Item>
                </View>
                <View style={styles.inputComponent}>
                    <Item regular>
                        
                        <Input name='password' placeholder='Password'
                               value={this.state.password}
                               secureTextEntry={true}
                               onChangeText={(text) => this.handleUserInput(text, 'password')}/>
                               <Icon name="unlock-alt" size={19} color="black" style={{marginRight:10}} />
                    </Item>
                </View>
                <View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center',marginTop:20}}>
                    <View style={{}}>
                        {this.state.boo && <Icon name="check-square" size={19} color="black" style={{marginLeft:10}} onPress={() => {this.setState({boo: false})}} />}
                        {this.state.boo === false && <CheckBox checked={false} onPress={() => {this.setState({boo: true})}} style={{marginLeft:10}} />}
                    </View>
                    <View>
                        <Text onPress={() => this.props.navigation.navigate('TermCondition')} style={{marginLeft:10}}>I agree to saloon <Text style={{color:'#27AAE1'}}>Term & condition</Text></Text>
                    </View>
                </View>
                <View>
                    <Button style={styles.buttonSignup} disabled={!(this.state.formValid && this.state.boo) }>
                        {this.state.loader && <ActivityIndicator size="small" color="#00ff00" />}
                        <Text style={{color:'white'}} onPress={() => this.handleSubmit()}>Sign Up</Text>
                    </Button>
                </View>
            </View>
            </ScrollView>
            <View>
                <Text style={styles.backlogintext} onPress={() => this.props.navigation.navigate('LoginScreen')}>you already have a <Text style={{color:'gray'}}>login?</Text></Text>
            </View>
            </View>
        )
    }
}

export default SignUpScreen;
