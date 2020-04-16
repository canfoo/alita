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
import MyChildComp from './MyChildComp'
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

export default class B extends Component {
    constructor() {
        super()
        this.state = {
            num: 1
        }
    }

    componentDidMount() {
        setInterval(() => {
            // console.log('this.setState', this.setState)
            this.setState({
                num: this.state.num + 1
            }, () => {
                // console.log('callback...', this)
            })
        }, 2000);
            //         this.setState({
            //     num: this.state.num + 1
            // }, () => {
            //     // console.log('callback...', this)
            // })
    }

    getLayout(event) {
        console.log('event11', event.nativeEvent.layout)
        // console.log('num', this.state.num)
    }

    render() {
        // console.log('_layoutEvents_', _layoutEvents_)
        return (
            <View  style={{height: 600, backgroundColor: 'yellow'}}>

                <View 
                    style={{height: 50, width: 100, marginLeft: 30, backgroundColor: 'red'}}
                    onLayout={this.getLayout.bind(this)}
                >
                {/* <View onLayout={(event)=>console.log('event11', event.nativeEvent.layout)}> */}
                                    <Text>kkkk {this.state.num}</Text>
                                </View>

                                {
                    this.state.num % 2 === 0  &&   <View onLayout={(event)=>console.log('event22', event.nativeEvent.layout)}>
                                    <Text>kkkk {this.state.num}</Text>
                                </View>
                }
                   <MyChildComp onLayout={(event)=>console.log('子组件22222', event.nativeEvent.layout)} />             
            </View>
        )
    }
}
