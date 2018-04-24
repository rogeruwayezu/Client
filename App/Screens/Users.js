import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'

import HeaderIcon from '../Components/HeaderIcon'

export default class Users extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Users',
      };
    
  render() {
    return (
      <View style={{flex: 1}}>
        <Header 
            leftComponent={
              <HeaderIcon 
                onPress={()=> this.props.navigation.goBack()} 
                name="arrow-left"
                color="white" />
            }/>
      <View style={styles.container}>
        <Text>Users</Text>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DrawerOpen')}>
        <Text>something</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
