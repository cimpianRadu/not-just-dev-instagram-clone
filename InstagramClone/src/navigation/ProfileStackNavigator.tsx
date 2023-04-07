import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfile from '../screens/EditProfile';
import {ProfileStackParamList} from './types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
