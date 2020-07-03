import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {errorResolve} from '../function';
import styles from '../styles';

const SignupPage = props => {
  const [usermail, setUserMail] = useState('');
  const [userpass, setPassword] = useState('');
  const [userpassRep, setPasswordRep] = useState('');

  const setMail = text => setUserMail(text);
  const setPass = text => setPassword(text);
  const setPassRep = text => setPasswordRep(text);

  const signUser = async () => {
    if (userpass == userpassRep) {
      // console.log(usermail, userpass, userpassRep);
      try {
        // server'dan doğru bir şekilde yanıt alırsak karşılaşacağımız cevap (then/try)
        await auth().createUserWithEmailAndPassword(usermail, userpass);

        // console.log(response);
        Alert.alert('MyApp', 'Hesap oluşturuldu!');

        // Bir önceki sayfaya gitmek için
        props.navigation.goBack();
      } catch (error) {
        // console.log(error);
        Alert.alert('MyApp', errorResolve(error.code));
      }
    } else {
      Alert.alert('MyApp', 'Şifreler Uyuşmuyor');
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

          <TextInput
            style={styles.login.input}
            placeholder="Şifrenizi tekrar giriniz..."
            placeholderTextColor="white"
            onChangeText={setPassRep}
            secureTextEntry
          />
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={[styles.login.buttonContainer, {backgroundColor: '#bbdefb'}]}
            onPress={signUser}>
            <Text>Kayıt Ol</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.login.buttonContainer}>
            <Text>Vazgeç</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {SignupPage};
