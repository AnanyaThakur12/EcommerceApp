// HomeScreen.js
import React from 'react';
import SignUp from './SignUp';

import {Button, View, Text} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View>
      {/* <Text style={{fontSize: 30, color: 'black'}}>Home Page </Text> */}
      <Text style={{fontSize: 30, color: 'black', textAlign: 'center', marginBottom:30}}>
        Welcome to home page 
      </Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      {/* <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('SignUp')}
      /> */}
    </View>
  );
}
