import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

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
    async function request(){

        var response = await fetch(props.url);
        var json = await response.json();
        console.log(json);

    }

}