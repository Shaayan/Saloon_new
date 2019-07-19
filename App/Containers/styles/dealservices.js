import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");






export default StyleSheet.create({

	cardbackground:{
		backgroundColor:'#ffffff',
		height:height*0.2,
		flexDirection:'row',
		borderRadius: 20,
		// shadowColor: '#000',
		// shadowOffset: { width: 0, height: 1 },
		// shadowOpacity: 0.8,
		// shadowRadius: 1,
	},
	carditembackground:{
		backgroundColor:'#ffffff63',
	},

	boxshadow:{
		// shadowColor: '#000',
		// shadowOffset: { width: 0, height: 1 },
		// shadowOpacity: 0.8,
		// shadowRadius: 10,
	},

	chosenservice:{
		height: height*0.1,
		backgroundColor:'#D3D3D3',
		borderRadius: 20,
	},

	dealsdash:{
		backgroundColor:'#ffffff',
		shadowColor: '#ffffff',
		// shadowOffset: { width: 10, height: 1 },
		shadowOpacity: 2.8,
		shadowRadius: 20,
		borderRadius: 20,
		padding: 30,
		marginBottom: 0,

	},

	textdash:{
		marginBottom: 15,
		marginTop: 20,
		fontWeight: 'bold',
		fontSize: 28,
		marginLeft:23,
		color:"#A9A9A9"
	},

	dealsheading:{
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 15,
		color: '#A9A9A9',
	},

	dealssubhead:{
		fontSize: 19,
		color: '#C0C0C0',
		marginBottom: 5,
	},
	imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
				// backgroundColor: '#F49DC0',

},

listitems:{
	fontSize: 19,
	color: '#C0C0C0',
	marginBottom: 3,
},

offervalid:{
	fontSize: 14,
	color: '#C0C0C0',

},

});
