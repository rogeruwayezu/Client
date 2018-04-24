import {Dimensions, Platform, StyleSheet} from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Assets/Themes'

const screenwidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        fontSize: 20, 
        color: 'white', 
        fontWeight: 'bold'
    },
    wrapper:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    separator:{
        // marginLeft: 20,
        width: '100%',
        backgroundColor: '#ABB2B9',
        // flex: 1,
        height: StyleSheet.hairlineWidth
    },
    inputWrapper:{
        marginTop: 20,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonFooter:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#F781BE',
        width: screenwidth/ 5,
        height: 50,
        borderRadius: 20,
        marginLeft: 220
    },
    textbutton:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15
    },
    input:{
        height: screenheight /8,
        width: screenwidth -50,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
        padding: 10
    },
    info:{
        backgroundColor: 'white',
        height: screenheight /8,
        width: screenwidth -50,
        // borderWidth: 2,
        // borderColor: "grey",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    shape:{
        position: 'absolute',
        marginTop: 225,
        marginLeft: 120,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        transform: [
            {rotate: '180deg'}
          ]
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(69,85,117,0.7)',
      }
  });