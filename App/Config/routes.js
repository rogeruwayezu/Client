import React from 'react'
import {TouchableOpacity} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import MapScreen from '../Screens/MapScreen'
import ListScreen from '../Screens/ListScreen'
import TabNavScreen from './TabNavigator'
import DrawerNav from './DrawerNav'
import Users from '../Screens/Users'
import InfoBureaus from '../Screens/InfoBureaus'
import Currency from '../Screens/Currency'
import CurrencyList from '../Screens/CurrencyList'
import DashBoard from '../Screens/Dashboard'
import Details from '../Screens/Details'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    MapScreen: {screen: MapScreen},
    ListScreen: {screen: ListScreen},
    TabNavScreen: { screen: TabNavScreen },
    DrawerNav: {screen: DrawerNav},
    Users: {screen: Users,},
    InfoBureaus: {screen: InfoBureaus,},
    Currency: {screen: Currency},
    CurrencyList: {screen: CurrencyList},
    DashBoard: { screen: DashBoard },
    Details: { screen: Details}
}, {
    headerMode: 'screen',
    initialRouteName: 'ListScreen',
    mode: 'modal',
})

export default PrimaryNav
