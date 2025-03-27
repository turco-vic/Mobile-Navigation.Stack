import { View, Text, StyleSheet } from 'react-native';

export default function Detalhes() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>
            <Text style={styles.subTitle}>No persistence: No text saved</Text>
            <Text style={styles.subTitle2}>With persistence: No text saved</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    subTitle: {
        textAlign: 'center',
        color: 'red',
        marginBottom: 5,
        fontSize: 20,

    },
    subTitle2: {
        textAlign: 'center',
        color: 'green',
        marginBottom: 5,
        fontSize: 20,
    },
});