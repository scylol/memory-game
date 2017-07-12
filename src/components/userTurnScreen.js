import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { Container, Content, Button } from "native-base";

class UserTurnScreen extends Component {
  constructor() {
    super();

    this.goToRoute = this.goToRoute.bind(this);
  }

  static route = {
    navigationBar: {
      title: "User Turn"
    }
  };

  goToRoute(routeName) {
    this.props.navigator.push(routeName);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "powderblue" }} />
        <View style={{ flex: 1, backgroundColor: "skyblue" }} />
        <View style={{ flex: 1, backgroundColor: "steelblue" }} />
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
