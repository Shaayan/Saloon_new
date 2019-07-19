import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    AsyncStorage
} from "react-native";
import {Container, Content, Card, CardItem, Body, Grid, Col, ListItem, List, Header,  } from "native-base";
const {height, width} = Dimensions.get("window");
import styles from './styles/bookingStyles';
import { Item, Input } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { Calendar } from 'react-native-calendars';
import ModalView from '../Components/ModalView';
import moment from 'moment';
import _ from 'underscore';
import {HttpUtils} from '../Services/HttpUtils';

const _format = 'YYYY-MM-DD';
const _today = moment().format(_format);
const _maxDate = moment().add(15, 'days').format(_format);
const initialState = {
          [_today]: {disabled: true, disableTouchEvent: true},
          '2018-11-16': {disabled: true, disableTouchEvent: true},
          '2018-11-12': {disabled: true, disableTouchEvent: true},
          '2018-11-19': {disabled: true, disableTouchEvent: true},
      }

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

class Booking extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNo: '',
            yesOrNo: ['Yes', 'No'],
            yesNoValue: '',
            modal: false,
            modal2: false,
            _markedDates: initialState,
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
            tempSelected: {},
            tempDate: {},
            subButton : false
        }
        this.onDayPress = this.onDayPress.bind(this);
        this.submitJob = this.submitJob.bind(this);
    }

    componentDidMount = () =>{
        let data = this.props.navigation.state.params;
        this.getData(data.id)
        this.setState({emp_id: data.id, service: data.service, emp_name: data.emp_name})
    }

    getData(emp_id){
        AsyncStorage.getItem('user')
        .then((response) => {
            let obj = JSON.parse(response);
            this.setState({
                name: obj.name,
                email:obj.email,
                phoneNo: obj.number,
                user_id: obj._id,
                emp_id
            })
            this.getAllBooking(emp_id);
        })
    }

    async getAllBooking(emp_id){
        let res = await HttpUtils.get('getBooking');
        let allData = res.content.filter((elem) => elem.emp_id === emp_id)
        this.setState({timeData: allData})
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

    async submitJob(){
        const { name, email, phoneNo, tempDate, tempSelected, emp_id, user_id, service, emp_name } = this.state;
        if(Object.keys(tempSelected).length > 0){
            let obj = {
                emp_id,
                emp_name,
                user_id,
                name,
                email,
                number: phoneNo,
                date: Object.keys(tempDate)[0],
                time: tempSelected,
                service,
                obj_id: ''
            }
            let res = await HttpUtils.post('booking', obj);
            if(res.code === 200){
                this.closeModal();
                this.props.navigation.navigate('YourBooking');
            }
        }
    }

    openCalender(){
        const { _markedDates } = this.state;
        // return (
        //     // <View>
        //     //     <Calendar 
        //     //         onDayPress={this.onDayPress}
        //     //         minDate={_today}
        //     //         maxDate={_maxDate}
        //     //         firstDay={1}
        //     //         hideDayNames={false}
        //     //         markingType={'period'}
        //     //         markedDates={_markedDates}
        //     //         // theme={{
        //     //         //     calendarBackground: 'white',
        //     //         //     textSectionTitleColor: 'white',
        //     //         //     dayTextColor: 'black',
        //     //         //     todayTextColor: '#333248',
        //     //         //     selectedDayTextColor: '#333248',
        //     //         //     monthTextColor: '#333248',
        //     //         //     selectedDayBackgroundColor: 'black',
        //     //         //     arrowColor: '#333248',
        //     //         //     // textDisabledColor: 'gray',
        //     //         //     'stylesheet.calendar.header': {
        //     //         //       week: {
        //     //         //         marginTop: 5,
        //     //         //         flexDirection: 'row',
        //     //         //         justifyContent: 'space-between'
        //     //         //       }
        //     //         //     }
        //     //         //   }}
        //     //         style={styles.calendarStyle}/>
        //     //     <TouchableOpacity onPress={this.closeModal.bind(this)}>
        //     //         <Text style={{fontSize: 30, color: 'white'}}>X</Text>
        //     //     </TouchableOpacity>
        //     // </View>
        // )
    }

    closeModal(){
        this.setState({modal: false, modal2: false})
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

    render() {
        const { modal, modal2, _markedDates } = this.state;
        console.log(this.prop)
        return (
            <View>
            <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={styles.mainImage}></Image>
            <View style={styles.overlay}>
                <View>
                    <Text style={styles.timedash}>Select time slot</Text>
                    </View>
                
                <Content style={{padding:25}}>
                <View style={styles.timeslot}>
                    <View style={{paddingRight: 60,borderRightWidth: 1}}>
                        <Text style={styles.slotHeading}>Abc haircut</Text>
                        <Text style={{fontSize:18}}>Chosen e</Text>
                    </View> 
                    <View>
                        <Text style={styles.slotHeading}>Ayesha Khalid</Text>
                        <Text style={{fontSize: 18}}>Chosen artist</Text>
                    </View>                          
                </View>
                </Content>
                {/* <View style={styles.inputView}>
                    <Input name='email' placeholder='Name' placeholderTextColor='white'
                        value={this.state.name}
                        editable={false}
                        underlineColorAndroid={'white'}
                        style={styles.inputStyle}
                        onChangeText={(text) => {this.setState({name: text})}} />
                </View>
                <View  style={styles.inputView}>            
                    <Input name='email' placeholder='Phone Number' placeholderTextColor='white'
                        value={this.state.phoneNo}
                        editable={false}
                        keyboardType = 'numeric'
                        underlineColorAndroid={'white'}
                        style={styles.inputStyle}
                        onChangeText={(text) => {this.setState({phoneNo: text})}} />
                </View>
                <View style={styles.inputView}>    
                    <Input name='email' placeholder='Email' placeholderTextColor='white'
                        value={this.state.email}
                        editable={false}
                        underlineColorAndroid={'white'}
                        style={styles.inputStyle}
                        onChangeText={(text) => {this.setState({email: text})}} />
                </View> */}
                {/* <View style={styles.pickerView}>
                    <RNPickerSelect
                        placeholder={{
                            label: '- CHOOSE SERVICE -',
                            value: '',
                            key: ''
                        }}
                        items={this.state.yesOrNo.map((el)=>{
                            return {label: el, value: el}
                        })}
                        onValueChange={(value) => {
                            this.setState({yesNoValue: value});
                        }}
                        value={this.state.yesNoValue}
                        hideIcon={true}
                        style={pickerStyle}
                    />
                </View>  
                <View style={styles.pickerView}>
                    <RNPickerSelect
                        placeholder={{
                            label: '- CHOOSE BRANCHES -',
                            value: '',
                            key: ''
                        }}
                        items={this.state.yesOrNo.map((el)=>{
                            return {label: el, value: el}
                        })}
                        onValueChange={(value) => {
                            this.setState({yesNoValue: value});
                        }}
                        value={this.state.yesNoValue}
                        hideIcon={true}
                        style={pickerStyle}
                    />
                </View> */}
                <Content style={{alignContent: 'center', marginTop: -100}}>
                <View 
                >
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
                {/* <TouchableOpacity style={styles.scheduleView} onPress={() => {this.setState({modal: true})}}>
                    <View>
                        <Text style={styles.scheduleViewText}>- Select Date & Time -</Text>
                    </View>  
                </TouchableOpacity>  */}
                
                {/* {this.state.modal && <View>
                    <ModalView modalContent = {this.openCalender.bind(this)}/>
                </View>} */}
                {this.state.modal2 && <View>
                    <ModalView modalContent = {this.openTimer.bind(this)}/>
                </View>}           
                <View style={{flex: 5}}></View>
                </Content>
            </View>    
            
            </View>
        );
    }
}

export default Booking;

const pickerStyle = {
    flex: 1,
    placeholderColor: 'white',
    inputAndroid: {
        color: 'white',
    },
    underline: { borderTopWidth: 0 },
    alignItems: 'center'
}

Booking.navigationOptions = ({ navigation }) => ({
    headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><LogoTitle /></View>,
    headerStyle: {backgroundColor: 'white'},  
    headerRight:(
        <View>
        </View>
    )
});
