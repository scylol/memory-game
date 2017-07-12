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
    this.colorSwitchCounter = 1;
  }

  static route = {
    navigationBar: {
      title: "Main"
    }
  };

  componentDidMount() {
    this.switchColorAnimation();
  }

  switchColorAnimation() {
     setTimeout(() => {
        console.log(this.colorSwitchCounter);
        let selector = Math.floor(Math.random() * 3);
        if (selector === 0) {
          this.setState({
            top: true,
            middle: false,
            bottom: false,
            answerKey: [...this.state.answerKey, selector]
          });
        }
        else if (selector === 1) {
          this.setState({
            top: false,
            middle: true,
            bottom: false,
            answerKey: [...this.state.answerKey, selector]
          });
        }
        else if (selector === 2) {
          this.setState({
            top: false,
            middle: false,
            bottom: true,
            answerKey: [...this.state.answerKey, selector]
          });
        }
        this.colorSwitchCounter++;
        if (this.colorSwitchCounter < 5) {
           this.switchColorAnimation();
        }
     }, 2000) // change this to fit your needs.
  }

  goToRoute(routeName) {
    this.props.navigator.push(routeName, {answerKey: this.state.answerKey});
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
        <View style={{ flex: 1, backgroundColor: "blue" }} />
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 1, backgroundColor: "green" }} />
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
