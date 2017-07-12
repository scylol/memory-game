import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { Container, Content, Button } from "native-base";

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.goToRoute = this.goToRoute.bind(this);
  }

  static route = {
    navigationBar: {
      title: "Home"
    }
  };

  goToRoute(routeName) {
    this.props.navigator.push(routeName);
  }

  render() {
    return (
      
         <Button onPress={() => this.goToRoute("main")} block info title="Start" />
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;

