import {Dimensions, Platform, StyleSheet} from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Assets/Themes'

const screenwidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        // flex: 3,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: screenwidth -50,
        height: (screenheight/2)-70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5.0,
        shadowRadius: 2,
        // elevation: 5,
        backgroundColor: Colors.snow,
        // margin: 10,
        // marginTop: 20
    },
    title:{
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 25
    },
    separator:{
        // marginBottom: 8,
        width: '100%',
        backgroundColor: '#ABB2B9',
        // flex: 1,
        height: StyleSheet.hairlineWidth
    },
    cardText:{
        fontWeight: 'bold', 
        fontSize: 15, 
        margin: 10,
        marginTop: 10
    },
    footercontainer:{
        // flex: 2.3,
        // flexDirection: 'row',
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: screenwidth -50,
        height: screenheight/4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5.0,
        shadowRadius: 2,
        // elevation: 5,
        backgroundColor: Colors.snow,
        // margin: 10,
        marginTop: 30
    },
    buttonFooter:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#4980f9',
        width: screenwidth -200,
        height: 50,
        borderRadius: 50
    },
    textbutton:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15
    },
    imageButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4980f9',
        width: screenwidth -160,
        height: 50,
        borderRadius: 50,
        // margin: 20
    },
    photo: {
        // flex: 1,
        backgroundColor: '#99A3A4',
        height: screenheight/7.5,
        width: 80,
        marginRight: 10
    },
    image:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        // position: 'absolute',
        // justifyContent:'center',
        // alignItems:'center',
        alignSelf:'center',
        // zIndex: 0,
        // marginTop: screenwidth /3,
        // marginLeft: screenwidth /2
        // justifyContent: 'center'
        ...StyleSheet.absoluteFillObject,
      }
  });