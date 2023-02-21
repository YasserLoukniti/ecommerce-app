import { StyleSheet, Text, View } from 'react-native';

export default function HomeFooter() {

    return (
        <View style={styles.footer}>
        <Text>ssss</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 2,
        backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
    },
});