import React from 'react';
import {View, FlatList} from 'react-native';
import comments from '../../assests/data/comments.json';
import Comment from '../../components/Comment';
import Input from './Input';

const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        style={{padding: 10, height: 400}}
      />
      <Input />
    </View>
  );
};

export default CommentsScreen;
