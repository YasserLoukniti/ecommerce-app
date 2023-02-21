import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function UserInfo() {

    return (

        <View style={styles.userInfo}>
            <View style={styles.avatar}>
                <Avatar
                    rounded
                    size="medium"
                    source={require("../../../assets/avatar.png")}
                />
            </View>
            <View style={styles.text}>
                <Text>Bonjour, YASSER</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    userInfo: {
        flex: 1,
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 30,
    },
    avatar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});