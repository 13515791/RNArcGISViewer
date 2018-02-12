import React, { Component } from 'react';
import {  Button} from '@shoutem/ui';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    View,
    Text
} from 'react-native';

import SampleContainer from './AppComponents/SampleContainer';
import MapView from './ArcGISReactComponents/MapView';

export default class ArcGISViewer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <MapView ref={mapView => {this._mapView = mapView; }}
                         style={styles.map}>
                </MapView>
                <View style={styles.button}>
                    <Button>
                        <Text>test2</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map:{
        flex:1
    },
    button:{
        width:50,
        height:50,
        position:'absolute',top:20,left:20
    }
});