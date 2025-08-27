import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { Doggy } from './classes/DoggyComponent';
import RequestFunction from './classes/RequestFunction';


// Este es un componente, expresado en una funcion
export default function App() {
  return (

    // JSX
    // Todas las funciones de componentes están obligadas a regresar
    // un objeto de tipo componente
    <View style={styles.container}>
      {/* <Doggy nombre="Firulais" edad={5}/> */}
      {/* <StatusBar style="auto" /> */}
      <RequestFunction url='https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json'/>
    </View>
  );
}

// DESIGN PATTERN !

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
