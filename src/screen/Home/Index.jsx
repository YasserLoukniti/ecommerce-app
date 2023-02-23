import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeFooter from '../../component/Home/Home-Footer';
import HomeHeader from '../../component/Home/Home-Header';
import MostOrdered from '../../component/Home/Most-Ordered';
import NewProducts from '../../component/Home/New-Products';

export default function Home({navigation}) {
const nav = (obj)=>{
    navigation.navigate("ProductDetail",obj)
}
    return (
        < >
            <HomeHeader />
            <ScrollView>
                <MostOrdered nav={nav}/>
                <NewProducts />
            </ScrollView>
            <HomeFooter />
        </>
    );
}

const styles = StyleSheet.create({



});