import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");




export default StyleSheet.create({

	artistheadingtext:{
		fontSize: 30,
		color: '#808080',
		fontWeight: 'bold',
		marginBottom: 2,
	},

	artistsearch:{
		flex: 1,
		width: "100%",
		backgroundColor:'#ffffff',
		flexDirection:'row',
        borderRadius: 40,
		shadowColor: '#D3D3D3',
		shadowOpacity: 0.8,
		padding: 20,
        

	},

	searchleftcontainer:{
		flex: 16,

	},

	searchrightcontainer:{
		flex: 9,
		
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		
	},
	

	artistbackground:{
		flex: 1,
		width: "100%",
		backgroundColor:'#ffffff',
		flexDirection:'row',
        borderRadius: 20,
		shadowColor: '#D3D3D3',
		shadowOpacity: 0.8,
		padding: 10,
	},

	leftcontainer:{
		flex: 8,



	},
	rightcontainer:{
		flex: 16,
	

	},

	
});
