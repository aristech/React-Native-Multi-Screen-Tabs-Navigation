/**
 * @format
 */
// import {YellowBox} from 'react-native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//TODO:CHECK NOT USING THIS LIFECYCLE METHODS. Ignoring change of lifecycle react-native
// YellowBox.ignoreWarnings([
//   'Warning: componentWillMount is deprecated',
//   'Warning: componentWillReceiveProps is deprecated',
//   'Warning: componentWillUpdate is deprecated',
// ]);
AppRegistry.registerComponent(appName, () => App);
