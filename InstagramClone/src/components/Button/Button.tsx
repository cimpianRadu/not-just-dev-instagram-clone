import React from 'react';
import {Pressable, Text} from 'react-native';

interface IButtonProps {
  text?: string;
  onPress?: () => void;
}

const Button = ({onPress = () => {}, text = ''}: IButtonProps) => {
  return (
    <Pressable
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 4,
        alignItems: 'center',
        marginHorizontal: 5,
      }}
      onPress={onPress}>
      <Text style={{color: 'black'}}>{text}</Text>
    </Pressable>
  );
};

export default Button;
