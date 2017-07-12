import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
// import { Container, Content, Button } from "native-base";



class UserTurnScreen extends Component {
  constructor(props) {
    super(props);

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

  onPressButton() {
    console.log("button pressed");
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: "powderblue" }} onPress={this.onPressButton} />
        <TouchableOpacity style={{ flex: 1, backgroundColor: "skyblue" }} onPress={this.onPressButton} />
        <TouchableOpacity style={{ flex: 1, backgroundColor: "steelblue" }} onPress={this.onPressButton} />
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
