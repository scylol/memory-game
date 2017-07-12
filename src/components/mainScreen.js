import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { Container, Content, Button } from "native-base";

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      top: false,
      middle: false,
      bottom: false
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
            bottom: false
          });
        }
      }, 2000);
      setTimeout(() => {
        if (selector === 1) {
          this.setState({
            top: false,
            middle: true,
            bottom: false
          });
        }
      }, 2000);
      setTimeout(() => {
        if (selector === 2) {
          this.setState({
            top: false,
            middle: false,
            bottom: true
          });
        }
      }, 2000);
    }
  }

  goToRoute(routeName) {
    this.props.navigator.push(routeName);
  }

  render() {
    if (this.state.top === true) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "black" }} />
          <View style={{ flex: 1, backgroundColor: "skyblue" }} />
          <View style={{ flex: 1, backgroundColor: "steelblue" }} />
          <Button
            onPress={() => this.startTheGame()}
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
            onPress={() => this.startTheGame()}
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
            onPress={() => this.startTheGame()}
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
          onPress={() => this.startTheGame()}
          block
          info
          title="You're Turn"
        />
      </View>
    );
  }
}

export default MainScreen;
