import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get("window");


export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        position:'relative',
    },
    logo:{
        flex:1,
        width:width,
        height:height*0.4,
        justifyContent:'center'
    },
    backgroundImage: {

        position:'absolute',
        height:height,
        width:width
    }


});