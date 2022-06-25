import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function Details() {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('settings')} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
});
