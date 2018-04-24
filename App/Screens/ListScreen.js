import React from 'react';
import PropTypes from 'prop-types'
import {graphql, compose} from 'react-apollo'
import gql from 'graphql-tag'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image, Animated } from 'react-native';
import {Header} from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'

import HeaderIcon from '../Components/HeaderIcon'
import Card from '../Components/Card'
import InputButton from '../Components/InputButton'
import styles from './Style/ListStyle'


class Listcreen extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      // showModal: false,
      refreshing: false,
      dataloaded: false,
      data:[
        { Company: "GoodLife",
          Email: "boom@gmail.com",
          Phone: "+34342343",
          Address: "KG 11Av 183",
          Open: "Monday to Frida",
          Rates: "50 Rwf"
        },
        { Company: "Limitless",
          Email: "boom@gmail.com",
          Phone: "+34342343",
          Address: "KG 11Av 183",
          Open: "Monday to Frida",
          Rates: "500 Rwf"
        },
        { Company: "Boom",
          Email: "boom@gmail.com",
          Phone: "+34342343",
          Address: "KG 11Av 183",
          Open: "Monday to Frida",
          Rates: "1000 Rwf"
        }
      ],
      text: '',
      countries: []
    }
  };



  static navigationOptions = ({navigation})=>{
    return{
        headerTitle: 'Forex App',
        headerLeft: (
          <HeaderIcon 
            onPress={()=> this.props.navigation.navigate('DrawerOpen')} 
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

 

  // fetchData() {
  //   fetch('https://restcountries.eu/rest/v2/all')
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({ 
  //         data: response,
  //         loaded: true,   
  //         refreshing: false,
  //         countries: response
  //       });
  //     })
  //     .done();
      
  // }




  keyExtractor = (item, index) => index.toString()

  oneScreensWorth = 20

  render() {
    return (
      <View style={{flex: 1}}>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
            <Text style={styles.textHead}>type the amount that you want to convert</Text>
            {/* <Animated.View style={[styles.cardContainer, {opacity: this.state.fadeValue}]}>
            </Animated.View> */}
            <InputButton  
                onPress={() => alert('clicking')}
                buttonText="USD"
                editable= {true}
                keyboardType="numeric"
            />
          </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.data}
          renderItem={({ item }) => (
            <Card 
              // source={item.image} 
              onPress={() => this.props.navigation.navigate('Details', {...item})}
              text={item.Company} 
              text2={item.Rates}/>
          )}
          numColumns={1}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
          // ItemSeparatorComponent={this.renderSeparator}
          />
      </View>
      </View>
    );
  }
}

Listcreen.propType={
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    allInfoBureauses: PropTypes.object,
  }).isRequired,
  }
  

const query = gql`
query{
  allInfoBureauses{
    id
    companyName
    email
    phoneNumber
  }
}
  `;

export default graphql(query)(Listcreen)