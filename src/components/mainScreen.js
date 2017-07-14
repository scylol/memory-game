import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Button, Animated } from "react-native";
import {setAllFalse, setTopTrue, setMidTrue, setBotTrue, increaseDifficulty,resetAnswerKey} from '../actions/actions';

import FadeInView from './fadeInView';
class MainScreen extends Component {
  constructor(props) {
    super(props);
    

    
    this.colorSwitchCounter = 0;
  }

  static route = {
    navigationBar: {
      title: "Main",
       visible: false
    }
  };

  componentDidMount() {
    this.props.dispatch(resetAnswerKey());
    this.switchColorAnimation();
  }

  switchColorAnimation() {
     setTimeout(() => {
        // console.log(this.colorSwitchCounter);
        let selector = Math.floor(Math.random() * 3);
        console.log(selector)
         this.props.dispatch(setAllFalse(selector));
        if (selector === 0) {
          this.props.dispatch(setTopTrue(selector));
        }
        else if (selector === 1) {
          this.props.dispatch(setMidTrue(selector));
        }
        else if (selector === 2) {
          this.props.dispatch(setBotTrue(selector));
        }
        
        this.colorSwitchCounter++;
        if (this.colorSwitchCounter < this.props.difficulty) {
          this.switchColorAnimation();
        }
        else {
          setTimeout(() => {
           this.props.dispatch(setAllFalse());
          
          setTimeout(() => {
            this.props.navigator.push('userTurn');
           }, 1000)
           
          }, 1000)
         
         
         
        }
     }, 1000) // change this to fit your needs.
  }
// 
 

  render() {
    if (this.props.top === true) {
      return (
        <View style={{ flex: 1 }}>
          <FadeInView style={{ flex: 1, backgroundColor: "#67BCDB" }}> 
           <Text style={styles.currentLevel}>Level {this.props.difficulty-2}</Text>
          </FadeInView>
          <View style={{ flex: 1, backgroundColor: "#E44424" }} />
          <View style={{ flex: 1, backgroundColor: "#A2AB58" }} />
          
        </View>
      );
    } else if (this.props.middle === true) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "#67BCDB" }}> 
          <Text style={styles.currentLevel}>Level {this.props.difficulty-2}</Text>
          </View>
          <FadeInView style={{ flex: 1, backgroundColor: "#E44424" }} />
          <View style={{ flex: 1, backgroundColor: "#A2AB58" }} />
         
        </View>
      );
    } else if (this.props.bottom === true) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "#67BCDB" }}>
          <Text style={styles.currentLevel}>Level {this.props.difficulty-2}</Text>
           </View>
          <View style={{ flex: 1, backgroundColor: "#E44424" }} />
          <FadeInView style={{ flex: 1, backgroundColor: "#A2AB58" }} />
          
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#67BCDB" }}> 
        <Text style={styles.currentLevel}>Level {this.props.difficulty-2}</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#E44424" }} />
        <View style={{ flex: 1, backgroundColor: "#A2AB58" }} />
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  currentLevel: {
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 30,
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => ({
  top: state.top,
  middle: state.middle,
  bottom: state.bottom,
  answerKey: state.answerKey,
  difficulty: state.difficulty
})

export default connect(mapStateToProps)(MainScreen);

