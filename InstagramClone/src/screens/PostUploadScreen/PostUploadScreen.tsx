import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  Camera,
  CameraType,
  FlashMode,
  CameraRecordingOptions,
  CameraPictureOptions,
  VideoQuality,
} from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>();
  const [comeraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const getPermision = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermision();
  }, []);

  if (hasPermissions === null) {
    return <Text>Loading..</Text>;
  }

  if (hasPermissions === false) {
    return <Text>No access to the camers</Text>;
  }

  function onFlipCamera() {
    setCameraType(currentCameraType =>
      currentCameraType === CameraType.back
        ? CameraType.front
        : CameraType.back,
    );
  }

  function flipFlash() {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex]);
  }

  async function takePicture() {
    if (!isCameraReady || !cameraRef.current || isRecording) {
      return;
    }
    const options: CameraPictureOptions = {
      quality: 0.5,
      base64: true,
      skipProcessing: true,
    };
    const res = await cameraRef.current.takePictureAsync(options);
  }

  async function startRecording() {
    if (!isCameraReady || !cameraRef.current || isRecording) {
      return;
    }

    const options: CameraRecordingOptions = {
      quality: VideoQuality['480p'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);
    try {
      const res = await cameraRef.current.recordAsync(options);
    } catch (er) {
      console.error('Error on recording', err);
    } finally {
      setIsRecording(false);
    }
  }

  function stopRecording() {
    if (isRecording) {
      cameraRef.current?.stopRecording();
      setIsRecording(false);
    }
  }

  return (
    <View style={styles.page}>
      <Camera
        ref={cameraRef}
        type={comeraType}
        style={styles.camera}
        ratio="4:3"
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={[styles.buttonsContainer, {top: 25}]}>
        <MaterialIcons name="close" size={30} color="white" />
        <Pressable onPress={flipFlash} hitSlop={8}>
          <MaterialIcons
            name={flashModeToIcon[flash]}
            size={30}
            color="white"
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color="white" />
      </View>
      <View style={[styles.buttonsContainer, {bottom: 25}]}>
        <MaterialIcons name="photo-library" size={30} color="white" />
        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {backgroundColor: isRecording ? 'blue' : 'grey'},
              ]}
            />
          </Pressable>
        )}
        <Pressable onPress={onFlipCamera}>
          <MaterialIcons name="flip-camera-ios" size={30} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  page: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: 'grey',
  },
});

export default PostUploadScreen;
