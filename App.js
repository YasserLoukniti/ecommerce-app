import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/AppNavigator';

export default function App() {
  return (
    <View style={styles.container}>
          <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
