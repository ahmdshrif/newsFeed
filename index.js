/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import './ i18n.config';

AppRegistry.registerComponent(appName, () => App);
