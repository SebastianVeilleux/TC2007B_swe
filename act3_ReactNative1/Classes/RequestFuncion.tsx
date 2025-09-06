import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList, Pressable, Alert } from "react-native";

// ajusta los campos a tu JSON (mínimo 3). Ejemplo:
type Item = { id: number | string; label: string; year: number; city: string };

export default function RequestFunction(props: { url: string }) {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function request() {
    const resp = await fetch(props.url);
    const json = (await resp.json()) as Item[];
    setData(json);
  }

  useEffect(() => {
    request().catch((e) => setErr(String(e?.message ?? e))).finally(() => setLoading(false));
  }, [props.url]);

  if (loading) return <ActivityIndicator size="large" />;
  if (err) return <Text style={{ padding: 16 }}>Error: {err}</Text>;

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              Alert.alert(
                item.label,
                // muestra TODA la info formateada
                `ID: ${item.id}\nAño: ${item.year}\nCiudad: ${item.city}`
              )
            }
            style={{ paddingVertical: 12 }}
          >
            {/* requisito: SOLO un label en la lista */}
            <Text style={{ fontSize: 16 }}>{item.label}</Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "#ddd" }} />}
      />
    </View>
  );
}
