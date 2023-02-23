import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function HomeFooter() {

    return (
        <View style={styles.footer}>
            <View style={styles.home}>
                <TouchableOpacity onPress={console.log("clicked")}>
                    <Image source={require("../../../assets/homeIcon.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.panier}>
            <TouchableOpacity onPress={console.log("clicked")}>
                    <Image source={require("../../../assets/panierIcon.png")}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10
    },
    home: {
        flex: 1,
        paddingLeft:40
    },
    panier: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight:40

    },
});