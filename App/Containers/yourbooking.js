import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    FlatList,
    AsyncStorage
} from "react-native";
const {height, width} = Dimensions.get("window");
import StarRating from 'react-native-star-rating';
import Timeline from 'react-native-timeline-listview'
import {Container, Content, Card, CardItem, Body,Thumbnail,Tab, Tabs, Left } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './styles/yourbooking';
import {HttpUtils} from "../Services/HttpUtils";
import moment from 'moment';
import _ from 'underscore';
import ModalView from '../Components/ModalView';
import { Calendar } from 'react-native-calendars';

const _format = 'YYYY-MM-DD';
const _today = moment().format(_format);
const _maxDate = moment().add(15, 'days').format(_format);

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

class Tab1 extends React.Component {
	constructor(props){
        super(props);
        this.state = {
     		modal :false,
     		modal2: false,
     		_markedDates: {
     			[_today]: {disabled: true, disableTouchEvent: true},
     		},
            allTime : [  
                {id: '1', value: '11:00 AM', available: true},
                {id: '2', value: '11:30 AM', available: true},
                {id: '3', value: '12:00 PM', available: true},
                {id: '4', value: '12:30 PM', available: true},
                {id: '5', value: '1:00 PM', available: true},
                {id: '6', value: '1:30 PM', available: true},
                {id: '7', value: '2:00 PM', available: true},
                {id: '8', value: '2:30 PM', available: true},
                {id: '9', value: '3:00 PM', available: true},
                {id: '10', value: '3:30 PM', available: true},
                {id: '11', value: '4:00 PM', available: true},
                {id: '12', value: '4:30 PM', available: true},
                {id: '13', value: '5:00 PM', available: true},
                {id: '14', value: '5:30 PM', available: true},
                {id: '15', value: '6:00 PM', available: true},
                {id: '16', value: '6:30 PM', available: true},
                {id: '17', value: '7:00 PM', available: true},
                {id: '18', value: '7:30 PM', available: true},
                {id: '19', value: '8:00 PM', available: true},
                {id: '20', value: '8:30 PM', available: true},
                {id: '21', value: '9:00 PM', available: true},
            ],
            subButton : false,
            tempDate: {},
            tempSelected: {}
        }
        this.onDayPress = this.onDayPress.bind(this);
        this.submitJob = this.submitJob.bind(this);
    }

	detailRender(elem){
		let show = true;
		let date = moment(elem.date, 'YYYY-MM-DD').format('ll').toString();
		let indexOfFirst = date.indexOf(',');
		let res = date.substring(0, indexOfFirst);
		let dataDate = moment(elem.date, 'YYYY-MM-DD').subtract(1, 'days').format('YYYY-MM-DD');
        console.log(dataDate, 'llllllllll')
		let todayDate = elem.date;
		console.log(todayDate, '1111111111')
		let today = moment().format('YYYY-MM-DD');
		console.log(today, '222222222')
		let now = moment().format('LT');
		let time = elem.time.value;
		if(dataDate === today && now > time){
			show = false
		}else if(today === todayDate && today > todayDate){
			show = false
		}
		return {res, show}
	}

	editJob(val){
		this.setState({modal: true, selectedData: val})
		this.getAllBooking(val.emp_id);
	}

	async getAllBooking(emp_id){
        let res = await HttpUtils.get('getBooking');
        let allData = res.content.filter((elem) => elem.emp_id === emp_id)
        this.setState({timeData: allData})
    }

	openCalender(){
        const { _markedDates } = this.state;
        return (
            <View style={styles.modalMain}>
                <Calendar 
                    onDayPress={this.onDayPress}
                    minDate={_today}
                    maxDate={_maxDate}
                    firstDay={1}
                    hideDayNames={false}
                    markingType={'period'}
                    markedDates={_markedDates}
                    style={styles.calendarStyle}/>
                <TouchableOpacity onPress={this.closeModal.bind(this)}>
                    <Text style={{fontSize: 30, color: 'white'}}>X</Text>
                </TouchableOpacity>
            </View>
        )
    }

    onDayPress(day) {
        let { _markedDates, tempDate } = this.state;
        const _selectedDay = moment(day.dateString).format(_format);
        let str = Object.keys(tempDate)[0];
        if(_markedDates[_selectedDay] === undefined || _markedDates[_selectedDay].disable === false || _markedDates[_selectedDay].marked === false){
            if(Object.keys(tempDate).length > 0 && !Object.keys(_markedDates).includes(_selectedDay)){
                _markedDates = _.omit(_markedDates, str)
                this.sortingDates(_markedDates, _selectedDay)
            }else {
                this.sortingDates(_markedDates, _selectedDay)
            }
        }  
    }

    sortingDates(_markedDates, _selectedDay){
        const { timeData, allTime } = this.state;
        let marked = true;
        if (_markedDates[_selectedDay]) {
            marked = !_markedDates[_selectedDay].marked;
        }
      
        const updatedMarkedDates = marked ? {..._markedDates, ...{ [_selectedDay]: { marked, startingDay: true, color: 'blue', endingDay: true, disable: false } } } : {..._markedDates, ...{ [_selectedDay]: { marked, disable: false } } }
        let tempDate = marked ? { [_selectedDay]: { marked, startingDay: true, color: 'blue', endingDay: true, disable: false } } : { [_selectedDay]: { marked, disable: false } };
        
        let date = Object.keys(tempDate)[0];
        let exactTimeData = timeData && timeData.filter((elem) => date === elem.date)
        let dateTimeData = [];
        exactTimeData.map((elem) =>{
            if(date === elem.date){
                dateTimeData.push(elem.time && elem.time.id)
            }
        })
        let arr = []
        arr = allTime.map((val) => {
            if(dateTimeData.includes(val.id)){
                return {id: val.id, value: val.value, available: false}
            }
            return val
        })
        arr = arr.length ? arr : allTime;
        if(marked){
            this.closeModal();
            this.setState({ modal2: true });
        }
        this.setState({ _markedDates: updatedMarkedDates, tempDate, data: arr })
    }

    closeModal(){
        this.setState({modal: false, modal2: false, tempDate: {}, tempSelected: {}})
    }

    openTimer(){
        const { data, subButton } = this.state;
        const numColumns = 3;
        return(
            <View style={styles.modalMain}>
                    <View style={{width: width, flex: 1}}></View>
                <View style={{width: width*0.8, flex: 4, flexDirection: 'column'}}>
                    <View style={{width: width*0.8, flex: 0.8, backgroundColor: 'white', flexDirection: 'row'}}>
                        <View style={{width: width*0.1}}></View>
                        <View style={{width: width*0.6, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 28}}>Select Time</Text>
                        </View>
                        <View style={{width: width*0.1, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={this.closeModal.bind(this)}>
                                <Text style={{fontSize: 22, color: 'black'}}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: width*0.8, flex: 4}}>
                        <FlatList 
                            data={data}
                            renderItem={({item}) => (
                                <TouchableOpacity style={item.selected && item.selected ? styles.selectedItemContainer : styles.itemContainer} onPress={this.onDatePress.bind(this, item)}>
                                    <Text style={!item.available ? styles.selectedItem : styles.item}>{item.value}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.id}
                            numColumns={numColumns} />
                        </View>
                </View>
                    <TouchableOpacity style={{width: width*0.6, flex: 1, justifyContent: 'center'}}>
                        <Button light disabled={!subButton} title="Submit" style={{width: width*0.6, alignSelf: 'center'}} onPress={() => {this.submitJob()}}></Button>
                    </TouchableOpacity>
            </View>
        )
    }

    onDatePress(val){
        let { tempSelected, data } = this.state;
        if(val.available){
            if(Object.keys(tempSelected).length > 0){
                data = data.map((elem) => {
                    if(elem.id === tempSelected.id){
                        return {
                            id: elem.id,
                            value: elem.value,
                            available: true,
                            selected: false
                        }
                    }
                    if(elem.id === val.id){
                        return {
                            id: elem.id,
                            value: elem.value,
                            available: false,
                            selected: true
                        }
                    }
                    return elem
                })
            }else{
                data = data.map((elem) => {
                    if(elem.id === val.id){
                        return {
                            id: elem.id,
                            value: elem.value,
                            available: false,
                            selected: true
                        }
                    }
                    return elem
                })
            }
            tempSelected = {
                id: val.id,
                value: val.value,
                available: false,
            }
            this.setState({tempSelected, data, subButton: true})
        }else {
            if(tempSelected.id === val.id){
                data = data.map((elem) => {
                if(elem.id === val.id){
                    return {
                        id: elem.id,
                        value: elem.value,
                        available: true,
                        selected: false
                    }
                }
                return elem
            }) 
            this.setState({data, tempSelected: {}, subButton: false})             
            }
        }
    }

    async submitJob(){
        const { selectedData, tempDate, tempSelected } = this.state;
        if(Object.keys(tempSelected).length > 0){
            let obj = {
                emp_id: selectedData.emp_id,
                emp_name: selectedData.emp_name,
                user_id: selectedData.user_id,
                name: selectedData.name,
                email: selectedData.email,
                number: selectedData.number,
                date: Object.keys(tempDate)[0],
                time: tempSelected,
                service: selectedData.service,
                status: 'process',
                obj_id: selectedData._id
            }
            let res = await HttpUtils.post('booking', obj);
            if(res.code === 200){
            	this.props.callMain();
                this.closeModal();
            }
        }
    }

	render(){
		const { data } = this.props;
		return(
			<ScrollView>
				{data.length ? data.map((elem) => {
					let dis = this.detailRender(elem);
					return (
						<View>
							<View style={{flexDirection:'row'}}>
								<View><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginLeft:10,marginTop:10}}>{dis.res + ", " + elem.time.value}</Text></View>
								<View style={{flex: 1}}></View>
								{dis.show && <View style={{marginTop: 10, marginRight: 10}}>
									<Button title="Submit" style={{width: width*0.2}} onPress={() => {this.editJob(elem)}}></Button>
								</View>}
							</View>
							<View>
								<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:10}}>{elem.service}</Text>
								<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:6}}>By:{" " + elem.emp_name}</Text>
							</View>
							<View style={{borderWidth:1,borderColor:'#80808052',width:width,marginTop:10}}></View>
						</View>	
					)
				})
                :
                <View style={{padding:10}}>
                    <View style={{padding: 15}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#808080'}}>My Booking
                        </Text>
                    </View>
                    <Content padder>
                        <Card style={styles.bookingCard}>
                            <View>
                                <Text style={styles.bookingheading}>Abc Haircut</Text>
                            </View>

                            <View style={styles.rowbooking}>
                                <View style={{ width: 130}}>
                                    <Text  style={styles.bookingnumndate}>#28787</Text>
                                    <Text style={styles.subbooking}>Booking Number</Text>
                                    <View style={{borderBottomWidth: 1, marginTop: 20, marginRight: 30, borderBottomColor: '#A9A9A9'}}>
                                    </View>
                                </View>

                                <View style={{nnnborderBottomWidth: 1, paddingBottom: 30}}>
                                    <Text  style={styles.bookingnumndate}>15:00, Tuesday, 24th June, 2019</Text>
                                    <Text style={styles.subbooking}>Booking date</Text>
                                    <View style={{borderBottomWidth: 1, marginRight: 120, marginTop: 20, borderBottomColor: '#A9A9A9'}}>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.rowbooking}>
                                <View style={{ width: 130}}>
                                <Text  style={styles.bookingnumndate}>Ayesha K.</Text>
                                <Text style={styles.subbooking}>Artist</Text>
                                </View>
                                
                                <View>
                                <Text  style={styles.bookingnumndate}>DHA</Text>
                                <Text style={styles.subbooking}>Branch</Text>
                                </View>
                            </View>

                            <View style={styles.everythingbooking}>
                            
                            <TouchableOpacity style={styles.bookingbuttons}>                
                                <View style={{flex:1,}}>
                                    
                                    <Text style={{textAlign: 'center',fontWeight:'bold',fontSize:22,color:'white'}}>Book more services</Text>
                                    
                                </View>
                            </TouchableOpacity>
                                        
                            </View>
                        </Card>
                    </Content>
                </View>
				// <View style={{justifyContent:'center',alignItems:'center',height:'90%',width:width}}>
				// 	<Image source={require('../../assets/schedule.png')} style={{width:200,height:200}}></Image>
				// 	<Text style={{fontSize:20}}>There is no booking yet!</Text>
				// </View>
			}	
			{this.state.modal && <View>
                <ModalView modalContent = {this.openCalender.bind(this)}/>
            </View>}
            {this.state.modal2 && <View>
                <ModalView modalContent = {this.openTimer.bind(this)}/>
            </View>}
			</ScrollView>
		)
	}
}

class Tab2 extends React.Component {

	render(){
		const { data } = this.props;
        console.log(data, 'datsaaaasasaaaaassssssssss')
		return(
			<View>
				{data.length ? data.map((elem) => {
					let date = moment(elem.date, 'YYYY-MM-DD').format('ll').toString();
					let indexOfFirst = date.indexOf(',');
					let res = date.substring(0, indexOfFirst);
					return (
						<View>
                            <View>
								<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:10}}>Abc haircut</Text>
								<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:6}}>Ayesha K.</Text>
							</View>
							<View style={{borderWidth:1,borderColor:'#80808052',width:width,marginTop:10}}></View>
							<View style={{flexDirection:'row'}}>
								<View><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginLeft:10,marginTop:10}}>15: 00, Tuesday, 24th June,</Text></View>
								<View style={{flex: 1}}></View>
								<View><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginRight:10,marginTop:10}}>Completed</Text></View>
							</View>
							
						</View>	
					)
				})
				:
                <View
                 style={{justifyContent:'center',height:'90%',width:width, padding:10}}>
					{/* <Image source={require('../../assets/schedule.png')} style={{width:200,height:200}}></Image> */}
					{/* <Text style={{fontSize:20}}>There is no booking yet!</Text> */}
                    <View style={{padding: 15}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#808080'}}>My Booking
                        </Text>
                    </View>
                    <Content padder>
                        <Card style={styles.bookingCard}>
                            <View>
                                <Text style={styles.bookingheading}>Abc Haircut</Text>
                            </View>
                            <View style={styles.rowbooking}>
                                <View style={{ width: 130}}>
                                    <Text  style={styles.bookingnumndate}>#28787</Text>
                                    <Text style={styles.subbooking}>Booking Number</Text>
                                    <View style={{borderBottomWidth: 1, marginTop: 20, marginRight: 30, borderBottomColor: '#A9A9A9'}}>
                                    </View>
                                </View>
                                <View style={{nnnborderBottomWidth: 1, paddingBottom: 30}}>
                                    <Text  style={styles.bookingnumndate}>15:00, Tuesday, 24th June, 2019</Text>
                                    <Text style={styles.subbooking}>Booking date</Text>
                                    <View style={{borderBottomWidth: 1, marginRight: 120, marginTop: 20, borderBottomColor: '#A9A9A9'}}>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rowbooking}>
                                <View style={{ width: 130}}>
                                   <Text  style={styles.bookingnumndate}>Ayesha K.</Text>
                                    <Text style={styles.subbooking}>Artist</Text>
                                </View>
                                <View>
                                    <Text  style={styles.bookingnumndate}>DHA</Text>
                                    <Text style={styles.subbooking}>Branch</Text>
                                </View>
                            </View>
                        </Card>
                    </Content>
				</View>
			}	
			</View>
		)
	}
}

class Tab3 extends React.Component {
	render(){
		return(
				<Text>Tabs1</Text>
			)
	}
}

class Yourbooking extends React.Component {
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
            console.log(response, 'responseeeeeeee')
            let allData = res.content.filter((elem) => elem.user_id === obj._id)
            let scheduleData = allData.filter((elem) => elem.status === 'process')
            let historyData = allData.filter((elem) => elem.status === 'completed')
            // historyData = historyData ? historyData  : []
            console.log(scheduleData, 'sssssssssssssssssssss')
            console.log(historyData, 'hhhhhhhhhhhhhhh')
            this.setState({scheduleData})
        })
    }

	render(){
		const { scheduleData, historyData } = this.state;
        console.log(scheduleData, 'sssssssssssssssssssss22222222')
        console.log(historyData, 'hhhhhhhhhhhhhhh3333333333') 
		return(
			<Container>
			<Tabs>
  				<Tab heading="SCHEDULED">
    				<Tab1  data={scheduleData} callMain={this.getAllBooking}/>
  				</Tab>
  				<Tab heading="HISTORY">
   			 		<Tab2 data={historyData}/>
  				</Tab>
			</Tabs>
			</Container>
		)
	}
}

export default Yourbooking;

Yourbooking.navigationOptions = ({ navigation }) => ({
    headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={{color:'black'}}>YOUR Bookings</Text></View>,
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
});

