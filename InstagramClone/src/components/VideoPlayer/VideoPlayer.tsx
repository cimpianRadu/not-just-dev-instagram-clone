import React, {useState} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IVIdeoPlayerProps {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri = '', paused}: IVIdeoPlayerProps) => {
  const [muted, setMuted] = useState(true);
  return (
    <View>
      <Video
        resizeMode="cover"
        source={{uri: uri}}
        repeat
        paused={paused}
        muted={muted}
        style={styles.video}
      />
      <Pressable style={styles.muteButton} onPress={() => setMuted(v => !v)}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color="white"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: 'black',
    padding: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 25,
  },
});

export default VideoPlayer;
