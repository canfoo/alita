import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class MyChildComp extends React.Component {


    render() {
        // return this.props.children
        // return <View>{this.props.children}</View>

        return (
            <View>
                {/* <TouchableOpacity onLayout={(event)=>console.log('子组件', event.nativeEvent.layout)} style={{height: 30, width: 130, marginTop: 90, marginLeft: 20, backgroundColor: 'orange'}}> */}
                <TouchableOpacity  style={{height: 30, width: 130, marginTop: 90, marginLeft: 20, backgroundColor: 'orange'}}>
                    <Text>子组件</Text> 
                </TouchableOpacity>
            </View>

        )
    }
}