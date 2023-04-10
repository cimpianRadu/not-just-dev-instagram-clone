import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserSearchScreen from '../screens/UserSearchScreen/UserSearchScreen';
import {SearchTabNavigatorParamList} from './types';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

function SearchTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserSearch" component={UserSearchScreen} />
      <Tab.Screen name="PostSearch" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default SearchTabNavigator;
