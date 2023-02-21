import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function HomeHeader() {

    return (
        < >
            <View style={styles.userView}>
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

            </View>
            <View style={styles.explorer}>
                <Text>ssss</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    userView: {
        flex: 3,
        justifyContent: 'center',

    },
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
    explorer: {
        flex: 3,
        backgroundColor: "orange",
        alignItems: 'center',
        justifyContent: 'center',
    }
});