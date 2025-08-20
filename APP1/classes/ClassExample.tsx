// definir un componente por medio de una clase

import { Component, ErrorInfo } from "react";
import { Text, View, Button } from 'react-native';

export class ClassExample extends Component<{nombre: string}, {}> {

    // life cycle 
   // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

   // PROPS - Prpieedades. Valores que recibimos del exterior como
   // argumentos que mi componente puede utilizar

   constructor(props: any){
        super(props);
        console.log("CONSTRUCTOR")

        // ESTADO - Conjunto de variables que son partes de la definición
        // interna del componente
        // SIMILAR a variable de instancia PERO con funcionalidad extra
        // relaciona al ciclo de vida
   }

   // Si tenemos un componente definido en una clase
   // estamos obligados a implementar el metodo render
   render(){
        console.log("RENDER");
        return(
            <View>
                <Text>
                    HOLA SOY UN COMPONENTE MUY INTERESANTE!
                </Text>
                <text> UN PROP: {this.props.nombre} </text>
                // title and onPressed son props
                <Button title='INCREMENTAR CUENTA'
                    onPress={() => { }} />
            </View>
        );
   }

   // Despues del renderizado del componente
   componentDidMount(): void{
        console.log("COMPONENT DID MOUNT");
   }

   // Si se hizo update del renderizado
    componentDidUpdate(prevProbs: Readonly<{}>, prevState: Readonly<{}>, snapshot?:any): void{
        console.log("COMPONENT DID PUDATE")
    }

    //Tipo destructor, liberar recursos
    componentWillUnmount(): void{
        console.log("COMPONENT WILL UNMOUNT")
    }

}
