import { StyleSheet } from "react-native"
import { View } from "react-native"
import { Avatar, Text } from "react-native-elements"
import Nutrition from "./Nutrition"

export default function Nutritions({ nutritions }) {
    return (
        <View style={{ flex: 5,padding: 20}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>VALEURS NUTRITIONNELLES</Text>

                <Nutrition nutKey="Energie" value={nutritions.Energie}/>
                <Nutrition nutKey="Matières Grasses" value={nutritions.Matières_Grasses}/>
                <Nutrition nutKey="Dont acides gras staurés" value={nutritions.Dont_acides_gras_staurés}/>
                <Nutrition nutKey="Glucides" value={nutritions.Glucides}/>
                <Nutrition nutKey="Protéines" value={nutritions.Protéines}/>
                <Nutrition nutKey="Sel" value={nutritions.Sel}/>

        </View>
    )
}
const styles = StyleSheet.create({
    nutrition: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
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

