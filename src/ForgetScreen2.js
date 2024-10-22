import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ForgetScreen2 = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={{
          uri: 'https://img.icons8.com/?size=100&id=60688&format=png&color=7950F2',
        }}
        style={{width: 100, height: 100, alignSelf: 'center', marginTop: 50}}
      />
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          marginLeft: 15,
          color: 'black',
          marginTop: 20,
          textAlign: 'center',
        }}>
        Check your mail
      </Text>
      <Text
        style={{
          marginTop: 20,
          marginLeft: 15,
          marginRight: 10,
          fontSize: 20,
          color: 'grey',
          textAlign: 'center',
        }}>
        We have sent a password recover instructions to your email.
      </Text>

      <TouchableOpacity
        style={{
          marginTop: 30,
          marginLeft: 100,
          fontSize: 18,
          width: 200,
          height: 60,
          borderRadius: 10,
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: 'mediumpurple',
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 15,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Open email app
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          padding: 15,
          fontSize: 20,
          fontWeight: 'bold',
          color: 'grey',
          marginTop: 20,
        }}>
        Skip,I'll confirm later
      </Text>
      <View style={{marginTop: 100}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'grey',
            marginLeft:10,
          }}>
          Did not receive the email? Check your spam filter, or
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'mediumpurple',
            marginLeft: 5,

          }}>
          try another email address
        </Text>
      </View>
    </View>
  );
};

export default ForgetScreen2;

const styles = StyleSheet.create({});
