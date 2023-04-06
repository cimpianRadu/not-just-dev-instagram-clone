import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import user from '../../assests/data/user.json';
import fonts from '../../theme/fonts';
import Button from '../../components/Button';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.avatar} />
        <View style={styles.numberContaienr}>
          <Text style={styles.numberText}>90</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContaienr}>
          <Text style={styles.numberText}>90</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContaienr}>
          <Text style={styles.numberText}>90</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text>{user.name}</Text>
      <Text>{user.bio}</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button text="Edit Profile" />
        <Button text="Whatever" />
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <FlatList
      ListHeaderComponent={<ProfileHeader />}
      data={user.posts}
      keyExtractor={item => item.id}
      numColumns={3}
      style={{marginHorizontal: -1}}
      renderItem={({item}) => (
        <Image
          source={{uri: item.image || item.images[0]}}
          style={{flex: 1, aspectRatio: 1, margin: 1, maxWidth: '33.33%'}}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  numberContaienr: {
    alignItems: 'center',
  },
  numberText: {
    fontSize: fonts.SIZE.MD,
  },
  name: {
    fontWeight: fonts.WEIGHT.bold,
  },
});

export default ProfileScreen;
