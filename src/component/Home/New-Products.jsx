import { StyleSheet, Text, View } from 'react-native';

export default function NewProducts() {

    return (
        <View style={styles.newProducts}>
            <Text>ssss</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    newProducts: {
        flex: 6,
        backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'center',
    },
});