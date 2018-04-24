import { StyleSheet, Dimensions } from 'react-native'

const screenwidth = Dimensions.get('window').width

export default StyleSheet.create({
  inputWrapper: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
    // marginRight: 20
  },
  input: {
    // marginTop: 20,
    backgroundColor: 'transparent',
    width: screenwidth-30,
    height: 50,
    // margin: 30,
    paddingLeft: 70,
    // borderWidth: 2,
    // borderColor: '#E5E8E8',
    // borderRadius: 10
  },
  icon:{
    position: 'absolute',
    left: 0,
    // marginRight: 20,
    marginLeft: 10,
    marginTop: 10,
    zIndex: 1
  },
})
