import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import UserInfo from '../molecules/UserInfos';

export default function HomeHeader() {
    const [search, setSearch] = useState("")
    return (
        < >
            <View style={styles.userView}>
                <UserInfo />
            </View>
            <View style={styles.explorer}>
                <Text h2 h2Style={{ color: "#3E5638" }}>Explorer</Text>
                <Searchbar
                style={styles.searchbar}
                inputStyle={{ Color: 'red'}}
                placeholder="Trouver du bonbon"
                onChangeText={(value) => setSearch(value)}
                value={search}
    />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    userView: {
        flex: 3,
        justifyContent: 'center',

    },
    explorer: {
        flex: 3,
        backgroundColor: "white",
        padding: 15
    },
    searchbar: {
        width:"80%",
        height:25,
        marginTop: 30,
        
    }
});