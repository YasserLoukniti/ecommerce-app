import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ProductDetailHeader from '../../component/ProductDetail/Header';
import Ingredients from '../../component/ProductDetail/Ingredients';
import Nutritions from '../../component/ProductDetail/Nutritions';

export default function ProductDetail({route,navigation}) {
    const {product}= route.params;

    return (
        <View style={styles.container}>
            <ProductDetailHeader title={product.title} navigation={navigation}/>
            <Ingredients ingredients={product.ingredients}/>
            <Nutritions nutritions={product.nutritions}/>
            <View style={{flex:1}}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop:25
    },


});