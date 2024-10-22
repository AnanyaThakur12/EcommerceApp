import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function SignUp({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.pheading}>Create your account</Text>

        <View style={styles.viewtag}>
          <Icon name="user" color="grey" size={25} />
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="Username"
          />
        </View>
        <View style={styles.viewtag}>
          <FontIcon name="email" color="grey" size={25} />
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="Email"
          />
        </View>
        <View style={styles.viewtag}>
          <MaterialIcon name="password" color="grey" size={25} />
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="Password"
          />
        </View>
        <View style={styles.viewtag}>
          <MaterialIcon name="password" color="grey" size={25} />
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="Confirm Password"
          />
        </View>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Or</Text>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Sign in with Google</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              marginLeft: 10,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logintext}>Login</Text>
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
    backgroundColor: 'white',
  },
  viewtag: {
    flexDirection: 'row',
    width: 300,
    height: 60,
    backgroundColor: '#EEE5F1',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  heading: {
    marginBottom: 10,
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: 38,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pheading: {
    color: 'grey',
    fontFamily: 'sans-serif',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    fontSize: 18,
    width: 250,
    height: 40,
    backgroundColor: '#EEE5F1',
    borderRadius: 30,
    paddingHorizontal: 15,
    color: 'black',
  },
  button1: {
    backgroundColor: '#ff69b4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 15,
    marginBottom: 10,
    width: 300,
    alignItems: 'center',
    height: 50,
  },
  button2: {
    borderWidth: 2,
    borderColor: '#ff69b4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 15,
    marginBottom: 20,
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

  buttonText2: {
    color: '#ff69b4',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: 'grey',
    fontFamily: 'sans-serif',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logintext: {
    color: '#ff69b4',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
});
