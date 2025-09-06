import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Film } from "../types";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function DetailScreen({ route }: Props) {
    const { id } = route.params;
    const [film, setFilm] = useState<Film | null>(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
                const json = (await resp.json()) as Film;
                setFilm(json);
            } catch (e: any) {
                setErr(String(e?.message ?? e));
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    if (loading) return <ActivityIndicator size="large" />;
    if (err) return <Text style={{ padding: 16 }}>Error: {err}</Text>;
    if (!film) return <Text style={{ padding: 16 }}>No data</Text>;

    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            {/* imagen real (no texto) */}
            <Image
                source={{ uri: film.image }}
                style={{ width: "100%", height: 300, marginBottom: 16, borderRadius: 8 }}
                resizeMode="cover"
            />
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 8 }}>
                {film.title}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 4 }}>Director: {film.director}</Text>
            <Text style={{ fontSize: 16, marginBottom: 12 }}>Release: {film.release_date}</Text>

            {
        }
        </ScrollView>
    );
}
