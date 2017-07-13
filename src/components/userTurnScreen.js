import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import {resetDifficulty} from '../actions/actions'

class UserTurnScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      failed: false
    };
    this.goToRoute = this.goToRoute.bind(this);
    this.topPressed = this.topPressed.bind(this);
    this.midPressed = this.midPressed.bind(this);
    this.botPressed = this.botPressed.bind(this);
  }

  static route = {
    navigationBar: {
      title: "User Turn",
       visible: false
    }
  };

  goToRoute(routeName) {
    this.props.navigator.push(routeName);
  }

  topPressed() {
    console.log("top pressed");
    let i = 0;
    console.log(this.state.index)
    
    if (i !== this.props.answerKey[this.state.index]) {
      this.setState({ failed: true });
      this.props.dispatch(resetDifficulty());
    }
    this.setState({ index: this.state.index + 1 });
  }
  midPressed() {
    console.log("mid pressed");
    let i = 1;
    if (i !== this.props.answerKey[this.state.index]) {
      this.setState({ failed: true });
      this.props.dispatch(resetDifficulty());
    }
    this.setState({ index: this.state.index + 1 });
  }
  botPressed() {
    console.log("bot pressed");
    let i = 2;
    if (i !== this.props.answerKey[this.state.index]) {
      this.setState({ failed: true });
      this.props.dispatch(resetDifficulty());
    }
    this.setState({ index: this.state.index + 1 });
  }

  render() {
    if (this.state.failed) {
      return (
        <View style={styles.view}>
          <Text style={styles.feedback}> You failed!!!</Text>
          <Button color='#E44424'
            onPress={() => this.goToRoute("home")}
            block
            info
            title="Play Again!"
          />
        </View>
      );
    }

    if (this.state.index === this.props.answerKey.length) {
       return (
        <View style={styles.view}>
          <Text style={styles.feedback}> Nice Job! </Text>
          <Button color='#E44424'
            onPress={() => this.goToRoute("main")}
            block
            info
            title="Next Level!"
          />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "#67BCDB" }}
          onPress={this.topPressed}>
          <Text style={styles.yourTurn}>Your Turn!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "#E44424" }}
          onPress={this.midPressed}
        />
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "#A2AB58" }}
          onPress={this.botPressed}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#67BCDB",
    padding: 25,
    justifyContent: 'center'
  },
  feedback: {
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize: 36,
    paddingBottom: 25
  },
  yourTurn: {
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 30,
    fontWeight: 'bold'
  }

});

const mapStateToProps = state => ({
  answerKey: state.answerKey,
  difficulty: state.difficulty
})

export default connect(mapStateToProps)(UserTurnScreen);

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
