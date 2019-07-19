import {Dimensions, StyleSheet} from 'react-native'
//import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    forgotView: {
        height:height,
        backgroundColor:'rgba(0,0,0,0.5)'
    }
})
