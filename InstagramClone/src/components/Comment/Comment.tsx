import React from 'react';
import {View, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import COLORS from '../../theme/colors';
import {IComment} from '../../Models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image
          source={{uri: comment.user.image}}
          style={{width: 40, aspectRatio: 1, borderRadius: 20}}
        />
      )}
      <View style={{flex: 1, marginBottom: 10}}>
        <Text style={styles.commentText}>
          <Text style={styles.boldLink}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginHorizontal: 5}}>2 days</Text>
            <Text style={{marginHorizontal: 5}}>500 likes</Text>
            <Text style={{marginHorizontal: 5}}>Reply</Text>
          </View>
        )}
      </View>
      <AntDesign name={'hearto'} style={styles.icon} color={COLORS.BLACK} />
    </View>
  );
};

export default Comment;
