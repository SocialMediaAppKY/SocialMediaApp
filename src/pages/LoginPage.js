import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles';

const LoginPage = props => {
  // Kullanıcının e-posta ve şifresini state'te tutuyoruz
  const [usermail, setUserMail] = useState('');
  const [userpass, setPassword] = useState('');

  const setMail = text => setUserMail(text);
  const setPass = text => setPassword(text);

  const loginUser = async () => {
    // Kullanıcın girdiği mail ve şifreyi yakalayabiliyor muyuz kontrol
    // console.log(usermail, userpass);

    try {
      let response = await auth().signInWithEmailAndPassword(
        usermail,
        userpass,
      );

      // console.log(response.user);
      props.navigation.navigate('ListPage');

      // Kullanıcıyı uid'si ile telefon belleğine kaydediyoruz
      // Storage'da keyler büyük harfle yazılır ve genellikle başına @ işareti konur
      AsyncStorage.setItem('@USER_ID', auth().currentUser.uid);
    } catch (error) {
      // console.log(error);
      Alert.alert('MyApp', 'Bir hata oluştu');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View>
          <TextInput
            style={styles.login.input}
            placeholder="E-posta adresinizi giriniz..."
            placeholderTextColor="white"
            // Kullanıcı bilgilerini girdiğinde bunları set'in içine atayacağız
            onChangeText={setMail}
            keyboardType="email-address"
            autoCapitalize="none" // küçük harfle yazmaya başlaması için
          />

          <TextInput
            style={styles.login.input}
            placeholder="Şifrenizi giriniz..."
            placeholderTextColor="white"
            onChangeText={setPass}
            secureTextEntry
          />
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={styles.login.buttonContainer}
            onPress={loginUser}>
            <Text>Giriş Yap</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.login.buttonContainer}
            onPress={() => props.navigation.navigate('Sign')}>
            <Text>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {LoginPage};
