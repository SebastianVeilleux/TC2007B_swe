import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./src/screens/ListScreen";
import DetailScreen from "./src/screens/DetailsScreen";


/**
 * npx expo install @react-navigation/native
 * npx expo install react-native-screens react-native-safe-area-context
 * npm i @react-navigation/native-stack
 * **/
export type RootStackParamList = {
    List: undefined;
    Detail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="List">
                <Stack.Screen name="List" component={ListScreen} options={{ title: "Ghibli Films" }} />
                <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Film Detail" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
