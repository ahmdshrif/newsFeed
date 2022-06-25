import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {defaultImageUri} from '../../constants';
import {newsFeedInterface} from '../../types';

interface propsTypes {
  route: {params: {data: newsFeedInterface}};
}
export default function Details(props: propsTypes) {
  const {data} = props.route.params;
  const [isImageError, setIsImageError] = React.useState(false);

  return (
    <View style={styles.container}>
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
      <ScrollView contentContainerStyle={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.subInfo}>
          {data.author && (
            <Text style={styles.author}> {`Author ${data.author}`}</Text>
          )}
          {data.publishedAt && (
            <Text style={styles.time}> {`time:  ${data.publishedAt}`}</Text>
          )}
          {data.source?.name && (
            <Text style={styles.source}>
              {' '}
              {`source:  ${data.source?.name}`}
            </Text>
          )}
        </View>
        <View />
        <Text style={styles.content}>{data.content}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
  },
  image: {
    borderWidth: 0.2,
    borderColor: 'black',
    height: 250,
  },
  imageContainer: {
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  author: {
    color: 'black',
    fontSize: 10,
  },
  time: {
    color: 'black',
    fontSize: 10,
  },
  source: {
    color: 'black',
    fontSize: 10,
  },
  subInfo: {
    marginVertical: 12,
    marginHorizontal: 5,
    width: '100%',
    alignItems: 'flex-start',
  },
  content: {
    color: 'black',
    fontSize: 14,
  },
  textContainer: {
    alignItems: 'center',
    padding: 5,
    minHeight: 50,
  },
});
