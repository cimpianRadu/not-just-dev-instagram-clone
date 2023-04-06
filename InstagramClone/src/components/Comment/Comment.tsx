import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import COLORS from '../../theme/colors';
import {IComment} from '../../Models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(prev => !prev);
  }
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
      <Pressable onPress={toggleLike} hitSlop={2}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? 'red' : COLORS.BLACK}
        />
      </Pressable>
    </View>
  );
};

export default Comment;
