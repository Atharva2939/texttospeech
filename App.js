import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,Alert
} from 'react-native';
import * as Speech from 'expo-speech'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name:""
    };
  }
  speak=()=>{
    var thingToSay=this.state.name
    Speech.speak(thingToSay)
  }
  render() {
    return (
      <View style={styles.container}>
      <TextInput
          style={styles.inputBox}
          onChangeText={name => {
            this.setState({ name: name });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {this.speak()}}>
          <Text>Go</Text>
          </TouchableOpacity>
      </View>
    )

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
})