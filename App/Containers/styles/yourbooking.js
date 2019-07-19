import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");
const numColumns = 3;
const size = (width*0.8)/numColumns;

export default StyleSheet.create({
    yourbookingrow:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'yellow'
    },list: {
	    flex: 1,
	    marginTop:20,
	},
  	modalMain: {
    	height: height, 
    	width: width, 
    	backgroundColor: 'rgba(0, 0, 0, 0.9)', 
    	flexDirection: 'column', 
    	justifyContent: 'center', 
    	alignItems: 'center'
    },
	calendarStyle: {
    	height: height*0.6, 
    	width: width*0.8
    },
    itemContainer: {
        width: size,
        height: height*0.07,
        justifyContent: 'center', 
        // alignItems: 'center'
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15
    },
    selectedItemContainer: {
        width: size,
        height: height*0.07,
        justifyContent: 'center', 
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'blue',
        paddingLeft: 15
    },
    item: {
      	flex: 1,
        margin: 3,
        color: 'white',
        fontSize: 16,
    },
    selectedItem: {
        flex: 1,
        margin: 3,
        color: 'gray',
        fontSize: 16,
    },
    bookingCard:{
        backgroundColor:'white',
		borderRadius: 30,
		shadowColor: '#DCDCDC',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.15,
        shadowRadius: 30,
        padding: 30,
    },
    rowbooking:{
        flexDirection: 'row',

    },
    buttonbooked:{
        flex: 1,
        width: 150,
        backgroundColor: "#F193C5",
        textAlign: 'center',
    }
    ,
    everythingcenter:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 50

    },

    bookingheading:{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 15,
        color: '#808080',
    },

    everythingbooking:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 50

    },
    bookingbuttons:{
		backgroundColor:'#F193C5',
        flexDirection:'row',
        padding: 20,
		borderRadius: 40,
		// shadowColor: 'whitesmoke',
		// shadowOffset: { width: 0, height: 1 },
		// shadowOpacity: 0.2,
        // shadowRadius: 1,
        textAlign: 'center',
        width: 270,
        justifyContent: 'center'

    },
    
    bookingnumndate:{
        marginBottom: 10,
        fontSize: 18,
        fontWeight: '600',
        color: 	'#C0C0C0'
    },

    subbooking:{
        color: '#C0C0C0',
        fontSize: 16,
    }

});