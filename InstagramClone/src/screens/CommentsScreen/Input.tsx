import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import COLORS from '../../theme/colors';

const Input = () => {
  const [newComment, setNewComment] = useState('');
  const onPost = () => {
    setNewComment('');
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        borderTopColor: COLORS.LIGHT_GREY,
        borderTopWidth: 1,
      }}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={{width: 40, aspectRatio: 1, borderRadius: 20}}
      />
      <TextInput
        onChangeText={setNewComment}
        value={newComment}
        multiline
        style={{
          flex: 1,
          borderColor: COLORS.LIGHT_GREY,
          borderWidth: 1,
          borderRadius: 25,
          padding: 5,
          marginLeft: 5,
          height: 50,
          paddingRight: 50,
        }}
        placeholder="Write comment"
      />
      <Text
        onPress={onPost}
        style={{color: 'blue', position: 'absolute', right: 45, top: 35}}>
        Post
      </Text>
    </View>
  );
};

export default Input;
