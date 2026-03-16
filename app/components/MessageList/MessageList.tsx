import { View, FlatList, Image, Text } from 'react-native';
import listMessage from "@/data/data";
import styles from './styles.MessageList'



const MessageList = () => {
    return (
        <>
            <FlatList
                data={listMessage}
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
        </>
    )
}

export default MessageList;