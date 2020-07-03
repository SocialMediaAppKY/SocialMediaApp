import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles';

const ListPage = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Button
          title="Çıkış Yap"
          onPress={() => {
            AsyncStorage.removeItem('@USER_ID');
            auth().signOut();
            props.navigation.navigate('Login');
          }}
        />

        {/* <Button
          title="Veri Kaydet"
          onPress={() => {
            AsyncStorage.setItem('@myvalue', 'Merhaba Kodluyoruz')
              .then(res => console.log('Veri kaydı başarılı!'))
              .catch(res => console.log('Bir hata oluştu'));
          }}
        />

        <Button
          title="Veri Getir"
          onPress={() => {
            AsyncStorage.getItem('@myvalue')
              .then(res => console.log(res))
              .catch(res => console.log(res));
          }}
        />

        <Button
          title="Veri Sil"
          onPress={() => {
            AsyncStorage.removeItem('@myvalue')
              .then(res => console.log('Veri silme başarılı'))
              .catch(res => console.log('Bir hata oluştu'));
          }}
        /> */}

        {/* <Button
          title="Oturumu Kontrol Et"
          onPress={() => console.log(auth().currentUser)}
        />

        <Button title="Çıkış Yap" onPress={() => auth().signOut()} />

        <Text>List Page</Text> */}
      </View>
    </SafeAreaView>
  );
};

export {ListPage};
