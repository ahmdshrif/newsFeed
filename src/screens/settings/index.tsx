import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Picker} from '@react-native-picker/picker';
import i18n from 'i18next';

export default function Details() {
  const {t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>();
  const changeLanguage = (value: string | undefined) => {
    if (!value) {
      return;
    }
    setSelectedLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}> language </Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, _) => changeLanguage(itemValue)}>
          <Picker.Item label={t('english')} value="en" />
          <Picker.Item label={t('french')} value="fr" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  label: {
    fontSize: 20,
  },
  section: {
    width: '100%',
    padding: 10,
  },
  picker: {
    backgroundColor: '#F1F3F4',
    color: 'black',
    minWidth: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BABCBE',
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 10,
    marginVertical: 4,
    padding: 10,
  },
});
