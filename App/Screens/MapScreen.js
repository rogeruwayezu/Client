import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import {Header} from 'react-native-elements'
import MapView from 'react-native-maps'
// import { FontAwesome } from '@expo/vector-icons'

import HeaderIcon from '../Components/HeaderIcon'

let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 60 //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class MapScreen extends React.Component {

  static navigationOptions = ({navigation})=>{
    return{
        headerTitle: 'Forex App',
        headerLeft: (
          <HeaderIcon 
            onPress={()=> navigation.navigate('DrawerOpen')} 
            name="menu"
            color="black" />
        ),
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

  constructor() {
    super();
    this.state = {
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null,
      }
    };
  }

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       this.setState({
  //         region: {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           latitudeDelta: LATITUDE_DELTA,
  //           longitudeDelta: LONGITUDE_DELTA,
  //         }
  //       });
  //     },
  //   (error) => console.log(error.message),
  //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  //   );
  //   this.watchID = navigator.geolocation.watchPosition(
  //     position => {
  //       this.setState({
  //         region: {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           latitudeDelta: LATITUDE_DELTA,
  //           longitudeDelta: LONGITUDE_DELTA,
  //         }
  //       });
  //     }
  //   );
  // }

  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(this.watchID);
  // }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -1.9604979,
            longitude: 30.1002452,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={ true }
        >
          {/* <MapView.Marker
          coordinate={ this.state.region }
          /> */}
          <MapView.Marker 
            coordinate={{
              latitude: -1.9604979,
              longitude: 30.1002452,
            }}
            title={"Diamonds Forex Bureau"}
          />
          <MapView.Marker 
            coordinate={{
              latitude: -1.9349459,
              longitude: 30.0937492,
            }}
            title={"Bravia Forex Bureau"}
          />
          <MapView.Marker 
            coordinate={{
              latitude: -1.9444369,
              longitude: 30.0529602,
            }}
            title={"RG Forex Bureau"}
          />
          <MapView.Marker 
            coordinate={{
              latitude: -1.953317,
              longitude: 30.1007112,
            }}
            title={"Prime Forex Bureau"}
          />
          <MapView.Marker 
            coordinate={{
              latitude: -1.949344,
              longitude: 30.060989,
            }}
            title={"La Fortune Forex Bureau"}
          />
          <MapView.Marker 
            coordinate={{
              latitude: -1.945372, 
              longitude: 30.125211,
            }}
            title={"Welcome Forex Bureau"}
          />
          <MapView.Marker 
            coordinate={{
              latitude: -1.943378, 
              longitude: 30.059138,
            }}
            title={"Muhabura Forex Bureau"}
          />
          <MapView.Marker 
            coordinate={{
              latitude: -1.941366, 
              longitude: 30.128402,
            }}
            title={"Rebex Forex Bureau"}
          />
          <MapView.Marker 
            coordinate={{
              latitude: -1.943371, 
              longitude: 30.058922,
            }}
            title={"Shahanshah Forex Bureau Ltd"}
          />
          <MapView.Marker 
            coordinate={{
              latitude: -1.944948, 
              longitude: 30.061040,
            }}
            title={"Dahabshiil"}
          />
        </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map:{
    ...StyleSheet.absoluteFillObject}
});
