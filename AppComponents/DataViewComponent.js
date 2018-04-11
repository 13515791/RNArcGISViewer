/**
 * Created by LiangChao on 2018/4/4.
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native';

import {GridRow,ListView,TouchableOpacity,Card,Image,Subtitle,Tile,Title,Caption,Divider} from '@shoutem/ui';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class DataViewComponent extends Component {

    constructor(props) {
        super(props);
        let config=require('../config/config.json');
        this.baseDataconfig=config.dataconfig;
        this.renderRow = this.renderRow.bind(this);
    }

    //构建数据Tab分类
    renderTab() {
        let item=[];
        let tabs=[];
        let datas=[];
        for(var i=0;i<this.baseDataconfig.length;i++){
            let tab=this.baseDataconfig[i].group;
            //let mapDatas=React.Children.toArray(this.baseDataconfig[i].mapData);
            let keys=i.toString();
            item.push(tab);
            //tabs.push(tab);
            //datas.push(mapDatas);
        }
        return(
            item.map((tabname)=>this.renderTabitem(tabname))
        )
    }

    renderTabitem(tabname){

        let mapdata=[];

        for(var i =0;i<this.baseDataconfig.length;i++){
            if(tabname==this.baseDataconfig[i].group){
                mapdata=this.baseDataconfig[i].mapData;
            }
        }

        const groupedData = GridRow.groupByRows(mapdata, 4, () => {
            return 1;
        });


        return(
            <View key={tabname} tabLabel={tabname} style={{marginTop:50}}>
                <ListView initialListSize={10}
                    data={groupedData}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }

    renderRow(rowData) {

        const cellViews = rowData.map((rowData, id) => {
            return (
                <TouchableOpacity key={id} style={{width:210,height:190}} onPress={()=>{this.addMapData({rowData})}}>
                    <Card style={{width:205,height:190}}>
                        <Image style={{width:200,height:145}}
                            source={require('../images/data145*145.png')}
                        />
                        <View styleName="content">
                            <Subtitle numberOfLines={3}>{rowData.name}</Subtitle>
                            <View styleName="horizontal">
                                <Caption styleName="collapsible" numberOfLines={2}>{rowData.name}</Caption>
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
            );
        });

        return (
            <GridRow columns={4}>
                {cellViews}
            </GridRow>
        );
    }

    addMapData(id){
        alert(id.rowData.name);
    }

    render() {
        return(
            <ScrollableTabView

                                   initialPage={0}
                                   tabBarPosition='overlayTop'
                                   renderTabBar={() => <DefaultTabBar />}
            >
                {this.renderTab()}
                {/*<Text style={styles.textStyle} tabLabel='娱乐'>娱乐</Text>*/}
                {/*<Text style={styles.textStyle} tabLabel='科技'>科技</Text>*/}
                {/*<Text style={styles.textStyle} tabLabel='军事'>军事</Text>*/}
                {/*<Text style={styles.textStyle} tabLabel='体育'>体育</Text>*/}
            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
    flex: 1,
        fontSize:20,
        marginTop:60,
        textAlign:'center',
    }
});