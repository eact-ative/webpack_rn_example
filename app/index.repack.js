/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {ScriptManager, Script} from '@callstack/repack/client';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import App from './App';
import {name as appName} from './app.json';

ScriptManager.shared.addResolver(async scriptId => {
  
    if (__DEV__) {
      return {
        url: webpackContext =>  {
          console.log('-----', `${webpackContext.p.replace('0.0.0.0', '10.20.0.18')}${webpackContext.u(scriptId)}`)
          return `${webpackContext.p.replace('0.0.0.0', '10.20.0.18')}${webpackContext.u(scriptId)}`
        },
        cache: false,
      };
    }
  
    if (localChunks.includes(scriptId)) {
      return {
        url: Script.getFileSystemURL(scriptId),
      };
    }
  });
AppRegistry.registerComponent(appName, () => App);
