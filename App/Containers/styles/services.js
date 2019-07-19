import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");






export default StyleSheet.create({
    headingService:{
        fontSize: 24,
        fontWeight: 'bold',
    },

    servicebackground:{
		flex: 1,
		width: "100%",
		backgroundColor:'#ffffff',
        borderRadius: 20,
		shadowColor: '#D3D3D3',
		shadowOpacity: 0.8,
        padding: 15,

    },
    
    bookedheading:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#808080'
    },

    rowsetting:{
        flexDirection: 'row',
        marginTop: 20,
    },

    serviceLeft:{
        flex: 8,

    },


    serviceRight:{
        flex: 19,

    },

    rowservice:{
        flexDirection: 'row',

    },

    colorproperty18:{
        color:'#C0C0C0',
        fontSize: 18,
        fontWeight: '800'
    },

    colorproperty14:{
        color:'#C0C0C0',
        fontSize: 14,
    },



    buttonbooking:{
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
    buttombackground:{
		backgroundColor:'#F193C5',
        flexDirection:'row',
        padding: 20,
		borderRadius: 40,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
        shadowRadius: 1,
        textAlign: 'center',
        width: 270,
        justifyContent: 'center'

	},
});