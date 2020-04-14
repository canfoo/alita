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

// import MyContext from './MyContext'
// import MyRefComp from './MyRefComp'
// import MyPropComp from './MyPropComp'
// import MyFunComp from './MyFunComp'
// import MyChildComp from './MyChildComp'
// import MyStyleComp from './MyStyleComp'
// import PlatformComp from './PlatformComp'
// import MyHoc from './MyHoc'

// import {Dic1, Dic21, Dic22, Dic3, Dic31, Dic32, DicFunc, DF3, DF1, DF2, DF4} from './dic'

// import styles from './styles';
// import Hi from '@areslabs/hi-rn'
// import {Hello} from '@areslabs/hello-rn/index'

// import {camelCase} from '@areslabs/stringutil-rn'

// // 测试导入json文件
// import info from './info'
// const info2 = require('./info')


// import {history} from '@areslabs/router'


class Acom extends Component {
    renderFun() {
        return this.props.children
    }
    render() {
         return (
            <View style={{height: 200}}>
                {this.renderFun()}
            </View>
         )
    }
}

export default class B extends Component {

    render() {
       
        return (
            <View style={{height: 600, backgroundColor: 'yellow'}}>
                <Acom>
                    <View style={{flex: 1, backgroundColor: 'orange'}}>123</View>
                </Acom>
                {/* <Acom>
                    <View style={{flex: 2, backgroundColor: 'blue'}}></View>
                    <View style={{flex: 3, backgroundColor: 'red'}}></View>
                </Acom> */}
            </View>
        )
    }
}
