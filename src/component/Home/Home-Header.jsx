import { StyleSheet, Text, View } from 'react-native';

export default function HomeHeader() {

    return (
        < >
            <View style={styles.user}>
                <Text>sssasesa</Text>
            </View>
            <View style={styles.explorer}>
                <Text>ssss</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    user: {
        flex: 3,
        backgroundColor: "grey",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    explorer: {
        flex: 3,
        backgroundColor: "orange",
        alignItems: 'center',
        justifyContent: 'center',
    }
});