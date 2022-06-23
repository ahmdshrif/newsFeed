import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import NewsCard from '../../components/NewsCard';
import fakedata from './fakeData.js';
const data = fakedata.articles;

const main = () => {
  //   const getMoreData = () => {};
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data}
        numColumns={2}
        renderItem={({item}) => (
          <NewsCard uri={item.urlToImage} header={item.title} />
        )}
        keyExtractor={item => item.title}
        // onEndReached={getMoreData}
        // ListFooterComponent={()=>isload?<ActivityIndicator/>:<></>}
        // onRefresh={getData}
      />
    </View>
  );
};

export default main;

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
