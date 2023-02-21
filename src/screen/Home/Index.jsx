import { StyleSheet, Text, View } from 'react-native';
import HomeFooter from '../../component/Home/Home-Footer';
import HomeHeader from '../../component/Home/Home-Header';
import MostOrdered from '../../component/Home/Most-Ordered';
import NewProducts from '../../component/Home/New-Products';

export default function Home() {



    return (
        < >
            <HomeHeader />
            <MostOrdered />
            <NewProducts />
            <HomeFooter />
        </>
    );
}

const styles = StyleSheet.create({



});