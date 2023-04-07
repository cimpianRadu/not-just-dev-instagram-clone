import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Image, StyleSheet} from 'react-native';
import logo from '../assests/images/logo.png';
import {HomeStackParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{header: HeaderTitle}}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

const HeaderTitle = () => {
  return <Image source={logo} resizeMode="contain" style={styles.header} />;
};

const styles = StyleSheet.create({header: {width: 150, height: 48}});

export default HomeStack;
