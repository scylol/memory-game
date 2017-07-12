import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
// import { Container, Content, Button } from "native-base";

class UserTurnScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      failed: false,
      testArray: [0, 0, 0, 0, 0]
    };
    this.goToRoute = this.goToRoute.bind(this);
    this.topPressed = this.topPressed.bind(this);
    this.midPressed = this.midPressed.bind(this);
    this.botPressed = this.botPressed.bind(this);
  }

  static route = {
    navigationBar: {
      title: "User Turn"
    }
  };

  goToRoute(routeName) {
    this.props.navigator.push(routeName);
  }

  topPressed() {
    console.log("top pressed");
    let i = 0;
    console.log(this.state.index)
    if (i !== this.state.testArray[this.state.index]) {
      this.setState({ failed: true });
    }
    this.setState({ index: this.state.index + 1 });
  }
  midPressed() {
    console.log("mid pressed");
    let i = 1;
    if (i !== this.state.testArray[this.state.index]) {
      this.setState({ failed: true });
    }
    this.setState({ index: this.state.index + 1 });
  }
  botPressed() {
    console.log("bot pressed");
    let i = 2;
    if (i !== this.state.testArray[this.state.index]) {
      this.setState({ failed: true });
    }
    this.setState({ index: this.state.index + 1 });
  }

  render() {
    if (this.state.failed) {
      return (
        <View style={{ flex: 1 }}>
          <Text> You failed!!!</Text>
          <Button
            onPress={() => this.goToRoute("home")}
            block
            info
            title="Home"
          />
        </View>
      );
    }

    if (this.state.index === this.state.testArray.length) {
      return (
        <View style={{ flex: 1 }}>
          <Text> Congrats!!! You Won!!!!!!!!! </Text>
          <Button
            onPress={() => this.goToRoute("home")}
            block
            info
            title="Home"
          />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "blue" }}
          onPress={this.topPressed}
        />
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "red" }}
          onPress={this.midPressed}
        />
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "green" }}
          onPress={this.botPressed}
        />
        <Button
          onPress={() => this.goToRoute("home")}
          block
          info
          title="Home"
        />
      </View>
    );
  }
}

export default UserTurnScreen;

//Fill up an array with the selector for each iteration IE [0,1,1,2,2]
//Then When its the users turn each div will have the same number attached to it as the selector
//top will be 0, middle will be 1, bottom will be 2
//Have a counter in the state set to 0
// check the number corresponding to the div IE 0 for the top div
// to the answerKey[counter]
//if its the same do nothing, if its different notify the user they lost
//increment the counter
//if counter is greater than array length than that means the user has gotten them all right
// show a YOU WON!!! notification at this time.

//ask how to pass state to other component without rendering it
