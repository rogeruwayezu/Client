import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import MapScreen from '../Screens/MapScreen'
import ListScreen from '../Screens/ListScreen'

const TabNavigationScreen = TabNavigator({
    MapScreen: {screen: MapScreen},
    ListScreen: {screen: ListScreen},
    },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'MapScreen') {
          iconName = `map-marker`
        } else {
          iconName = `list-alt`
        }
    
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <FontAwesome name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'grey',
      labelStyle: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
      },
      // style: {
      //   backgroundColor: '#17202A',
      //   borderTopWidth: 1,
      //   borderTopColor: 'white',
      //   justifyContent: 'center'
      // }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom'
  })
export default TabNavigationScreen