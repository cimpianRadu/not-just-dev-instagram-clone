import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfile from './src/screens/EditProfile';
import PostUploadScreen from './src/screens/PostUploadScreen';

const App = () => {
  return (
    <SafeAreaView>
      {/* <PostUploadScreen /> */}
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
