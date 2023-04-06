import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import COLORS from '../../theme/colors';
import Comment from '../Comment';
import {IPost} from '../../Models';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';

interface IPostProps {
  post: IPost;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IPostProps) => {
  const [isLike, setIsLike] = useState(false);

  const onToggleLike = () => {
    setIsLike(v => !v);
  };

  let content = null;

  if (post.image) {
    content = (
      <DoublePressable onPress={onToggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={onToggleLike} />;
  } else if (post.video) {
    content = (
      <DoublePressable onPress={onToggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />

        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {content}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLike ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={COLORS.BLACK}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={COLORS.BLACK}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={COLORS.BLACK}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={COLORS.BLACK}
          />
        </View>
        <Text>
          Liked by <Text style={styles.boldLink}>username</Text> and{' '}
          <Text style={styles.boldLink}>{post.nofLikes}</Text>
        </Text>
        <Text>
          <Text style={styles.boldLink}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        {post.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}

        <Text>View all 16 commetns</Text>

        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
