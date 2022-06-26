import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Picker} from '@react-native-picker/picker';
import i18n from 'i18next';
import {useTheme} from '@react-navigation/native';

export default function Details() {
  const {t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>();
  const {colors} = useTheme();
  // const [isDarkMode, setIsDarkMode] = useState(colors.background === 'black');
  const changeLanguage = (value: string | undefined) => {
    if (!value) {
      return;
    }
    setSelectedLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.SwitchSection}>
        <View style={styles.SwitchSectionLeft}>
          <Text style={[styles.label, {color: colors.text}]}>
            {'isDarkMode'}
          </Text>
        </View>
        <View style={styles.SwitchSectionRight}>
          <Switch onValueChange={setIsDarkMode} value={isDarkMode} />
        </View>
      </View> */}
      <View style={styles.section}>
        <Text style={[styles.label, {color: colors.text}]}>
          {t('language')}
        </Text>
        <Picker
          style={{
            ...styles.picker,
            backgroundColor: colors.card,
            borderColor: colors.border,
            color: colors.text,
          }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, _) => changeLanguage(itemValue)}>
          <Picker.Item color={colors.text} label={t('english')} value="en" />
          <Picker.Item color={colors.text} label={t('french')} value="fr" />
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
    minWidth: 100,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 10,
    marginVertical: 4,
    padding: 10,
  },
  SwitchSection: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  SwitchSectionLeft: {},
  SwitchSectionRight: {
    paddingRight: 10,
  },
});
