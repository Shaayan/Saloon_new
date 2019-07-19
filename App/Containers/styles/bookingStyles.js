import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");
const numColumns = 3;
const size = (width*0.8)/numColumns;

export default StyleSheet.create({
	mainImage: {
		width: width, 
		height: height,
		position:'relative'
	},
	overlay: {
        position: 'absolute',
        display: 'flex',
        width: width,
        height: height,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 2,
        textAlign: 'left',
        // justifyContent:'center'
    },
    inputView: {
		flex: 1,
		 width: width*0.9
    },
    inputStyle: {
		color: 'white',
		textAlign: 'center'
    },
    pickerView: {
    	flex: 1,
    	width: width*0.9, 
    	borderColor: 'white', 
    	borderWidth: 1, 
    	justifyContent: 'center', 
    	marginTop: 20, 
    	backgroundColor: 'black'
    },
    scheduleView: {
    	flex: 0.8, 
    	width: width*0.9, 
    	borderColor: 'white', 
    	borderWidth: 1, 
    	justifyContent: 'center', 
    	marginTop: 20, 
    	backgroundColor: 'white', 
    	alignItems: 'center'
    },
    scheduleViewText: {
    	fontSize: 18, 
    	color: 'black'
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
    timeslot:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'whitesmoke',
		padding: 30,
		borderRadius: 20,

    },
    timedash:{
		marginBottom: 15,
		marginTop: 20,
		fontWeight: 'bold',
		fontSize: 26,
        marginLeft:23,
        textAlign: 'left'
    },
    slotHeading:{
		fontSize: 18,
		fontWeight: 'bold'
	},

})