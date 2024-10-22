import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function Login({navigation}) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const handlelogin = async () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    try {
      if (username === 'amit' && password === '1234') {
        await AsyncStorage.setItem('usertoken', 'pwdtoken');
        await AsyncStorage.setItem('username', username);
        Alert.alert('Success', 'Login successful');
        navigation.navigate('Content');
      } else {
        Alert.alert('Error', 'Invalid Credentials');
      }
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.pheading}>Enter your credentials to login</Text>
        <View style={styles.viewtag}>
          <Icon name="user" color="grey" size={25} />
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="Username"
            value={username}
            onChangeText={setusername}
          />
        </View>
        <View style={styles.viewtag}>
          <MaterialIcon name="password" color="grey" size={25} />
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setpassword}
          />
        </View>

        <TouchableOpacity style={styles.button1} onPress={handlelogin}>
          <Text style={styles.buttonText1}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgetScreen')}>
          <Text style={styles.text1}>Forgot password?</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 80,
          }}>
          <Text
            style={{
              marginLeft: 10,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signuptext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  heading: {
    marginTop: -80,
    marginBottom: 5,
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signuptext: {
    color: '#ff69b4',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
  pheading: {
    color: 'grey',
    fontFamily: 'sans-serif',
    fontSize: 16,
    marginBottom: 80,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  viewtag: {
    flexDirection: 'row',
    width: 300,
    height: 60,
    backgroundColor: '#EEE5F1',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 20,
    width: 250,
    height: 50,
    backgroundColor: '#EEE5F1',
    borderRadius: 30,
    paddingHorizontal: 15,
    color: 'black',
  },
  button1: {
    backgroundColor: '#ff69b4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 5,
    marginBottom: 20,
    width: '100%',
    width: 300,
    alignItems: 'center',
    height: 50,
  },
  buttonText1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    marginTop: 80,
    color: '#ff69b4',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  text2: {
    color: 'grey',
    fontFamily: 'sans-serif',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});
