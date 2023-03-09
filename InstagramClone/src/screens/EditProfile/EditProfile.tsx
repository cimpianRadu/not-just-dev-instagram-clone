import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import user from '../../assests/data/user.json';
import {useForm, Control, Controller} from 'react-hook-form';
import {IUser} from '../../Models';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

type IEditableUserFields = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserFields>;

interface ICustomInputPorps {
  label: string;
  multiline?: boolean;
  control: Control<IEditableUser, object>;
  name: IEditableUserFields;
  rules?: object;
}

const CustomInput = ({
  label,
  name,
  multiline = false,
  control,
  rules = {},
}: ICustomInputPorps) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={{flex: 1}}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                multiline={multiline}
                style={[
                  styles.input,
                  {borderBottomColor: !!error ? 'red' : 'deeppink'},
                ]}
                placeholder="Baga aici"
              />
              {!!error && (
                <Text style={{color: 'red'}}>{error.message || 'Error'}</Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const EditProfile = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      bio: user.bio,
    },
  });
  const onSubmit = (data: IEditableUser) => {};

  const onChangeProfilePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && !!assets.length) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangeProfilePhoto} style={styles.textButton}>
        Change user photo
      </Text>
      <CustomInput
        rules={{required: 'Name is required'}}
        control={control}
        label="Name"
        name="name"
      />
      <CustomInput
        rules={{required: 'Username is required'}}
        control={control}
        label="Username"
        name="username"
      />
      <CustomInput
        rules={{required: 'Website is required'}}
        control={control}
        label="Website"
        name="website"
      />
      <CustomInput
        rules={{required: 'Bio is required'}}
        control={control}
        multiline
        label="Bio"
        name="bio"
      />

      <Text onPress={handleSubmit(onSubmit)}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: 'red',
    fontWeight: '700',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  label: {
    width: 75,
  },
  input: {
    height: 30,
    borderBottomWidth: 2,
  },
});

export default EditProfile;
