import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import styles from '../Screens/Style/ListStyle'

const Card= ({ text, onPress, style, source, text2, text3 }) => (

    <TouchableOpacity style={styles.row} 
                      onPress={onPress}>
    <View style={{justifyContent: 'center'}}>
          <Image  style={styles.image}
                  source={source}/>
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={styles.boldLabel}>Compnay: {text}</Text>
          <Text style={styles.label}>Rates: {text2}</Text>
        </View>
    </TouchableOpacity>
);

Card.propTypes = {
    text3: PropTypes.string,
    text2: PropTypes.string,
    text: PropTypes.string,
    onPress: PropTypes.func,
    source: PropTypes.number,
    };
export default Card;