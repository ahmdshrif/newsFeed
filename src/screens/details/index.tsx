import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {defaultImageUri} from '../../constants';
import {newsFeedInterface} from '../../types';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';

interface propsTypes {
  route: {params: {data: newsFeedInterface}};
}
export default function Details(props: propsTypes) {
  let {data} = props.route.params;
  data = data ?? props.route.params;
  const [isImageError, setIsImageError] = React.useState(false);
  const {colors} = useTheme();
  const {t} = useTranslation();

  const SubText = ({children}: {children: any}) => (
    <Text style={[styles.subtitle, {color: colors.text}]}>{children} </Text>
  );
  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              data?.urlToImage && !isImageError
                ? data.urlToImage
                : defaultImageUri,
          }}
          onError={() => setIsImageError(true)}
        />
      </View>
      <ScrollView contentContainerStyle={styles.textContainer}>
        <Text style={[styles.title, {color: colors.text}]}>{data.title}</Text>
        <View style={styles.subInfo}>
          {data.author && <SubText>{`${t('author')}: ${data.author}`}</SubText>}
          {data.publishedAt && (
            <SubText>{`${t('time')}: ${data.publishedAt}`}</SubText>
          )}
          {data.source?.name && (
            <SubText>{`${t('source')}: ${data.source?.name}`}</SubText>
          )}
        </View>
        <View />
        <Text style={[styles.content, {color: colors.text}]}>
          {data.content}
        </Text>
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
  subtitle: {
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
    height: '100%',
  },
});
