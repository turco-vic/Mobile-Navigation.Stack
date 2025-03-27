import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navigation Stack</Text>
            <Button text="Detalhes" onPress={() => navigation.navigate("Detalhes")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        textAlign: "center",
    },
});