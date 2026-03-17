import { View } from 'react-native'
import Footer from './components/Footer/Footer';
import MessageList from './components/MessageList/MessageList';
import Header from './components/Header/Header'
import styles from './styles.index'
import SearchBar from "@/app/components/SearchBar/SearchBar";

const app = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <MessageList />
      <Footer />
    </View>
        )
}
export default app
