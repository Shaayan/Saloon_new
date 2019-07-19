import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    StyleSheet, Dimensions,Image,ScrollView,TouchableOpacity, ImageBackground,
} from 'react-native';
import {HttpUtils} from "../Services/HttpUtils";
import {Container, Content, Card, CardItem, Body, Grid, Col, ListItem, List } from "native-base";
import styles from './styles/Dashboardcss';


class LogoTitle extends React.Component {
  static navigationOptions ={
    title: "Dashboard",
  }
  render() {
    return (
      <Image
        source={require('../../assets/Dark/logof-14.png')}
        style={{ width: 120, height: 50 }}
      />
    );
  }
}




class DashboardScreen extends Component {

    static navigationOptions = ({ navigation }) =>{ 
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
                    <View style={{position:'absolute', backgroundColor: '#ffffff', padding:5}}>
                    <View>
                      <Text style={styles.textdash}>Salons Onboard</Text>
                    </View>
                    
                    <Content padder style={{width:width,  padding: 15, marginBottom:-20,}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Deals')}>
                         
                          <ImageBackground source={require('../../assets/Dark/deals.png')}style={{  width: null,
        height: 150, resizeMode: 'cover'}}>
                              <View style={{padding: 35}}>
                                    <View style={{flex:1}} >
                                        <Text style={styles.dashheadingtext}>Deals</Text>
                                        <Text style={styles.dashsubheadtext}>Book the best deals</Text>
                                    </View>
                              </View>
                          </ImageBackground>
                        </TouchableOpacity>
                    </Content>
                    <Content padder style={{width:width, padding: 15, marginBottom:-20}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Services')}>
                          <ImageBackground source={require('../../assets/Dark/services.png')} style={{ resizeMode:'stretch'}}>
                            <View style={{padding: 35}}>
                              <View style={{flex:1}} >
                                  <Text style={styles.dashheadingtext}>Service</Text>
                                  <Text style={styles.dashsubheadtext}>Book services.</Text>
                              </View>
                            </View>
                          </ImageBackground>
                        </TouchableOpacity>
                    </Content>
                    <Content padder style={{width:width, padding: 15}}>
                      <TouchableOpacity onPress={()=> this.props.navigation.navigate('')}>
                        <ImageBackground source={require('../../assets/Dark/price-list.png')} style={{ resizeMode:'stretch'}}>
                            <View style={{padding: 35}}>                       
                              <View style={{flex:1}} >
                                  <Text style={styles.dashheadingtext}>Price list</Text>
                                  <Text style={styles.dashsubheadtext}>View the price list.</Text>
                              </View>                            
                            </View>
                        </ImageBackground>
                      </TouchableOpacity>
                    </Content>
                    <View>
                    </View>
              </View>
            </ScrollView>
      )


}
}

export default DashboardScreen;
