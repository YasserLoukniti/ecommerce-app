import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import FlatProduct from '../atoms/FlatProduct';

export default function NewProducts({nav,products}) {

    return (
        <View style={styles.newProducts}>
            <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text h4 h4Style={{ color: "#3E5638" }} >Nouveaux bonbons</Text>

            </View>

            <View style={{ flex: 1, marginTop: 10 }}>
                <FlatList
                    data={products.filter(item => item.categorie == "new")}
                    renderItem={({item, index}) => <FlatProduct item={item} index={index} nav={nav}/>}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    newProducts: {
        flex: 6,
        justifyContent: 'center',
    },
});