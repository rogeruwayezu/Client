import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Style/HeaderStyle'

const Header =()=>(
    <View style={styles.container}>
        <Text style={styles.text}>React</Text>
        <Text style={styles.textBottom}>Native</Text>
        <Image style={styles.iconImage}
               source={close} />
      </View>
)

Header.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.any,
    name: PropTypes.any
};

export default Header
