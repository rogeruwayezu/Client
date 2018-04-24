import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DetailCard from "../Components/DetailCard"


export default class GridView extends Component {
  

    render() {

      const item = this.props.navigation.state.params
     return (
       
        <View style={{flex: 1}}>
          <DetailCard 
              // source={item.image} 

              text={item.Company} 
              text1={item.Rates}
              text2={item.Phone}
              text3={item.Email}
              tex4={item.Address}
              text5={item.Open}
          />
         
        </View>
        
         );
    }
  }

