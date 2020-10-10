import React, { Component } from "react";
import styles from "./src/components/style";
// import styles from "../components/style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';


export default class LoginScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>

          <View style={styles.loginFormView}>

          <Text style={styles.logoText}>Register Tour</Text>

            <TextInput placeholder="Id" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <TextInput placeholder="Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <TextInput placeholder="Telephone Number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <TextInput placeholder="Sex" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>

            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Register"
            />
            
            <Text style={styles.register}>
                Back
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }

}