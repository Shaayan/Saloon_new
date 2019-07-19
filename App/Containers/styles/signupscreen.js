import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");




export default StyleSheet.create({
	container:{
        flex:1,
        backgroundColor:'black'
    },
	signupheadingview:{
		alignSelf:'center'
	},
	signupheadeing:{
		fontSize:30,
		color:'black',
		paddingTop: height*0.04,
		// fontFamily:'OpenSans-Italic'
	},
	inputComponent: {
        width:width*0.8,
        alignSelf: 'center',
        marginTop:height*0.02,
        color:'white',
        borderColor:'black',
        borderWidth:1
    },
     buttonSignup:{
        width:width*0.8,
        alignSelf:'center',
        marginTop:50,
        justifyContent:'center',
        backgroundColor:'#000000',
    },
    backlogintext:{
    	color:'white',
    	textAlign:'center',
    	fontSize:18,
    	marginBottom:10
    }
});