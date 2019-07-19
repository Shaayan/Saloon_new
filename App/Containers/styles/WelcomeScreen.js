import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");



export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#f6fafe'
    },
    searchSection: {
        flex: 1,
        height:height*0.9,
        flexDirection: 'row',
        borderRadius:9

    },
    searchIcon: {

    },
    logo:{
        flex:1,
        width:width,
        height:height,
        justifyContent:'center'
    },
    backgroundImage: {

        position:'absolute',

        width:width,
        resizeMode: 'cover'

    },
    usernamebox: {
        flex:1,
        position:'absolute',
        width:width*0.9,
        alignSelf:'center',
    },
    textInputColor:{
        backgroundColor:'white',
        marginTop:18,
        paddingBottom:14
    },
    inputComponent: {
        width:width*0.9,
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop:15
    },
    buttonComponent:{
        width:width*0.7,
        alignSelf:'center',
        marginTop:15,
        justifyContent: 'center'
    },
    buttonFacebook:{
        width:width*0.7,
        alignSelf:'center',
        marginTop:15,
        justifyContent:'center'
    },
    buttonNewuser:{
        width:width*0.7,
        alignSelf:'center',
        marginTop:15,
        justifyContent:'center'
    },
    buttonSignup:{
        width:width*0.9,
        alignSelf:'center',
        marginTop:15,
        justifyContent:'center'
    },
    imageLogo: {
    flex: 1,
    aspectRatio: 1.5
  }



});