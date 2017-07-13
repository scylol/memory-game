import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Animated } from "react-native";
// import { Container, Content, Button } from "native-base";

import FadeInView from './fadeInView';
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false,
      middle: false,
      bottom: false,
      answerKey: [],
      difficulty: 3
    };

    this.goToRoute = this.goToRoute.bind(this);
    this.colorSwitchCounter = 0;
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
        // console.log(this.colorSwitchCounter);
        let selector = Math.floor(Math.random() * 3);
        console.log(selector)
         this.setState({
            top: false,
            middle: false,
            bottom: false
          });
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
        if (this.colorSwitchCounter < this.state.difficulty) {
          this.switchColorAnimation();
        }
        else {
          setTimeout(() => {
            this.setState({
            top: false,
            middle: false,
            bottom: false,
            difficulty: this.state.difficulty + 1
          });
          console.log(this.state.difficulty)
          
           setTimeout(() => {
            this.props.navigator.push('userTurn', {answerKey: this.state.answerKey});
           }, 500)
           
          }, 1000)
         
         
         
        }
     }, 1000) // change this to fit your needs.
  }
// 
  goToRoute(routeName) {
    
    console.log(this.state.answerKey)
  }

  render() {
    if (this.state.top === true) {
      return (
        <View style={{ flex: 1 }}>
          <FadeInView style={{ flex: 1, backgroundColor: "#67BCDB" }} />
          <View style={{ flex: 1, backgroundColor: "#E44424" }} />
          <View style={{ flex: 1, backgroundColor: "#A2AB58" }} />
          
        </View>
      );
    } else if (this.state.middle === true) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "#67BCDB" }} />
          <FadeInView style={{ flex: 1, backgroundColor: "#E44424" }} />
          <View style={{ flex: 1, backgroundColor: "#A2AB58" }} />
         
        </View>
      );
    } else if (this.state.bottom === true) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "#67BCDB" }} />
          <View style={{ flex: 1, backgroundColor: "#E44424" }} />
          <FadeInView style={{ flex: 1, backgroundColor: "#A2AB58" }} />
          
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#67BCDB" }} />
        <View style={{ flex: 1, backgroundColor: "#E44424" }} />
        <View style={{ flex: 1, backgroundColor: "#A2AB58" }} />
        

      </View>
    );
  }
}

export default MainScreen;

