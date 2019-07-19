import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    StyleSheet, Dimensions,Image,ScrollView,TouchableOpacity, ImageBackground,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import {HttpUtils} from "../Services/HttpUtils";
import {Container, Content, Card, CardItem, Body,Thumbnail, Grid, Col } from "native-base";
import styles from './styles/artistservices';


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




class ArtistScreen extends Component {
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

    render(){
  		return(
            <ScrollView>
                    <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={{width:width,height:height,position:'relative'}}></Image>
                    <View style={{position:'absolute', backgroundColor: '#ffffff', padding:15, width:width}}>
                        <View>
                            <Text style={styles.artistheadingtext}>Service booked</Text>
                        </View>
                        <View style={{padding: 10}}> 
                            <Card style={styles.artistsearch}>
                                <View style={styles.searchleftcontainer}>
                                    <Text style={{fontSize: 18}}>Search artists</Text>
                                </View>
                                <View style={styles.searchrightcontainer}>
                                    <Image source={require('../../assets/Dark/698956-icon-111-search-128.png')} style={{width: 30, height: 25,}}>
                                    </Image>
                                </View>  
                            </Card>
                        
                                <View>
                                    <Card style={styles.artistbackground}>
                                        <View style={styles.leftcontainer}>
                                            <Thumbnail style={{height:120, width:120}}large source={require('../../assets/Dark/profile1.jpg')} />
                                        </View>

                                        <View style={styles.rightcontainer}>
                                            <Grid style={{marginBottom:0}}>
                                                <Col style={{flex: 20}}>
                                                    <Text style={{fontSize:20}} >Ayesha k.</Text>
                                                    <View>
                                                        <Text>Hello Hil eveyrtguhubjxjb jhjdsguhgfd hdsj dskjisjihsdjjhsjhbsd dshjksdhkjsdbjsdbjhk</Text>
                                                    </View>
                                                </Col>
                                                
                                                <Col style={{flex: 15}}>
                                                    <Grid>
                                                        <Col style={{width: 40}}>
                                                            <Text style={{fontSize:20, fontWeight:"600"}}> 4.5 </Text>
                                                        </Col>
                                                        <Col>
                                                            <View>
                                                                <StarRating style={styles.artistboxshadow}
                                                                    disabled={false}
                                                                    maxStars={1}
                                                                    starSize={25}
                                                                    fullStarColor={'#F49DC0'}
                                                                    rating={5}
                                                                />
                                                            </View>
                                                        </Col>
                                                    </Grid>
                                                </Col> 
                                            </Grid>  
                                        </View>
                                    </Card>

                                    <Card style={styles.artistbackground}>
                                        <View style={styles.leftcontainer}>
                                         <Thumbnail style={{height:120, width:120}}large source={require('../../assets/Dark/profile1.jpg')} />
                                        </View>

                                        <View style={styles.rightcontainer}>
                                        <Grid style={{marginBottom:0}}>
                                                <Col style={{flex: 25}}>
                                                    <Text style={{fontSize:20}} >Ayesha k.</Text>
                                                    <View>
                                                        <Text>Hello Hil eveyrtguhubjxjb jhjdsguhgfd hdsj dskjisjihsdjjhsjhbsd dshjksdhkjsdbjsdbjhk</Text>
                                                    </View>
                                                </Col>
                                                
                                                <Col style={{flex: 12}}>
                                                    <Grid>
                                                        <Col style={{width: 40}}>
                                                            <Text style={{fontSize:20, fontWeight:"600"}}> 4.5 </Text>
                                                        </Col>
                                                        <Col>
                                                            <View>
                                                                <StarRating style={styles.artistboxshadow}
                                                                    disabled={false}
                                                                    maxStars={1}
                                                                    starSize={25}
                                                                    fullStarColor={'#F49DC0'}
                                                                    rating={5}
                                                                />
                                                            </View>
                                                        </Col>
                                                    </Grid>
                                                </Col> 
                                            </Grid>
                                            
                                        </View>
                                    </Card>

                                </View>
                        </View>

                    </View>
            </ScrollView>
      )


}
}

export default ArtistScreen;
