/**
 * Created by LiangChao on 2018/2/20.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    TouchableOpacity,
    NativeModules,
    Alert,
    Image
} from 'react-native';

import {Button} from '@shoutem/ui';

export default class BasemapComponent extends Component {

    render() {
        return(
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={this._onPressButton}>
                <Image style={styles.icon}
                    source={require('../images/vec.png')}
                />
            </TouchableOpacity>
        );
    }

    _onPressButton = () =>{
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
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
    },
    icon:{
        borderColor:'#ff8447',
        borderWidth:1,
        borderRadius:5
    }
});

module.exports = BasemapComponent;