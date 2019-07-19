import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
const {height, width} = Dimensions.get("window");
import StarRating from 'react-native-star-rating';
import {Container, Content, Card, CardItem, Body,Thumbnail } from "native-base";
import { Item, Input } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './styles/profile';

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



class Profile extends Component {
    onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });

  }
  componentDidMount = () =>{
        let data = this.props.navigation.state.params;
        console.log(data, 'dataaaaaaaaaaaaaa')
        // this.getData(data.id)
        // this.setState({emp_id: data.id, service: data.service, emp_name: data.emp_name})
    }

    render() {
      const uri = "https://res.cloudinary.com/dxk0bmtei/image/upload/v1540381839/profile1_ubhpee.jpg";
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{width:width,height:height}}>
                        {/*<Image source={require('../../assets/profile_background.png')} style={styles.background_image_profile}></Image>*/}
                        <View style={styles.content_logo}>
                          <Image large source={{uri:uri}} style={{marginTop:5,width:width*0.35,height:height*0.20,borderRadius:80}}></Image>
                        </View>
                        <View>
                          <Text style={{fontSize:16,marginLeft:10,color:'gray'}}>Name</Text>
                        </View>
                        <View>
                          <Text style={{fontSize:18,marginLeft:10,color:'black'}}>Zainab Ansari</Text>
                        </View>
                        <View style={{borderWidth:1,borderColor:'gray',width:width}}></View>
                        <View style={{marginTop:30}}>
                          <Text style={{fontSize:16,marginLeft:10,color:'gray'}}>Email</Text>
                        </View>
                        <View>
                          <Text style={{fontSize:18,marginLeft:10,color:'black'}}>zainab@gmail.com</Text>
                        </View>
                        <View style={{borderWidth:1,borderColor:'gray',width:width}}></View>
                        <View style={{marginTop:40}}>
                          <Text style={{fontSize:16,marginLeft:10,color:'gray'}}>Phone</Text>
                        </View>
                        <View>
                          <Text style={{fontSize:18,marginLeft:10,color:'black'}}>+92 (001)-987654</Text>
                        </View>
                        <View style={{borderWidth:1,borderColor:'gray',width:width}}></View>
                        <View style={{marginTop:40}}>
                          <Text style={{fontSize:16,marginLeft:10,color:'gray'}}>speciality</Text>
                        </View>
                        <View>
                          <Text style={{fontSize:18,marginLeft:10,color:'black'}}>HairStyle,Facial,Massage</Text>
                        </View>
                        <View style={{borderWidth:1,borderColor:'gray',width:width}}></View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Profile;


Profile.navigationOptions = ({ navigation }) => ({
    headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><LogoTitle /></View>,
    headerStyle: {backgroundColor: 'white'},  
    headerRight:(
        <View>
        </View>
    )
});