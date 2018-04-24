import React from 'react';
import {  StyleSheet, 
          Text, 
          View, 
          Button, 
          TouchableOpacity, 
          Image, 
          AsyncStorage, 
          KeyboardAvoidingView,
          Animated,
          Easing
} from 'react-native';
import { ImagePicker } from 'expo';
import {Header} from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import AwesomeAlert from 'react-native-awesome-alerts'
import {graphql, compose} from 'react-apollo'
import gql from 'graphql-tag'

import ClockPicker from '../Components/ClockPicker'
import HeaderIcon from '../Components/HeaderIcon'
import InputIcon from '../Components/InputIcon'
import styles from './Style/BureausStyle'


class Bureaus extends React.Component {

  static navigationOptions = ({navigation})=>{
    return{
        headerTitle: 'Forex Bureau Info',
        headerStyle: {
            paddingLeft: 10,
            paddingRight: 10
            // padding: 20
        },
        headerTitleStyle: {
            marginLeft: 50
        }
    }
  };

  animatedValue = new Animated.Value(0)

  constructor(props){
    super(props);
    this.state = {
      imageUrl: null,
      isDateTimePickerVisible: false,
      chosenTime: '',
      id: '',
      latitude: '',
      longitude: '',
      credentials:{
        compname: '',
        email: '',
        phone: '',
        location: ''
      },
      showAlert: false
    }
  }
  static navigationOptions = {
      drawerLabel: 'Bureaus',
  };

  showAlert = () => {};
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  async componentDidMount(){
    // const BureauId = await AsyncStorage.getItem('bureauID')
    // this.setState({ id: BureauId })
    // console.log(this.state.id)
    this.setState({showAlert: true});
    this.getCurrentLocation
  }

  getCurrentLocation =()=> {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
          // error: null,
        });
      },
      // (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    // alert('press again to make sure that we actually stores the data')
    console.log(this.state.latitude)
    console.log(this.state.longitude)
  }

  _handleTextInput = (key, input) => {
    this.setState(state =>({
        credentials: {
            ...state.credentials,
            [key]: input,
        }
    }))
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ imageUrl: result.uri });
    }
  };

  _showDateTimePicker = () => this.setState({ 
    isDateTimePickerVisible: true,
  });

  _hideDateTimePicker = (datetime) => this.setState({ 
    isDateTimePickerVisible: false,
    chosenTime: moment(datetime).format('hh:mm').toString()
  });

  _handleDatePicked = (time) => {
    console.log('A date has been picked: ', time);
    this._hideDateTimePicker();
  };

  submitData = async ()=> {
    const { chosenTime, credentials: {compname, email, phone, location}, latitude, longitude, id } = this.state
    let response;
    try {
        response = await this.props.mutate({
        variables: {chosenTime, compname, email, phone, location, latitude, longitude, id}
        });
        console.log(response.data)
    } catch (err) {
      console.log(err)
    }
    await AsyncStorage.setItem('bureauID', response.data.createAllInfo.id)
    this.props.navigation.navigate('Currency')
  }
    
  render() {
    let { imageUrl } = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

          <KeyboardAvoidingView 
              style={styles.container}
              behavior= "padding">
            <Text style={styles.cardText}>Contacts</Text>
            <View style={styles.separator}/>
            <InputIcon 
              name="info" 
              text="Company Name"
              onChangeText={input => this._handleTextInput('compname', input)}/>
            <View style={styles.separator}/>
            <InputIcon 
              name="email" 
              text="Email ..."
              onChangeText={input => this._handleTextInput('email', input)}/>
            <View style={styles.separator}/>
            <InputIcon 
              name="phone" 
              text="Phone ..."
              keyboardType="numeric"
              onChangeText={input => this._handleTextInput('phone', input)}/>
            <View style={styles.separator}/>
            <InputIcon 
              name="location" 
              text="Detailed location.. eg: Chic no892"
              keyboardType="numeric"
              onChangeText={input => this._handleTextInput('location', input)}/>
          </KeyboardAvoidingView>

            <View style={styles.footercontainer}>
              <Text style={styles.cardText}>working schedule</Text>
              <View style={styles.separator}/>
              <ClockPicker 
                buttonText="opening hour"  
                onPress={this._showDateTimePicker}
                text={this.state.chosenTime}/>
              <ClockPicker 
                buttonText="closing hour" 
                onPress={this._showDateTimePicker}
                text={this.state.chosenTime}/>
            </View>

          <View>
          <TouchableOpacity 
            style={styles.buttonFooter}
            onPress={this.submitData}>
            <Text style={styles.textbutton}>Submit</Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={'time'}
        />

         <View style={styles.overlay}>
          <AwesomeAlert
              show={this.state.showAlert}
              showProgress={false}
              title="Agreement"
              message="please enable forex App to track your location"
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={false}
              cancelText="Got it"
              confirmText="Yes, delete it"
              confirmButtonColor="#DD6B55"
              onCancelPressed={() => {
                this.hideAlert();
              }}
              onConfirmPressed={() => {
                this.hideAlert();
              }}
            />
          </View>

      </View>
    );
  }
}

const BureausMutation = gql`
mutation (
  $compname: String!, 
  $chosenTime: String!, 
  $email: String!, 
  $phone: String!, 
  $location: String!, 
  $latitude: String!, 
  $longitude: String!){
    createAllInfo(
      infoBureauses:{
        companyName: $compname
        email: $email
        phoneNumber: $phone
        openingHour: $chosenTime
        closingHour: $chosenTime
      },
      locations:{
        longitude: $longitude, 
        latitude: $latitude, 
        addressDescription:$location
      },
    ){
      id
      locations{
        id
        latitude
        longitude
      }
      infoBureauses{
        id
        companyName
        email
        phoneNumber
        closingHour
        openingHour
      }
  }
}
  `;

export default graphql(BureausMutation)(Bureaus);
