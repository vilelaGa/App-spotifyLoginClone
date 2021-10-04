import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  return (
    
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <StatusBar backgroundColor="#111" translucent={false} />

          <View style={styles.containerFoto}>
            <Image style={styles.logo} source={require('./src/iconfinder_spotify.png')} />
          </View>

          <TextInput style={styles.inputs} placeholder='E-mail' />
          <TextInput style={styles.inputs} placeholder='Senha' />

          <TouchableOpacity style={styles.suportBtn}>
            <Text style={styles.suportText}>Esqueceu senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>Acessar</Text>
          </TouchableOpacity>

          <View style={styles.btnCadastro}>
            <Text style={styles.textNoConta}>Não tem uma conta?</Text>
            <TouchableOpacity><Text style={styles.textCadastro}>Cadastre-se</Text></TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerFoto: {
    marginBottom: 120,
  },

  logo: {
    marginTop: 50,
  },

  inputs: {
    padding: 5,
    backgroundColor: '#FFFFF0',
    width: '80%',
    height: 47,
    borderRadius: 5,
    color: '#808080',
    marginBottom: 10,
  },

  suportBtn: {
    width: '80%',
    alignItems: "flex-end",
  },

  suportText: {
    color: '#FFFFF0',
    marginBottom: 20,
  },

  btn: {
    backgroundColor: '#5ECB66',
    width: '80%',
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textBtn: {
    color: '#FFFFF0',
    fontSize: 18,
  },
  textNoConta: {
    color: '#fffff0',
  },
  textCadastro: {
    left: 5,
    color: "#5ECB66",
  },
  btnCadastro: {
    marginTop: 20,
    flexDirection: 'row',
  }
});
