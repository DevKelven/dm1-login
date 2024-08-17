import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
  
      <View>
        <Image source={require('./assets/favicon.png')} style={styles.imagem}></Image>
      </View>
      
      <View>
        <Text style={styles.font}>Login</Text>
        <StatusBar style="auto" />
      </View>
  
    <View style={styles.conteudo}>
      <View >
          <View style={styles.caixa}>
            <TextInput placeholder='Digite seu email'></TextInput>
          </View>

          <View style={styles.caixa}>
            <TextInput placeholder='Digite sua Senha' name="password"></TextInput>
          </View>

      </View>

        <View style={styles.botao}>
          <Button title="Acessar" ></Button>
        </View>

      <View>
          <Text style={styles.font2}>Não possui conta? <Text style={styles.link}>faça inscrição!</Text></Text>
        
      </View>
    </View>




    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 40,
    marginBottom: 20,
    top: -65,
  },
  font2: {
    fontSize: 18,
  },
  imagem: {
    width: 150,
    height: 150,
    top: -75,
  },
  caixa:{
    width: 350,
    height:60,
    borderWidth: 2,
    borderRadius:10, 
    paddingTop: 15,
    paddingLeft: 15,
    marginVertical: 10,
  },
  botao:{
    width: 350,
    borderWidth: 6,
    marginVertical: 20,
    borderColor: '#2196F3',
    borderRadius: 10
  },
  conteudo:{
    top: -40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link:{
    color:'#2196F3',
    fontSize: 18,
  },
  
});
