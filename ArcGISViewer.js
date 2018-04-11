import React, { Component } from 'react';
import {Button,Icon} from '@shoutem/ui';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    View,
    Text,
    Alert,
    DeviceEventEmitter
} from 'react-native';

import MapView from './ArcGISReactComponents/MapView';
import Point from './ArcGISJavascriptModels/Point';
import Search from './AppComponents/searchTextInput';
import PopupDialog , { SlideAnimation ,DialogTitle,DialogButton}from 'react-native-popup-dialog';
import DataViewComponent from './AppComponents/DataViewComponent';

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

        const slideAnimation = new SlideAnimation({
            slideFrom: 'bottom',
        });

        return (
            <View style={styles.container}>
                <MapView ref={mapView => {this._mapView = mapView; }}
                         style={styles.map}
                         viewPointCenter={viewPointCenter}
                         >
                </MapView>
                <View style={styles.button}>
                    <Search/>
                </View>
                <View style={styles.header}>
                    <Text>First part and </Text>
                    <Text>second part</Text>
                </View>
                <View style={styles.buttonaddData}>
                    <Button onPress={this._onButtonPress}>
                        <Icon name="plus-button"/>
                    </Button>
                </View>

                <PopupDialog width={0.8} height={500}
                             dialogTitle={<DialogTitle title="添加数据" />}
                             ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                             dialogAnimation={slideAnimation}
                >
                    <DataViewComponent/>
                        {/*<ScrollableTabView style={{backgroundColor:'yellow'}}*/}
                                           {/*tabBarBackgroundColor='#FF0000'*/}
                                           {/*initialPage={0}*/}
                                           {/*tabBarPosition='overlayTop'*/}
                                           {/*renderTabBar={() => <DefaultTabBar />}*/}
                        {/*>*/}
                            {/*<Text style={styles.textStyle} tabLabel='娱乐'>娱乐</Text>*/}
                            {/*<Text style={styles.textStyle} tabLabel='科技'>科技</Text>*/}
                            {/*<Text style={styles.textStyle} tabLabel='军事'>军事</Text>*/}
                            {/*<Text style={styles.textStyle} tabLabel='体育'>体育</Text>*/}
                        {/*</ScrollableTabView>*/}
                </PopupDialog>
            </View>
        );
    }

    componentDidMount(){
        this.msgListener = DeviceEventEmitter.addListener('Msg',(listenerMsg) => {
            // this.setState({
            //     listenerMsg:listenerMsg,
            // })
            //this.mapload();
        });
    }

    componentWillUnmount() {
        // 移除
        this.msgListener.remove();
    }

    _onButtonPress = () => {
        //Alert.alert("bbb");
        this.popupDialog.show();
        //this.popupDialog.show();
    };

    mapload(){
        Alert.alert("aaaa");
        this._mapView.mapLoad();
    }
}


//配置样式文件
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map:{
        flex:1
    },
    button:{
        width:240,
        height:66,
        position:'absolute',top:55,right:55
    },
    buttonaddData:{
        width:66,
        height:66,
        position:'absolute',bottom:55,left:55
    },
    header:{
        width:500,
        height:50,
        backgroundColor: 'blue',
        flex: 0.3,
        borderWidth:1,
        borderRadius:10,
        position:'absolute',top:15,left:15
    },
    basemap:{
        width:50,
        height:50,
        position:'absolute',top:20,left:20
    },textStyle: {
        flex: 1,
        fontSize:20,
        marginTop:60,
        textAlign:'center',
    }
});