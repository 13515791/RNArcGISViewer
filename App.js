/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
    NavigatorIOS,
  View,
    NativeModules,
} from 'react-native';

import MapView from './ArcGISReactComponents/MapView';
import SampleContainer from './AppComponents/SampleContainer'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
      //let {graphicsOverlays} = this.state;
    return (
        <NavigatorIOS
            style = {styles.container}
            initialRoute = {{
                title: 'ArcGIS RN Sample',
                component: SampleContainer
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    map:{
        flex:1
    }
});
