import React, { Component } from 'react';
import {Button} from '@shoutem/ui';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    View,
    Text,
    Alert
} from 'react-native';

import SampleContainer from './AppComponents/SampleContainer';
import MapView from './ArcGISReactComponents/MapView';
import Point from './ArcGISJavascriptModels/Point';
import Basemap from './AppComponents/BasemapComponent';

export default class ArcGISViewer extends Component {

    constructor(props) {
        super(props);
        //获取文件配置
        let baseconfig=require('./config/config.json');
        this.initExtent=baseconfig.initialextent;
        //let esriPoint = Point.pointWebMercator(this.initExtent[0].x,this.initExtent[0].y);
        let esriPoint1 = Point.pointWGS84(41.057,-123.196);
        this.states={viewPointCenter:esriPoint1,mapconfig:baseconfig};
    }

    render() {

        let {viewPointCenter,mapconfig} = this.states;

        return (
            <View style={styles.container}>
                <MapView ref={mapView => {this._mapView = mapView; }}
                         style={styles.map}
                         viewPointCenter={viewPointCenter}
                         >
                </MapView>
                <View style={styles.button}>
                    <Basemap style={styles.basemap}></Basemap>
                </View>
            </View>
        );
    }

    componentDidMount(){
        //Alert.alert("akakak");
        this._mapView.mapLoad();
    }

    _onButtonPress = () => {
        // let message=this.initExtent;
        // Alert.alert(this.initExtent);
        this._mapView.mapLoad();
    };
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map:{
        flex:1
    },
    button:{
        width:66,
        height:66,
        position:'absolute',top:50,right:50
    },
    basemap:{
        width:50,
        height:50,
        position:'absolute',top:20,left:20
    }
});