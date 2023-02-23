import { StyleSheet } from "react-native"
import {  View } from "react-native"
import { Avatar, Text } from "react-native-elements"

export default function Nutritions({ ingredients }) {
    return (
        <View style={{ flex: 4,padding: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>INGREDIENTS</Text>
            <View style={styles.ingredientsFlex}>
                {ingredients?.map(ingredient => (
                    <View style={styles.ingredient}>
                        <Avatar
                            rounded
                            size="large"
                            source={ingredient.image}
                        />
                        <Text style={{fontSize:14,color:"grey",marginTop:10,fontWeight:"bold"}}>{ingredient.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ingredient: {
        width: "40%",
        height: 130,
        margin: 10,
        padding: 20,
        alignItems:"center",
        justifyContent:"center"
    },
    ingredientsFlex: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 10,
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "center"
    },
})

