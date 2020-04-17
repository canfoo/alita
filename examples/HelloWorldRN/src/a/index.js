import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {
    AppState,
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    SectionList,
    Image,
    Modal,
    MaskedViewIOS,
    Picker,
    Slider,
    Switch,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    StatusBar,
    RefreshControl,
    Platform,
} from 'react-native'

import MyContext from './MyContext'
import MyRefComp from './MyRefComp'
import MyPropComp from './MyPropComp'
import MyFunComp from './MyFunComp'
import MyChildComp from './MyChildComp'
import MyStyleComp from './MyStyleComp'
import PlatformComp from './PlatformComp'
import MyHoc from './MyHoc'

import {Dic1, Dic21, Dic22, Dic3, Dic31, Dic32, DicFunc, DF3, DF1, DF2, DF4} from './dic'

import styles from './styles';
import Hi from '@areslabs/hi-rn'
import {Hello} from '@areslabs/hello-rn/index'

import {camelCase} from '@areslabs/stringutil-rn'

// 测试导入json文件
import info from './info'
const info2 = require('./info')


import {history} from '@areslabs/router'







const item3 = <View style={[styles.item, {borderBottomWidth: 0}]}><Text style={styles.itemText}>item3</Text></View>
export default class A extends Component {
    onLayoutHandle(event) {
        console.log('onLayout', event.nativeEvent.layout)
    }
    render() {
        const array = [1,2,3,4,5]
        return (
            <View style={{flex: 1}} contentContainerStyle={{backgroundColor: '#fff'}}>

                <View
                    style={{backgroundColor: 'red', width: 100, marginLeft: 30}}
                    onLayout={this.onLayoutHandle.bind(this)}
                >
                    <Text>onLayout</Text>
                </View>
                {
                    array.map(item => (
                        <View
                            key={item}
                            style={{backgroundColor: 'yellow', width: 200, height: 80, marginTop: 10}}
                            onLayout={(event) => console.log(item, event.nativeEvent.layout)}
                        >
                            <Text>{item}</Text>
                        </View>
                    ))
                }

            </View>
        )
    }
}