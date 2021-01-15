import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import RestaurantImagesScreen from './src/screens/RestaurantImagesSreen'
import RestaurantDetail from './src/components/RestaurantDetails'

const navigator = createStackNavigator({
  Search: SearchScreen,
  Images: RestaurantImagesScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)
