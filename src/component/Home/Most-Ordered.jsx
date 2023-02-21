import { StyleSheet, Text, View } from 'react-native';

export default function MostOrdered() {

    return (
        <View style={styles.mostOrdered}>
            <Text>ssss</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mostOrdered: {
        flex: 8,
        backgroundColor: "pink",
        alignItems: 'center',
        justifyContent: 'center',
    },
});