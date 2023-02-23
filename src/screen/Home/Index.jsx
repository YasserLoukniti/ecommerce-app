import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeFooter from '../../component/Home/Home-Footer';
import HomeHeader from '../../component/Home/Home-Header';
import MostOrdered from '../../component/Home/Most-Ordered';
import NewProducts from '../../component/Home/New-Products';
import { db} from '../../data/Database';
import { productsData } from '../../data/ProductsData';

export default function Home({navigation}) {
const nav = (obj)=>{
    navigation.navigate("ProductDetail",obj)
}
const [products, setProducts] = useState([]);
useEffect(() => {
   db.collection('products').onSnapshot(res => {
      res.forEach(product => {
        console.log(product.data());
        setProducts([...products,product.data()])
      })
    })
  }, [])
  
    return (
        < >
            <HomeHeader />
            <ScrollView>
                <MostOrdered nav={nav} products={products}/>
                <NewProducts nav={nav} products={products}/>
            </ScrollView>
            <HomeFooter />
        </>
    );
}

const styles = StyleSheet.create({



});