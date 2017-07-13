import React, { Component } from "react";
import { StyleSheet, Animated } from "react-native";

export default class FadeInView extends React.Component {
     constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1), // Initial value for opacity: 1
    };
    
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: .4,                   // Animate to opacity: .4 (opaque)
        duration: 500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}