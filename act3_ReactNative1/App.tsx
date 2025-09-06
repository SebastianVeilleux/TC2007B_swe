import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RequestFunction from "./Classes/RequestFuncion";

export default function App() {
  // ⬇️ Pega aquí el RAW URL de TU gist (o cualquier JSON público)
  const RAW_URL =
    "https://gist.githubusercontent.com/SebastianVeilleux/b52d36edd52439d4bd5c80543b08a8dd/raw/530c84d4828bfd288936b7781e61ee4e31a95822/gistfile1.txt";

  return (
    <View style={styles.container}>
      <RequestFunction url={RAW_URL} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingTop: 16,
  },
});
