import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    AsyncStorage,
    ScrollView,
    Button
} from "react-native";
import {Container,Header,Left, Body, Right, Title, Content, Card, CardItem,Thumbnail,Tab, Tabs} from "native-base";
import {HttpUtils} from "../Services/HttpUtils";
import Icon from 'react-native-vector-icons/FontAwesome';
const {height, width} = Dimensions.get("window");
import moment from 'moment';

class Tab1 extends React.Component {
	async editJob(val){
		console.log(this.props, 'valllllllll')
		let obj = {
                emp_id: val.emp_id,
                emp_name: val.emp_name,
                user_id: val.user_id,
                name: val.name,
                email: val.email,
                number: val.number,
                date: val.date,
                time: val.time,
                service: val.service,
                status: 'completed',
                obj_id: val._id
            }
		console.log(obj, 'dataaaaaaaaaaa')
		let res = await HttpUtils.post('booking', obj);
        if(res.code === 200){
        	this.props.callMain();
        }
	}

	render(){
		const { data } = this.props;
		console.log(data, 'aaaaaaaaaaaaaaa')
		return(
				<ScrollView>
				{data.length ? data.map((elem) => {
					let date = moment(elem.date, 'YYYY-MM-DD').format('ll').toString();
					let indexOfFirst = date.indexOf(',');
					let res = date.substring(0, indexOfFirst);
					return (
						<View>
							<View style={{flexDirection:'row'}}>
								<View><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginLeft:10,marginTop:10}}>{res + ", " + elem.time.value}</Text></View>
								<View style={{flex: 1}}></View>
								<View style={{marginTop: 10, marginRight: 10}}>
									<Button title="Completed" style={{width: width*0.2}} onPress={() => {this.editJob(elem)}}></Button>
								</View>
							</View>
							<View>
								<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:10}}>{elem.service}</Text>
								<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:6}}>By:{" " + elem.name}</Text>
							</View>
							<View style={{borderWidth:1,borderColor:'#80808052',width:width,marginTop:10}}></View>
						</View>	
					)
				})
				:
				<View style={{justifyContent:'center',alignItems:'center',height:'90%',width:width}}>
					<Image source={require('../../assets/schedule.png')} style={{width:200,height:200}}></Image>
					<Text style={{fontSize:20}}>There is no booking yet!</Text>
				</View>
			}	
			</ScrollView>
		)
	}
}

class Tab2 extends React.Component {
	render(){
		const { data } = this.props;
		console.log(data, 'bbbbbbbbbbbbbb')
		return(
			<ScrollView>
				{data.length ? data.map((elem) => {
					let date = moment(elem.date, 'YYYY-MM-DD').format('ll').toString();
					let indexOfFirst = date.indexOf(',');
					let res = date.substring(0, indexOfFirst);
					return (
						<View>
							<View style={{flexDirection:'row'}}>
								<View><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginLeft:10,marginTop:10}}>{res + ", " + elem.time.value}</Text></View>
																<View style={{flex: 1}}></View>
								<View><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginRight:10,marginTop:10}}>Completed</Text></View>
							</View>
							<View>
								<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:10}}>{elem.service}</Text>
								<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:6}}>By:{" " + elem.name}</Text>
							</View>
							<View style={{borderWidth:1,borderColor:'#80808052',width:width,marginTop:10}}></View>
						</View>	
					)
				})
				:
				<View style={{justifyContent:'center',alignItems:'center',height:'90%',width:width}}>
					<Image source={require('../../assets/schedule.png')} style={{width:200,height:200}}></Image>
					<Text style={{fontSize:20}}>There is no booking yet!</Text>
				</View>
			}	
			</ScrollView>
		)
	}
}

class EmployeesHomeScreen extends Component{
	static navigationOptions = ({ navigation }) => {
        console.log((navigation, 'navigation'))
        return {
            header:null
        }
    }

    constructor(props){
        super(props);
        this.state = {
			scheduleData: [],
			historyData: [],
        }
        this.getAllBooking = this.getAllBooking.bind(this);
    }

    componentDidMount = () =>{
    	this.getAllBooking();
    }

    async getAllBooking(){
    	let res = await HttpUtils.get('getBooking');
    	AsyncStorage.getItem('user')
        .then((response) => {
            let obj = JSON.parse(response);
            let allData = res.content.filter((elem) => elem.emp_id === obj._id)
            let scheduleData = allData.filter((elem) => elem.status === 'process')
            let historyData = allData.filter((elem) => elem.status === 'completed')
            this.setState({scheduleData, historyData})
        })
    }

	render(){
		const { scheduleData, historyData } = this.state;
		return(
			<Container>	
		        <Header style={{backgroundColor:'white'}}>
		          <Left style={{flex: 1}}>
		          	<View></View>
		          </Left>
		          <Body style={{flex: 2}}>
		            <Title style={{color:'black',alignSelf:'center'}}>Bookings</Title>
		          </Body>
		          <Right style={{flex:1}}>
		          	<View></View>
		          </Right>
		        </Header>
				<Tabs>
					<Tab heading="SCHEDULED">
					<Tab1 data={scheduleData} callMain={this.getAllBooking}/>
					</Tab>
					<Tab heading="HISTORY">
				 		<Tab2 data={historyData}/>
					</Tab>
				</Tabs>
			</Container>
		)
	}
}


export default EmployeesHomeScreen;