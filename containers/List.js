import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import Task from '../components/Task'

class List extends React.Component {
    state = {
        
    }

    render(){
        return(
            <View>

                {this.allTasks()}

            </View>
        )
    }

    allTasks = () => {
        let mapped = this.props.tasks.map(task => <Task key={task.id} task={task} />)
        return mapped
    } 
        

}

export default List