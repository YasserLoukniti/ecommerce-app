import { StyleSheet } from "react-native"
import { View } from "react-native"
import { Text } from "react-native-elements"

export default function Nutrition({ nutKey,value }) {
    console.log(``,nutKey, value );
    return (
        <View style={styles.nutritionFlex}>
            <View style={styles.nutrition} >
                <Text style={{ fontSize: 14, color: "grey", marginTop: 10, fontWeight: "bold" }}>{nutKey}</Text>
            </View>
            <View style={styles.valeur} >
                <Text style={{ fontSize: 14, color: "grey", marginTop: 10, fontWeight: "bold" }}>{value}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    nutrition: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        
    },
    valeur: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center"
    },
    nutritionFlex: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 10,
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "center"
    },
})

