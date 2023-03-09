import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
// import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IVIdeoPlayerProps {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri = '', paused}: IVIdeoPlayerProps) => {
  const [muted, setMuted] = useState(true);
  return (
    <View>
      {/* <Video
        resizeMode="cover"
        source={{uri: uri}}
        repeat
        paused={paused}
        muted={muted}
        style={{width: '100%', aspectRatio: 1}}
      /> */}
      <Pressable
        style={{
          backgroundColor: 'black',
          padding: 10,
          position: 'absolute',
          bottom: 10,
          right: 10,
          borderRadius: 25,
        }}
        onPress={() => setMuted(v => !v)}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;
