import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
