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
      title: "Home",
      visible: false
    }
  };

  goToRoute(routeName) {
    this.props.navigator.push(routeName);
  }

  render() {
    return (
      <View style={styles.view}>
      <Text style={styles.title}>Simone....The Simon Clone!</Text>
      <Button color='#E44424'
          onPress={() => this.goToRoute("main")}
          block
          info
          title="Start"
        />
        <Text style={styles.instructions}>Are you ready to test your memory?
        Watch very closely as each section lights up.
        Your goal is to remember the order they lit up
        in, then when it's your turn, you tap on the 
        sections in the correct order. It starts out easy,
        but gets harder everytime. Good Luck!
        </Text>
      </View>
    );
  }
}
//#A2AB58
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#67BCDB",
    padding: 25,
    justifyContent: 'center'
  },
  title: {
    color:'#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 46,
    paddingBottom: 25
  
  },
  instructions: {
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 25
  }

  
});

export default HomeScreen;
