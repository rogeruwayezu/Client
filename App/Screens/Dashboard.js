import React from 'react';
import PropTypes from 'prop-types'
import {graphql, compose} from 'react-apollo'
import gql from 'graphql-tag'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image, Animated } from 'react-native';
import {Header} from 'react-native-elements'
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons'

import HeaderIcon from '../Components/HeaderIcon'
import Card from '../Components/Card'
import InputButton from '../Components/InputButton'
import styles from './Style/ListStyle'


class Dashboard extends React.Component {

    static navigationOptions = ({navigation})=>{
        return{
            headerTitle: 'DashBoard',
            headerLeft: (
                <HeaderIcon 
                    onPress={()=> navigation.navigate('DrawerNav')} 
                    name="menu"
                    color="black" />
            ),
            headerRight: (
                <TouchableOpacity onPress={()=> navigation.navigate('InfoBureaus')}>
                    <SimpleLineIcons name="note" size={25} color="black" />
                </TouchableOpacity>
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
  // constructor(props){
  //   super(props)
  //   this.state= {
  //     // fadeValue: Animated.value(0)
  //   }
  // }

  // state = {
    
  // }
  
  keyExtractor = (item, index) => index.toString()
  oneScreensWorth = 20

  render() {
    return (
      <View style={{flex: 1}}>
      {/* <Header 
            leftComponent={
              <HeaderIcon 
                onPress={()=> this.props.navigation.navigate('DrawerOpen')} 
                name="menu"
                color="white" />
            }/> */}
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
          data={this.props.data.allInfoBureauses}
          renderItem={({ item }) => (
            <Card 
              // source={item.image} 
              text={item.companyName} 
              text2={item.email}
              text3={item.phoneNumber}
              onPress={() => this.props.navigation.navigate('Detail', {...item})}/>
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

Dashboard.propType={
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

export default graphql(query)(Dashboard)