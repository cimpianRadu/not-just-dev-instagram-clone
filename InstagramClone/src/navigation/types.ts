import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export type RootNavigatorParamList = {
  Home: undefined;
  Comments: {postId: string};
};

export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};

export type MyProfileNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  'MyProfile'
>;

export type MyProfileRouteProp = RouteProp<
  BottomTabNavigatorParamList,
  'MyProfile'
>;

export type HomeStackParamList = {
  Feed: undefined;
  UserProfile: {userId: string};
};

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Feed'
>;

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'UserProfile'
>;

export type UserProfileRouteProps = RouteProp<
  HomeStackParamList,
  'UserProfile'
>;

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
};

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackParamList,
  'Profile'
>;
