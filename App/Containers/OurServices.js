import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    StyleSheet, Dimensions,Image,ScrollView,TouchableOpacity, ImageBackground
} from 'react-native';
import {HttpUtils} from "../Services/HttpUtils";
import {Container, Content, Card, CardItem, Body, Picker, Form, Header } from "native-base";

//styles

import styles from './styles/ouerservices';


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




class OurServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: undefined
        };
      }
      onValueChange(value) {
        this.setState({
          selected: value
        });
      }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><LogoTitle /></View>,
            headerStyle: {backgroundColor: 'white'},
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Icon name="bars" size={24} onPress={() => navigation.openDrawer()} />
                </View>
            ),
            headerRight:(
                <View>
                </View>
            )

        }
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         services : [],
    //         employees: []
    //     };
    //     this.detailService = this.detailService.bind(this);
    // }

    componentDidMount(){
        this.getServices();
    }

    async getServices(){
        let res = await HttpUtils.get('getServices');
        this.setState({services: res.content});
        this.getEmployees();
    }

    async getEmployees(){
        let res = await HttpUtils.get('getEmployees');
        this.setState({employees: res.content});
    }

    detailService(heading){
        const { services, employees } = this.state;
        let arr = [];
        services.map((elem) => {
            if(elem.heading === heading){
                arr = employees.filter((elem) => elem.activity.includes(heading));
            }
        })
        console.log(arr, 'arrrrrrrrrrr')
        this.props.navigation.navigate('EmployeesNav', {arr, ...{heading}});
    }

	render(){
        const { services } = this.state;
		return(
				<ScrollView>
                    <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={{width:width,height:height,position:'relative'}}></Image>
                    <View style={{position:'absolute', backgroundColor: '#ffffff', padding:5, width: width}}>
                      <View>
                        <Text style={styles.textdash}>Services</Text>
                      </View>
                            {/* <Content style={styles.pickerServices}>
                                <View style={{borderBottomWidth: 1, paddingBottom: 10}}>
                                <Picker
                                mode="dropdown"
                                placeholder="Select your SIM"
                                label="Haircut"
                                iosIcon={<Icon name="arrow-down" />}
                                textStyle={{ color: "#5cb85c" }}
                                itemStyle={{
                                    backgroundColor: "#d3d3d3",
                                    marginLeft: 0,
                                    paddingLeft: 10
                                }}
                                itemTextStyle={{ color: '#788ad2' }}
                                style={{ width: undefined }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                                >
                                <Picker.Item label="Haircut" value="key0" />
                                <Picker.Item label="Wax" value="key1" />
                                <Picker.Item label="Eyebrows" value="key2" />
                                <Picker.Item label="Hands" value="key3" />
                                <Picker.Item label="Face" value="key4" />
                                </Picker>
                                </View>

                                <View style={{borderBottomWidth: 1, paddingBottom: 10}}>
                                <Picker
                                mode="dropdown"
                                placeholder="Select your SIM"
                                iosIcon={<Icon name="arrow-down" />}
                                placeholder="Select your SIM"
                                textStyle={{ color: "#5cb85c" }}
                                itemStyle={{
                                    backgroundColor: "#d3d3d3",
                                    marginLeft: 0,
                                    paddingLeft: 10
                                }}
                                itemTextStyle={{ color: '#788ad2' }}
                                style={{ width: undefined }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="Wax" value="key0" />
                                <Picker.Item label="Wax" value="key1" />
                                <Picker.Item label="Eyebrows" value="key2" />
                                <Picker.Item label="Hands" value="key3" />
                                <Picker.Item label="Face" value="key4" />
                                </Picker>
                                
                                </View>
                                <View style={{borderBottomWidth: 1, paddingBottom: 10}}>
                                <Picker
                                mode="dropdown"
                                placeholder="Select your SIM"
                                iosIcon={<Icon name="arrow-down" />}
                                placeholder="Select your SIM"
                                textStyle={{ color: "#5cb85c" }}
                                itemStyle={{
                                    backgroundColor: "#d3d3d3",
                                    marginLeft: 0,
                                    paddingLeft: 10
                                }}
                                itemTextStyle={{ color: '#788ad2' }}
                                style={{ width: undefined }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                                >
                                <Picker.Item label="Spa" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                                </Picker>
                                </View>

                                <View style={{borderBottomWidth: 1, paddingBottom: 10}}>
                                <Picker
                                mode="dropdown"
                                placeholder="Select your SIM"
                                iosIcon={<Icon name="arrow-down" />}
                                placeholder="Select your SIM"
                                textStyle={{ color: "#5cb85c" }}
                                itemStyle={{
                                    backgroundColor: "#d3d3d3",
                                    marginLeft: 0,
                                    paddingLeft: 10
                                }}
                                itemTextStyle={{ color: '#788ad2' }}
                                style={{ width: undefined }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                                >
                                <Picker.Item label="Facial" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                                </Picker>
                                </View>
                            </Content> */}
                        

					    {services && services.map((elem) => {
                            return (
                                <Content padder style={{width:width, padding: 15}}>
                                    <Card >
                                        <TouchableOpacity style={styles.cardbackground} onPress={()=> this.detailService(elem.heading)}>
                                        <View style={{flex:1}} >
                                            <Image  source={{uri : elem.image}} style={{width:'100%',height:'100%'}}></Image>
                                        </View>
                                        <View style={{flex:2}}>
                                            <ScrollView>
                                            <Text style={{marginLeft:10,fontWeight:'bold',fontSize:16,color:'black'}}>{elem.heading}</Text>
                                            <Text style={{marginLeft:10,flex:2,color:'black'}}>{elem.description}</Text>
                                            </ScrollView>
                                        </View>
                                        </TouchableOpacity>
                                    </Card>
                                </Content>
                            )
                       })
                   }
                    </View>
				</ScrollView>
			)
	}
}

export default OurServices;
