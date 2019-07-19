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
import styles from './styles/dealservices';


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




class DealsAvailable extends Component {

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
                    <View style={{position:'absolute', backgroundColor: '#ffffff', padding:5}}>
                      <View>
                        <Text style={styles.textdash}>Deals Available</Text>
                      </View>
                      <Content padder style={{width:width, padding: 15, marginBottom:-20}}>
                          <Card  style={styles.dealsdash}>
                            <ImageBackground source={'../../assets/Dark/price-list.png'} resizeMode='cover'   style={styles.imgBackground}>
                                    <TouchableOpacity onPress={()=> this.detailService(elem.heading)}>
                                      <View style={{flex:1}} >
                                        <Grid>
                                          <Col>
                                          <Text style={styles.dealsheading}>Get 5 for 1000</Text>
                                          </Col>
                                          <Col>
                                            <Text style={{color:'#F199C1', fontSize: 20, fontWeight: '600', marginLeft: 90}}> Book now </Text>
                                          </Col>
                                        </Grid>
                                          <Text style={styles.dealssubhead}> Get these five services and save Rs.800.</Text>
                                          <List>
                                              
                                                <Text  style={styles.listitems}>1. Facial cleansing</Text>
                                                <Text  style={styles.listitems}>2. Hands treatment</Text>
                                                <Text  style={styles.listitems}>3. Feet treatment</Text>
                                                <Text  style={styles.listitems}>4. Hair setting</Text>
                                                <Text  style={styles.listitems}>5. Facial cleansing</Text>

                                            <View style={{borderBottomColor:'#C0C0C0', borderBottomWidth:1, marginTop: 10, marginBottom: 10}}></View>
                                              <Grid>
                                                <Col><Text style={styles.dealssubhead}>May 04, 2019</Text>
                                                      <Text style={styles.offervalid}> Offer valid till</Text>
                                                </Col>
                                                <Col><Text style={styles.dealssubhead}>Rs. 1000</Text>
                                                  <Text style={styles.offervalid}> Price</Text>
                                                </Col>
                                              </Grid>
                                          </List>
                                          <View style={{boderBottomWidth: 1, borderBottomColor: 'black'}}>
                                          </View>
                                      </View>
                                    </TouchableOpacity>
                            </ImageBackground>
                          </Card>
                      </Content>
                      <Content padder style={{width:width, padding: 15, marginBottom:-20}}>
                          <Card  style={styles.dealsdash}>
                            <ImageBackground source={'../../assets/Dark/price-list.png'} resizeMode='cover'   style={styles.imgBackground}>
                                    <TouchableOpacity onPress={()=> this.detailService(elem.heading)}>
                                      <View style={{flex:1}} >
                                        <Grid>
                                          <Col>
                                          <Text style={styles.dealsheading}>Get 5 for 1000</Text>
                                          </Col>
                                          <Col>
                                            <Text style={{color:'#F199C1', fontSize: 20, fontWeight: '600', marginLeft: 90}}> Book now </Text>
                                          </Col>
                                        </Grid>
                                          <Text style={styles.dealssubhead}> Get these five services and save Rs.800.</Text>
                                          <List>

                                              <Text  style={styles.listitems}>1. Facial cleansing</Text>
                                              <Text  style={styles.listitems}>2. Hands treatment</Text>
                                              <Text  style={styles.listitems}>3. Feet treatment</Text>
                                              <Text  style={styles.listitems}>4. Hair setting</Text>
                                              <Text  style={styles.listitems}>5. Facial cleansing</Text>
                                            <View style={{borderBottomColor:'#C0C0C0', borderBottomWidth:1, marginTop: 10, marginBottom: 10}}></View>
                                              <Grid>
                                                <Col><Text style={styles.dealssubhead}>May 04, 2019</Text>
                                                      <Text style={styles.offervalid}> Offer valid till</Text>
                                                </Col>
                                                <Col><Text style={styles.dealssubhead}>Rs. 1000</Text>
                                                  <Text style={styles.offervalid}> Price</Text>
                                                </Col>
                                              </Grid>
                                          </List>
                                          <View style={{boderBottomWidth: 1, borderBottomColor: 'black'}}>
                                          </View>
                                      </View>
                                    </TouchableOpacity>
                            </ImageBackground>
                          </Card>
                      </Content>

                      <View>
                      </View>
                     </View>
            </ScrollView>
      )


}
}

export default DealsAvailable;
