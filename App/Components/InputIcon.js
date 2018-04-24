import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons, Entypo } from '@expo/vector-icons'

import styles from './Style/InputIconStyle'

const InputIcon = ({ text, onPress, onChangeText, value, name }) => (
    <View style={styles.inputWrapper}>
        <Entypo 
            name={name} 
            size={25} 
            color="#4980f9"
            style={styles.icon} />
        <TextInput  
            style={styles.input}
            placeholder={text}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            placeholderTextColor='#99A3A4'
            underlineColorAndroid='transparent'
            onChangeText = {onChangeText}
            value = {value} />
    </View>
);

InputIcon.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.any,
    name: PropTypes.any
    };
export default InputIcon;