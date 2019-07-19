import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from "react-native";
import {Container, Content, Card, CardItem, Body,Thumbnail, Grid, Col } from "native-base";
import StarRating from 'react-native-star-rating';
import {HttpUtils} from "../Services/HttpUtils";
import Icon from 'react-native-vector-icons/FontAwesome';
//styles
import styles from './styles/ouerservices';
const {height, width} = Dimensions.get("window");
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

class Employees extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            starCount: 3.5
        };
    }

    onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
    componentDidMount = () =>{
        const data = this.props.navigation.state.params;
        this.setState({data: data.arr, service: data.heading})
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><LogoTitle /></View>,
            headerStyle: {backgroundColor: 'white'},  
            headerRight:(
                <View>
                </View>
            )
        }
    }

    render() {
        const { data, service } = this.state;
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <ScrollView>
                <View>
                <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={{width:width,height:height,position:'relative'}}></Image>
                    <View style={{position:'absolute', backgroundColor: '#ffffff', padding:15, width: width}}>
                        <View>
                            <Text style={styles.mainheadingtext}>Select Artist</Text>
                        </View>
                        <View style={{padding:10}}>
                            <Content>
                                <View style={styles.chosenservice}>
                                        <Text style={{fontWeight:'800', fontSize:18}}>Abc haircut</Text>
                                        <Text style={{fontSize:18}}>Chosen service</Text>
                                </View>
                                <Card style={styles.artistsearchcard}>
                                    <View style={styles.sleftcontainer}>
                                        <Text style={{fontSize: 18}}>Search artists</Text>
                                    </View>
                                    <View style={styles.srightcontainer}>
                                        <Image source={require('../../assets/Dark/698956-icon-111-search-128.png')} style={{width: 30, height: 25,}}>
                                        </Image>
                                    </View>
                                 </Card>
                            </Content>
                            {data && data.map((elem) => {
                            console.log(elem, 'ary bhaiiiiiiiiii')
                            let str = elem.activity.join()
                            return (
                                <View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingNav', {id: elem.emp_id, service, emp_name: elem.name})}>
                                        <Card style={styles.cardbackground}>
                                            <View style={styles.cleftcontainer}>
                                                <Thumbnail  style={{height:120, width:120}}large source={{uri: elem.image}} />
                                            </View>
                                            <View style={styles.crightcontainer}>
                                            <Grid style={{marginBottom:0}}>
                                                <Col style={{flex: 22}}>
                                                    <Text style={{fontSize:22, fontWeight:"bold",}}>{elem.name}
                                                    </Text>
                                                    <Text >{str}</Text>
                                                </Col>
                                                
                                                <Col style={{flex:12}}>
                                                    <Grid>
                                                        <Col style={{width:40}}>
                                                            <Text style={{fontSize:20, fontWeight:"600"}}> 4.5 </Text>
                                                        </Col>
                                                        <Col>
                                                            <View>
                                                                <StarRating style={styles.boxshadow}
                                                                    disabled={false}
                                                                    maxStars={1}
                                                                    starSize={25}
                                                                    fullStarColor={'#F49DC0'}
                                                                    rating={elem.rating}
                                                                />
                                                            </View>
                                                        </Col>
                                                    </Grid>
                                                </Col> 
                                            
                                            </Grid>
                                            
                                            
                                               
                                            </View>

                                        </Card>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                        </View>
                    
                </View>
                </View>
            </ScrollView>
        );
    }
}

export default Employees;

{/*selectedStar={(rating) => this.onStarRatingPress(rating)}*/}
 {/* <View style={{flexDirection:'row'}}>
                                                    <View style={{marginTop:5,flexDirection:'column',marginRight:10}}>
                                                        <Button title="Show Profile" onPress={() => this.props.navigation.navigate('ProfileNav', elem)}></Button>
                                                    </View>
                                                    <View style={{marginTop:5,flexDirection:'column'}}>
                                                        <Button title="Booking Now" onPress={() => this.props.navigation.navigate('BookingNav', {id: elem.emp_id, service, emp_name: elem.name})}></Button>
                                                    </View>
                                                </View> */}
