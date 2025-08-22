import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { Doggy } from './classes/DoggyComponent';

// Este es un componente, expresado en una funcion
export default function App() {
  return (

    // JSX
    // Todas las funciones de componentes están obligadas a regresar
    // un objeto de tipo componente
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ClassExample nombre='Clodomiro'/>
      <Doggy nombre="Firulais" edad={5}/>
      <StatusBar style="auto" />
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
