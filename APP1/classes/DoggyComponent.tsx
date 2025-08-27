// Declarando componente por medio de una funcion

import { useState } from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native' // -> por lo general estos imports van a ser componentes y en GUI nativa

// el cuerpo de un componente de función es el método render de la clase
export function Doggy(props: any) {

    // definiendo variables d eestado 
    // vamos a usar hooks! yay!

    // logica que nos permite acceder a funcionalidad externa a lo
    // que es propiamente reder.

    // para los estados usamos un hook que se llama useState
        //var.     // metodo para modificar esa var.
    const[isHappy, setIsHappy] = useState(false);
    const[cuenta, setCuenta] = useState(0);
    const[testInput, setTestInput] = useState("");

    // para que veamos que se reinvoca!
    console.log("DOGGY RENDER")

    return (
        <View>
            <Text>WOOF. {props.nombre} {props.edad} estoy {isHappy? "FELIZ :)": "TRISTE :("}</Text>
            <Text>Cuenta de ladridos del dia: {cuenta}</Text>
            <Text>Entrada de texto: {testInput}</Text>
            < Button
                title="Cambiar Felicidad"
                onPress={() => {
                    setIsHappy(!isHappy);
                }}
            />
            < Button
                title="Ladrar en un momento inoportuno"
                onPress={() => {
                    setCuenta(cuenta + 1);
                }}
            />
            <TextInput
                placeholder="PRUEBA DE INPUT TEXTO"
                onChangeText={(text) => {
                    setTestInput(text);
                }}
            />
        </View>
    );

}

export function DoggyRow(props: any){

    return(
        <View>
            <Text>Me llamo: { props.nombre }</Text>
            <Image 
                source={{uri: props.uri}}
                style={{width : 100, height : 100}}
            />
        </View>
    )

}