import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesome, Entypo, Feather } from '@expo/vector-icons'

const HeaderIcon = ({ text, onPress, onChangeText, value, name, color }) => (
    <TouchableOpacity onPress={onPress}>
        <Feather name={name} size={25} color={color} />
    </TouchableOpacity>

);

HeaderIcon.propTypes = {
    color: PropTypes.any,
    name: PropTypes.any,
    text: PropTypes.string,
    onPress: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.any
    };
export default HeaderIcon;