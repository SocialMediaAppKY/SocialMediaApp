// Kullanıcıyı karşılayan ekran / kullanıcının oturumu vs var mı kontrol ediyoruz

import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, Button} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles';

const SplashScreen = props => {
  // Kullanıcının oturumu olup-olmadığını kontrol ediyoruz -> Bunun için useEffect kullanıyoruz
  useEffect(() => {
    AsyncStorage.getItem('@USER_ID').then(res => {
      // res -> bellekte kaydolan verinin kendisi
      if (res == null) props.navigation.navigate('Login');
      else props.navigation.navigate('ListPage');
    });
  }, []);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50, fontWeight: 'bold'}}>My App</Text>
    </SafeAreaView>
  );
};

export {SplashScreen};
