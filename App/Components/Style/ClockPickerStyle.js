import {StyleSheet, Dimensions} from 'react-native'

const INPUT_HEIGHT = 40
const BORDER_RADIUS= 4
const screenwidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height

export default StyleSheet.create({
    // $buttonBackgroundColorBase: '$white',
    // $buttonBackgroundColorModifier: 0.1,

    container:{
        flexDirection: 'row',
        margin: 10
        // // backgroundColor: '#CCD1D1',
        // width: screenwidth -20,
        // height: INPUT_HEIGHT,
        // borderRadius: BORDER_RADIUS,
        // alignItems: 'center',
        // marginVertical: 10,
        // margin: 10,
        // // marginHorizontal: 20
    },
    buttonContainer:{
        backgroundColor: '#4980f9',
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#CCD1D1',
        borderRadius: 10
        // borderTopLeftRadius: BORDER_RADIUS,
        // borderBottomLeftRadius: BORDER_RADIUS,
        // backgroundColor: '#CCD1D1'
    },
    buttonText:{
        fontWeight: '600',
        fontSize: 15,
        paddingHorizontal: 16,
        color: 'white'
    },
    input:{
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 20,
        paddingHorizontal: 8,
        color: 'grey',
        borderWidth: 1,
        borderColor: '#CCD1D1',
        borderRadius: 10
        // borderWidth: 2
    },
    border:{
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        borderColor: 'black'
    },
    ContainerStylesDisabled: {
        backgroundColor: 'grey'
    },

})