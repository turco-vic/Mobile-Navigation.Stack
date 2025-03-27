import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persistence and Navigation</Text>
            <Text style={styles.textRed}>Navigation</Text>
            <Text style={styles.textGreen}>Stack</Text>
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
    input: {
        height: 40,
        width: 300,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 30,
        padding: 10,
    },

    textRed: {
        color: "red",
        marginTop: 20,
        fontSize: 20,
    },
    textGreen: {
        color: "green",
        marginTop: 20,
        fontSize: 20,
    },
});