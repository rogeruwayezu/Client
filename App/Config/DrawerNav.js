import { DrawerNavigator } from 'react-navigation'

import Users from '../Screens/Users'
import DashBoard from '../Screens/Dashboard'
import TabNav from '../Config/TabNavigator'

const DrawerNav = DrawerNavigator({
    Users: {
      screen: Users,
    },
    DashBoard: {
      screen: DashBoard,
    },
    TabNav: {
        screen: TabNav,
      },
    },
    {
      initialRouteName: 'TabNav',
      drawerPosition: 'left',
    //   contentComponent: CustomDrawerContentComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle'
  });

  export default DrawerNav