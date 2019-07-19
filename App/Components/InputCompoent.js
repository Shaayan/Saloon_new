import React, { Component } from 'react';
import styles from './styles/InputCompoentStyle';
import { Item, Label, Text } from 'native-base';
import { View, TextInput } from 'react-native';
import { Colors } from '../Themes/Colors';





export default class InputCompoent extends Component {

    // static propTypes = {
    //     labelText: PropTypes.string,
    //     placeholder: PropTypes.string,
    //     inputRef: PropTypes.string,
    //     onChangeText: PropTypes.func,
    //     value: PropTypes.string,
    //     secureTextEntry: PropTypes.bool
    // }


    render() {

        return (
            <Item stackedLabel>
                <Label style={[styles.labelStyle, this.props.labelStyle]}>{this.props.labelText}</Label>
                <TextInput
                    placeholder={this.props.placeholder}
                    style={this.props.style}
                    ref={this.props.inputRef}
                    autoFocus={false}
                    onFocus={this.props.onFocus}
                    value={this.props.value}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor='gray'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={this.props.secureTextEntry}
                    onChangeText={this.props.onChangeText}
                    editable = {this.props.isEditable}
                />

            </Item>
        )
    }
}