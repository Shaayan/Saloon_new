import React, { Component } from 'react'
import { View, Image, Text, Modal, TouchableOpacity, Button, Dimensions, TouchableHighlight  } from 'react-native'
//import InputCompoent from '../Components/InputCompoent'
//import styles from '../Components/Styles/ModelViewStyle'

const {height, width} = Dimensions.get("window");


export default class ModalView extends Component{

    constructor() {
        super();
        this.state = {

        }
    }

    render(){
        return(
            <View style={{borderRadius: 20}}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.props.modalVisible}>
                    <TouchableHighlight style={{height:height, backgroundColor: 'rgba(0,0,0,0.3)'}}>
                        {this.props.modalContent()}
                    </TouchableHighlight>
                </Modal>
            </View>
        )
    }


}
