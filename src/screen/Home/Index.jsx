import { child, get, getDatabase, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeFooter from '../../component/Home/Home-Footer';
import HomeHeader from '../../component/Home/Home-Header';
import MostOrdered from '../../component/Home/Most-Ordered';
import NewProducts from '../../component/Home/New-Products';
import database from '../../data-access/database';

export default function Home() {
const [products, setproducts] = useState()

    const dbRef = ref(getDatabase(database));
    get(child(dbRef, `products/`)).then((snapshot) => {
    if (snapshot.exists()) {
        let FiltredProducts = snapshot.val()
        FiltredProducts.shift()
        console.log(FiltredProducts);
        // setproducts(FiltredProducts);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });


    return (
        < >
            <HomeHeader />
            <ScrollView>
                <MostOrdered products={products} />
                <NewProducts products={products}/>
            </ScrollView>
            <HomeFooter />
        </>
    );
}

const styles = StyleSheet.create({



});