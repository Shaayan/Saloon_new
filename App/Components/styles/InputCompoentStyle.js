import { StyleSheet } from 'react-native'
//import { Fonts } from '../../Themes/Fonts'
import {  Colors } from '../../Themes/Colors'
//import DeviceInfo from 'react-native-device-info';
//const deviceId = DeviceInfo.getDeviceId();
//const isTablet = DeviceInfo.isTablet() || deviceId.toLowerCase().indexOf("ipad") != -1;




export default StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle:{
        width: '50%',
        padding: 30,
        letterSpacing:1,
    },
    labelStyle:{
        paddingLeft: 1,
        marginTop:  10,
        fontSize: 16,
        color: 'green'
    },
    Icon:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    IconSubCont:{
        marginTop:15,
        paddingRight : 8
    }
})
