/**
 * Created by LiangChao on 2018/2/19.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    TextInput,
    NativeModules,
    View,
    Text,
    DeviceEventEmitter
} from 'react-native';

import {Button} from '@shoutem/ui';

export default class searchTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return(
            <View style={styles.flex}>
                <View style={[styles.flexDirection, styles.inputHeight]}>
                    <View style={styles.flex}>
                        <TextInput
                            style={styles.input}
                            returnKeyType="search"
                            placeholder="请输入关键字"
                            onChangeText={(text) => this.setState({text})}/>
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.search} onPress={this.search.bind(this)}>搜索</Text>
                    </View>
                </View>
            </View>
        )
    }

    //搜索按钮点击
    search(){
        alert("您输入的内容为："+this.state.text);
        DeviceEventEmitter.emit('Msg','此消息来自于子组件，DeviceEventEmitter父');
    }
}

searchTextInput.propTypes={
    onSearchComplete:PropTypes.func
}

//样式定义
const styles = StyleSheet.create({
    flex:{
        flex: 1,
    },
    flexDirection:{
        flexDirection:'row'
    },
    topStatus:{
        marginTop:25,
    },
    inputHeight:{
        height:45,
    },
    input:{
        height:45,
        borderWidth:1.5,
        marginLeft: 5,
        paddingLeft:5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    btn:{
        width:55,
        marginLeft:-5,
        marginRight:5,
        backgroundColor:'#23BEFF',
        height:45,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:4
    },
    search:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    },
    tip:{
        marginLeft: 5,
        marginTop: 5,
        color: '#C0C0C0',
    }
});
