// import React, { Component } from 'react';
// const {height, width} = Dimensions.get("window");
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {
//     View,
//     Text,
//     StyleSheet, Dimensions,Image,ScrollView,TouchableOpacity, ImageBackground,
// } from 'react-native';
// import {HttpUtils} from "../Services/HttpUtils";
// import {Container, Content, Card, CardItem, Body, Grid, Col, ListItem, List, Header,  } from "native-base";
// import styles from './styles/dealservices';


// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={require('../../assets/Dark/logof-14.png')}
//         style={{ width: 120, height: 50 }}
//       />
//     );
//   }
// }




// class TimeSlot extends Component {
    

//     static navigationOptions = ({ navigation }) => {
//         return {
//             headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><LogoTitle /></View>,
//             headerStyle: {backgroundColor: 'white'},
//             headerLeft: (
//                 <View style={{ padding: 10 }}>
//                     <Icon name="bars" size={24} onPress={() => navigation.openDrawer()} />
//                 </View>
//             ),
//             headerRight:(
//                 <View>
//                 </View>
//             )

//         }
//     }

//     render(){



//   		return(
//         <ScrollView>
//                     <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={{width:width,height:height,position:'relative'}}></Image>
//                     <View style={{position:'absolute', backgroundColor: '#ffffff', padding:15, width:width}}>
//                       {/* <View>
//                         <Text style={styles.textdash}>Select time slot</Text>
//                       </View>
                      
//                     <Content style={{padding:15}}>
//                       <View style={styles.timeslot}>
//                           <View style={{paddingRight: 60,borderRightWidth: 1}}>
//                               <Text style={styles.slotHeading}>Abc Haircut</Text>
//                               <Text style={{fontSize:18}}>Chosen service</Text>
//                         </View>
//                         <View>
//                             <Text style={styles.slotHeading}>Ayesha Khalid</Text>
//                             <Text style={{fontSize:18}}>Chosen service</Text>
//                             </View>
//                       </View>
//                       </Content> */}
//                       <Content style={{padding: 15}}>
//                           <Card style={styles.datecard}>
//                       <View>
//                             <View><Text>
//                                 Date Time Picker</Text></View>
//                         </View>
//                         </Card>
//                         </Content>
//               </View>
//             </ScrollView>
//       )


// }
// }

// export default TimeSlot;
