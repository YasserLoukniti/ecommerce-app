import { TouchableOpacity, View } from "react-native"
import { Icon, Text } from "react-native-elements"

export default function ProductDetailHeader({title,navigation}) {
    return (
        <View style={{
            flex: 1, flexDirection: 'row',
            justifyContent: "center"
        }}>
            <TouchableOpacity style={{ flex: 1, justifyContent: "center" }} onPress={() => navigation.navigate("Home")}>
                <Icon type="font-awesome"
                    name='arrow-left' />
            </TouchableOpacity>
            <View style={{ flex: 3, justifyContent: "center" }}>
                <Text h2>{title}</Text>
            </View>
        </View>
    )
}

