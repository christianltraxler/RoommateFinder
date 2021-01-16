/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './components/SignUp.js';

const Stack = createStackNavigator();
/*
const App = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={StartPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
*/

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
          <View style={styles.body}>
            <View style={{flex: 2}}></View>
            <View style={{flex: 2}}></View>            
            <View style={styles.sectionContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.hLineContainer}>
              <View style={styles.hLine}/>
            </View>
            <View style={styles.sectionContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            
            <View style={{flex: 2}}></View>
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    borderWidth: 4,
    borderRadius: 100,
    backgroundColor: "black",

  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  body: {
    backgroundColor: "#E5E5E5",
    flex: 1,
  },
  sectionContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  hLine: {
    height: 1,
    borderColor: "black",
    borderWidth: 1,
    width: "75%",
    opacity: 0.5,
  },
  hLineContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
});

export default App;