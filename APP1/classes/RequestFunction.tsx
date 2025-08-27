import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, Pressable} from 'react-native';
import { DoggyRow } from './DoggyComponent';

// recordatorio: 
//      el cuerpo de un componente funcional es el metodo render()

export default function RequestFunction(props: any){

    /*

        JSON USADO EN EL REPO DEL PROFE, REPO POR HACER 21/08/2025

        en json toda la informacion se expresa en tuplas con sintaxis llave:valor

        tenemos estructuras de datos comunes - objdtos, arreglos
        objetos - engloban elemenots entre {}
        arreglos - contiene elementos entre [] separados por ','

    
        para traducir json en objeto del lenguaje necesitamos un parser
    
    */

    const[data, setData] = useState([]);

    // definiendo una función interna (funcion dentro de una funcion)

    // async
    // funciona que no bloquea el flujo de la lógica
    // corre en parelelo con algun mecanismo dependiendo del lenguaje / framework
    // no sabemos cuando tiempo va a durar en terminar
    async function request(){

        // await - mecanismo que se puede utilizar en invovcaciones a 
        // funciones asincronas para esperar resultado antes de seguir ejecucion

        // SOLO se puede hacer dentro del scope de una funcion asincrona

        var response = await fetch(props.url);
        var json = await response.json();
        console.log(json);
        console.log(json[1]);
        setData(json);
    }

    // HOOK! 
    useEffect(() => {
        request();
    }, []);


    request();

    return(
        <View>
            <FlatList 
                data={[
                    {nombre:"Perrito1", uri: "https://dog.ceo/api/breeds/images/random"},
                    {nombre:"Perrito2", uri: "https://dog.ceo/api/breeds/images/random"}, 
                    {nombre:"Perrito3", uri: "https://dog.ceo/api/breeds/images/random"}
                ]}
                renderItem={({ item }) => {
                    <Pressable onPress={() => {
                        alert("NO PRESIONES AL PERRITO!")
                    }}>
                    <DoggyRow 
                        nombre={item.nombre}
                    />
                }}
            />
        </View>
    )

}