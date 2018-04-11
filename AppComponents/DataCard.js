/**
 * Created by LiangChao on 2018/4/5.
 */
'use strict';

import React, { Component } from 'react';
import {Card,Image,Subtitle,Caption} from '@shoutem/ui';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class DataCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card>
                <Image
                    styleName="medium-wide"
                    source={require('../images/datacard.png')}
                />
                <View styleName="content">
                    <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
                    <Caption>21 hours ago</Caption>
                </View>
            </Card>
        )
    }
}