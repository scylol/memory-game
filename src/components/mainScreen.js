import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { Container, Content, Button } from "native-base";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false,
      middle: false,
      bottom: false,
      answerKey: []
    };
    this.goToRoute = this.goToRoute.bind(this);
  }

  static route = {
    navigationBar: {
      title: "Main"
    }
  };

  componentDidMount() {
    for (let i = 0; i < 5; i++) {
      let selector = Math.floor(Math.random() * 3);
      console.log(selector);
      setTimeout(() => {
        if (selector === 0) {
          this.setState({
            top: true,
            middle: false,
            bottom: false,
            answerKey: [...this.state.answerKey, selector]
          });
        }
      }, 2000);
      setTimeout(() => {
        if (selector === 1) {
          this.setState({
            top: false,
            middle: true,
            bottom: false,
            answerKey: [...this.state.answerKey, selector]
          });
        }
      }, 2000);
      setTimeout(() => {
        if (selector === 2) {
          this.setState({
            top: false,
            middle: false,
            bottom: true,
            answerKey: [...this.state.answerKey, selector]
          });
        }
      }, 2000);
    }
  }

  goToRoute(routeName) {
    this.props.navigator.push(routeName);
    console.log(this.state.answerKey)
  }

  render() {
    if (this.state.top === true) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "black" }} />
          <View style={{ flex: 1, backgroundColor: "skyblue" }} />
          <View style={{ flex: 1, backgroundColor: "steelblue" }} />
          <Button
            onPress={() => this.goToRoute("userTurn")}
            block
            info
            title="You're Turn"
          />
        </View>
      );
    } else if (this.state.middle === true) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "powderblue" }} />
          <View style={{ flex: 1, backgroundColor: "black" }} />
          <View style={{ flex: 1, backgroundColor: "steelblue" }} />
          <Button
            onPress={() => this.goToRoute("userTurn")}
            block
            info
            title="You're Turn"
          />
        </View>
      );
    } else if (this.state.bottom === true) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "powderblue" }} />
          <View style={{ flex: 1, backgroundColor: "skyblue" }} />
          <View style={{ flex: 1, backgroundColor: "black" }} />
          <Button
            onPress={() => this.goToRoute("userTurn")}
            block
            info
            title="You're Turn"
          />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "powderblue" }} />
        <View style={{ flex: 1, backgroundColor: "skyblue" }} />
        <View style={{ flex: 1, backgroundColor: "steelblue" }} />
        <Button
          onPress={() => this.goToRoute("userTurn")}
          block
          info
          title="You're Turn"
        />
        
      </View>
    );
  }
}

export default MainScreen;


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
