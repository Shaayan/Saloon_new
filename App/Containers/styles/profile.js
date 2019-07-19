import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");




export default StyleSheet.create({
	container:{
        backgroundColor:'white',
        height:height*height
    },
    content_logo:{
        width:width,
        height:height*0.3,
        justifyContent:'center',
        alignItems:'center'
    },
    margin_top:{
        marginTop:10
    },
    inputComponent: {
        width:width*0.8,
        alignSelf: 'center',
        marginTop:15,
        color:'white',
        borderWidth:1
    },
    hr_row : {
        borderBottomWidth: 1,
        borderColor:'gray',
        marginTop:20
    },
    background_image_profile:{
        position:'relative',
        width:width,
        height:height*0.3
    },
    phoneIcon:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }




});