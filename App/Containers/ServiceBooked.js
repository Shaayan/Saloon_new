import React, { Component } from 'react';
const { height, width } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, ImageBackground, PixelRatio
} from 'react-native';
import { HttpUtils } from "../Services/HttpUtils";
import { Container, Content, Card, CardItem, Body, Grid, Col, ListItem, List, Header, Button, } from "native-base";
import styles from './styles/services';



class LogoTitle extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width;

    // Retrieve initial screen's height
    let screenHeight = Dimensions.get('window').height
    return (
      <Image
        source={require('../../assets/Dark/logof-14.png')}
        style={{ width: 120, height: 50 }}
      />
    );
  }
}


class ServiceBooked extends Component {


  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><LogoTitle /></View>,
      headerStyle: { backgroundColor: 'white' },
      headerLeft: (
        <View style={{ padding: 10 }}>
          <Icon name="bars" size={24} onPress={() => navigation.openDrawer()} />
        </View>
      ),
      headerRight: (
        <View>
        </View>
      )

    }
  }

  render() {

    const {
      navigate
    } = this.props.navigation

    return (
      <ScrollView>
        <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={{ width: width, height: height, }}></Image>
        <View style={{ position: 'absolute', backgroundColor: '#ffffff', padding: 15, width: width, }}>
          <View>
            <Text style={styles.headingService}>Service booked</Text>
          </View>

          <View style={{ padding: 10, color: '#2F4F4F' }}>
            <Card style={styles.servicebackground}>
              <View>
                <Text style={styles.bookedheading}>Abc Haircut</Text>
              </View>
              <View style={styles.rowsetting}>
                <View style={styles.serviceLeft}>
                  <Text style={styles.colorproperty18}>#28787</Text>
                  <Text style={styles.colorproperty14}>Booking Number</Text>
                  <View style={{ borderBottomWidth: 1, marginTop: 20, marginRight: 40, marginBottom: 20, borderBottomColor: '#C0C0C0' }}>
                  </View>
                  <Text style={styles.colorproperty18}>Ayesha K.</Text>
                  <Text style={styles.colorproperty14}>Artist</Text>
                </View>
                <View style={styles.serviceRight}>
                  <Text style={styles.colorproperty18}>15:00, Tuesday, 24th June, 2019</Text>
                  <Text style={styles.colorproperty14}>Booking date</Text>
                  <View style={{ borderBottomWidth: 1, marginRight: 120, marginTop: 20, marginBottom: 20, borderBottomColor: '#C0C0C0' }}>
                  </View>
                  <Text style={styles.colorproperty18}>DHA</Text>
                  <Text style={styles.colorproperty14}>Branch</Text>
                </View>
              </View>
            </Card>
          </View>
          <View style={{ marginTop: 50 }}>
          </View>
          <View style={styles.everythingcenter}>

            <TouchableOpacity style={styles.buttombackground} onPress={() => this.props.navigation.navigate("Dashboard")} >

              <View style={{ flex: 1, }}>

                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 22, color: 'white' }}>Book more services</Text>

              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Dashboard') }}>
              <View style={{ marginTop: 30 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: '#F6ACB9' }}>Return to homescreen</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    )


  }
}

export default ServiceBooked;
