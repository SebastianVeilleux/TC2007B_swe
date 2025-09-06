import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList, Pressable } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Film } from "../types";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "List">;

export default function ListScreen({ navigation }: Props) {
    const [data, setData] = useState<Film[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch("https://ghibliapi.vercel.app/films");
                const json = (await resp.json()) as Film[];
                setData(json);
            } catch (e: any) {
                setErr(String(e?.message ?? e));
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) return <ActivityIndicator size="large" />;
    if (err) return <Text style={{ padding: 16 }}>Error: {err}</Text>;

    return (
        <View style={{ padding: 16 }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigation.navigate("Detail", { id: item.id })}
                        style={{ paddingVertical: 12 }}
                    >
                        {/* requisito: SOLO el título en la lista */}
                        <Text style={{ fontSize: 16 }}>{item.title}</Text>
                    </Pressable>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "#ddd" }} />}
            />
        </View>
    );
}
