import { View, TextInput } from 'react-native'
import Footer from "@/app/components/Footer";
import MessageList from "@/app/components/MessageList/MessageList";
import Header from './components/Header/Header'
import styles from './styles.index'

const app = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        style={styles.search}
        placeholder = 'Pesquise'
      />
      <MessageList />
      <Footer />
    </View>
        )
}
export default app