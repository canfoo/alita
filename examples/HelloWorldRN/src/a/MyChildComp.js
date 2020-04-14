import React from 'react'
import {View} from 'react-native'

export default class MyChildComp extends React.Component {


    render() {
        return this.props.children
        // return <View>{this.props.children}</View>

        return (
            <View>
                {this.props.children[2]}
                {this.props.children[1]}
                {this.props.children[0]}
            </View>
        )
    }
}