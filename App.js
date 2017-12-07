/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export default class App extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      counter1: 0,
      counter2: 0,
     }
  }

  onPressCounter1 = () => {
    this.setState({
      counter1: this.state.counter1+1
    })
  }

  onPressCounter2 = () => {
    this.setState({
      counter2: this.state.counter2+1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressCounter1}>
          <Text> increase counter 1 </Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
             { this.state.counter1 !== 0 ? this.state.counter1: null}
           </Text>
         </View>
         <TouchableOpacity
           style={styles.button}
           onPress={this.onPressCounter2}>
           <Text> increase counter 2 </Text>
         </TouchableOpacity>
         <View style={[styles.countContainer]}>
           <Text style={[styles.countText]}>
              { this.state.counter2 !== 0 ? this.state.counter2: null}
            </Text>
          </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
