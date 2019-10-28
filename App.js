import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import _ from 'lodash'
import { CheckBox } from 'react-native-elements'
// import AppNavigator from "./navigation/MainTabNavigator";
// import { Provider } from 'react-redux';
import List from './containers/List'
import SignUp from './components/SignUp'

class App extends React.Component {
  state = {
    signedIn: false,
    showAdd: false,
    date: '',
    text: '',
    tasks: [
      {
        id: 1,
        date: "10/31",
        text: "This is Halloween"
      }
    ]
  }
  render() {
    return (
      <View>
        {this.decideRender()}
      </View>
    )
  }



  decideRender = () => {
    if (this.state.signedIn){
       return (<SignUp signInSomeone={this.signInSomeone()} />)
    } else if(this.state.showAdd){
      return (
        <SafeAreaView style={styles.container}>
          <Text style={{ color: 'white' }}>Sign Up!</Text>
          <View style={{flex: 1}}>

            <View style={styles.formContainer}>
              <TextInput placeholder="Date" onChangeText={date => this.setState({ date })} style={styles.input} autoCapitalize="none" />
              <TextInput placeholder="Text" onChangeText={text => this.setState({ text })} style={styles.input} autoCapitalize="none" />
              <Button onClick={() => this.handleSubmit()} title="Submit" onPress={this.handleSubmit} style={styles.input} autoCapitalize="none" />
            </View>
          </View>
        </SafeAreaView>
      )
    } else {
      return(
        <SafeAreaView >
          <List  
          tasks={this.state.tasks}/>
          <CheckBox 
          
            center
            title='Click Here to add another list item'
            iconRight
            iconType='material'
            checkedIcon='clear'
            uncheckedIcon='add'
            checkedColor='red'
            onPress={() => this.changeShowAdd()}
            />
        </SafeAreaView>
      )
    }
  }

  signInSomeone = () => {
    this.setState({
      signedIn: true
    })
  }
  changeShowAdd = () => {
    let changed = !this.state.showAdd
    this.setState({
      showAdd: changed
    })
  }


  handleNewTask = (obj) => {
    console.log("clicked") 
    let updatedList = [...this.state.tasks, obj]
    this.setState({
      tasks: updatedList
    })
  }

}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(53, 60, 80)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    width: '100%'
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: "80%"
  }
});
