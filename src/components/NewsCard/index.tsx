import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {defaultImageUri} from '../../constants';
import {newsFeedInterface} from '../../types';
import {useTheme} from '@react-navigation/native';

const screen = Dimensions.get('screen');

const NewsCard = ({
  data,
  onPress,
}: {
  data: newsFeedInterface;
  onPress: Function;
}) => {
  const [isImageError, setIsImageError] = React.useState(false);
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              data.urlToImage && !isImageError
                ? data.urlToImage
                : defaultImageUri,
          }}
          onError={() => setIsImageError(true)}
        />
      </View>
      <Pressable
        style={[styles.textContainer]}
        onPress={(event: Event) => onPress?.(event)}>
        <Text style={[styles.headerName, {color: colors.text}]}>
          {data.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: screen.width * 0.42,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    borderWidth: 0.2,
    borderColor: 'black',
    height: 100,
  },
  imageContainer: {
    height: 100,
    width: '100%',
  },
  headerName: {
    color: 'black',
    fontSize: 12,
  },
  textContainer: {
    alignItems: 'center',
    padding: 5,
    minHeight: 50,
  },
});
