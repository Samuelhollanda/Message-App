import {StyleSheet, Text, View, FlatList, Image, TextInput} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import listUser from '@/data/data';
import Footer from "@/app/components/Footer";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const app = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainBar}>
        <Text style={styles.title}>WhatsApp</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 'auto'}}>
          <AntDesign.Button name="camera" style={ styles.icons } backgroundColor={'transluced'}/>
          <AntDesign.Button name="menu" style={ styles.icons } backgroundColor={'transluced'} />
        </View>
      </View>
    <TextInput
      style={styles.search}
      placeholder = 'Pesquise'
    />
      <FlatList
        data={listUser}
        renderItem={({ item }) => (
          <View style={styles.chat}>
            <Image source={ item.profile } style={styles.img} />
            <View style={styles.user}>
              <Text style={styles.paragraph}>{ item.nome }</Text>
              <Text> {  item.time } </Text>
            </View>
          </View>
        )}
       />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#265C4B',
    justifyContent: 'space-between'
    },
  chat: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    height: 50,
    margin: 5
  },
  paragraph: {
    color: '#fff',
    fontSize: 15,
    margin: 5,
    fontWeight: 'bold',

  },
  title: {
    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    paddingLeft: 10,
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  search: {
    borderWidth: 0.5,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  mainBar: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  icons: {
    fontSize: 20,
    color: '#fff',
    
  },
  card: {
    borderWidth: 5,
    flexDirection: 'row'
  }

})

export default app