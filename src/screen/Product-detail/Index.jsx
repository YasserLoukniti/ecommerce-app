import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ProductDetailHeader from '../../component/ProductDetail/Header';
import Ingredients from '../../component/ProductDetail/Ingredients';

export default function ProductDetail({route,navigation}) {
    const {product}= route.params;

    return (
        <View style={styles.container}>
            <ProductDetailHeader title={product.title} navigation={navigation}/>
            <Ingredients ingredients={product.ingredients}/>
            <View style={{flex:5,backgroundColor:"red"}}>

            </View>
            <View style={{flex:1,backgroundColor:"black"}}>
                <TouchableOpacity>
                
                </TouchableOpacity>
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