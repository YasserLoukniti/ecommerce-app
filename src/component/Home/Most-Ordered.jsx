import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { productsData } from '../../data/ProductsData';
import Product from '../molecules/Product';

export default function MostOrdered({nav}) {

    return (
        <View style={styles.mostOrdered}>
        <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text h4 h4Style={{color: "#3E5638"}} >Les plus commandés</Text>

        </View>
    
        <View style={{ flex: 1, marginTop: 10 }}>
            <FlatList
                data={productsData}
                renderItem={({item, index}) => <Product item={item} index={index} nav={nav}/>}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    </View>
      )
}

const styles = StyleSheet.create({
    mostOrdered: {
        flex: 8,
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      flex: 1,
      color: 'white',
    },
});