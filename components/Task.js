import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { CheckBox } from 'react-native-elements'

class Task extends React.Component {
    state = {
        checked: false
    }
    render(){
        return(
            <View>
                <View>
                    <CheckBox onPress={()=>this.flipChecked()} title={this.props.task.date + ": " + this.props.task.text} checked={this.state.checked}/>
                </View>
        </View>
    )}

    flipChecked(){
        checked = !this.state.checked
        this.setState({
            checked
        })
    }
}



export default Task