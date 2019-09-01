/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MyApp from './src/config_/MyApp'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyApp);
