import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ForgetScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          marginLeft: 20,
          color: 'black',
          marginTop: 50,
        }}>
        Reset password
      </Text>
      <Text
        style={{
          marginTop: 20,
          marginLeft: 15,
          marginRight: 10,
          fontSize: 18,
          color: 'grey',
        }}>
        Enter the email associated with your account and we'll send an email
        with instructions to reset your password.
      </Text>

      <Text
        style={{marginTop: 20, marginLeft: 20, fontSize: 18, color: 'grey'}}>
        Email address
      </Text>
      <TextInput
        style={{
          marginTop: 10,
          marginLeft: 20,
          fontSize: 18,
          width: 350,
          height: 60,
          borderColor: 'lightgrey',
          borderWidth: 2,
          borderRadius: 10,
          color: 'black',
          paddingLeft: 15,
        }}
        placeholder="Enter your email here!"
        placeholderTextColor="grey"></TextInput>
      <TouchableOpacity
        style={{
          marginTop: 10,
          marginLeft: 20,
          fontSize: 18,
          width: 350,
          height: 60,
          borderRadius: 10,
          paddingLeft: 15,
          backgroundColor: 'mediumpurple',
        }}
        onPress={() => navigation.navigate('ForgetScreen2')}>
        <Text
          style={{
            textAlign: 'center',
            padding: 15,
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Send Instructions{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetScreen;

const styles = StyleSheet.create({});
