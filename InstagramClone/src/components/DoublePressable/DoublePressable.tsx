import React, {PropsWithChildren} from 'react';
import {Pressable} from 'react-native';

interface IDoublePressableProps {
  onPress: () => void;
}

const DoublePressable = ({
  onPress,
  children,
}: PropsWithChildren<IDoublePressableProps>) => {
  let lastTap = 0;

  const onDoublePress = () => {
    const now = Date.now();
    console.log('wtf', now - lastTap);
    if (now - lastTap < 300) {
      onPress();
    }
  };
  return (
    <Pressable style={{borderWidth: 4}} onPress={onDoublePress}>
      {children}
    </Pressable>
  );
};

export default DoublePressable;
