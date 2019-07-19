import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");






export default StyleSheet.create({
	mainheadingtext:{
		fontSize: 30,
		color: '#808080',
		fontWeight: 'bold',
		marginBottom: 2,
	},

	chosenservice:{
		
		backgroundColor:'#D3D3D3',
		borderRadius: 20,
		padding: 30,
		marginBottom: 20,
	},

	artistsearchcard:{
		flex: 1,
		backgroundColor:'#ffffff',
		flexDirection:'row',
        borderRadius: 40,
		shadowColor: '#D3D3D3',
		shadowOpacity: 0.8,
		padding: 20,
        

	},

	sleftcontainer:{
		flex: 16,

	},

	srightcontainer:{
		flex: 9,
		
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		
	},

	cardbackground:{
		flex: 1,
		width: "100%",
		backgroundColor:'#ffffff',
		flexDirection:'row',
        borderRadius: 20,
		shadowColor: '#D3D3D3',
		shadowOpacity: 0.8,
		padding: 10,
	},

	cleftcontainer:{
		flex: 8,



	},
	crightcontainer:{
		flex: 16,
	

	},
	carditembackground:{
		backgroundColor:'#ffffff63',
	},


	

	servicesdash:{
		backgroundColor:'#ec8df0',
		shadowColor: '#fcc2da',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.5,
		shadowRadius: 20,
		borderRadius: 20,
		padding: 30,
		marginBottom: 0,

	},

	subheadtext:{
		fontSize: 24,
		color: 'white',
	},
	imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
				// backgroundColor: '#F49DC0',

},

	searchemployee:{
		borderRadius: 50,
		padding: 30,
		marginBottom: 20,
		backgroundColor: '#ffffff',

	},

	pickerServices:{
		backgroundColor:'#ffffff',
		shadowColor: '#fcc2da',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.5,
		shadowRadius: 20,
		borderRadius: 20,
		padding: 30,
		marginBottom: 0,
	}
});
