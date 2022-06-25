import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, TextInput} from 'react-native';

import NewsCard from '../../components/NewsCard';
import {newsFeedInterface} from '../../types';
import {getTopNews, searchInNews} from '../../services/api';
import {useTranslation} from 'react-i18next';

const Main = ({navigation}: any) => {
  const [news, setNews] = useState<newsFeedInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const _getTopNews = async () => {
    setIsLoading(true);
    const data = await getTopNews();
    setNews(data);
    setIsLoading(false);
  };

  const _searchInNews = async (keyword: string) => {
    if (!keyword) {
      _getTopNews();
      return;
    }
    const data = await searchInNews(keyword);
    setNews(data);
  };

  useEffect(() => {
    _getTopNews();
  }, []);

  const renderItem = ({item}: {item: newsFeedInterface}) => (
    <NewsCard
      data={item}
      onPress={() => navigation.navigate('Details', {data: item})}
    />
  );
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <TextInput onChangeText={_searchInNews} placeholder={t('search')} />
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={news}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        refreshing={isLoading}
        onRefresh={_getTopNews}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
  listContainer: {
    width: '80%',
  },
  flatListContainer: {flexGrow: 1, alignItems: 'center'},
});
