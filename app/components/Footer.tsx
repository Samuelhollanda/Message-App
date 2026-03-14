import {View, StyleSheet, Text} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Footer = () =>{
    return (
        <View style={styles.footer}>
            <View style={styles.card}>
                <AntDesign name="message" size={24} color="black" />
                <Text>
                    Conversas
                </Text>
            </View>
            <View style={styles.card}>
                <MaterialIcons name="upgrade" size={24} color="black" />
                <Text>
                    Atualizações
                </Text>
            </View>
            <View style={styles.card}>
                <FontAwesome name="group" size={24} color="black" />
                <Text>
                    Comunidades
                </Text>
            </View>
            <View style={styles.card}>
                <MaterialIcons name="call" size={24} color="black" />
                <Text>
                    Ligações
                </Text>
            </View>
            <View style={styles.card}>
                <MaterialIcons name="call" size={24} color="black" />
                <Text>
                    Ligações
                </Text>
            </View>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    card: {
        alignItems: 'center',
        paddingVertical: 30,
        paddingLeft: 10,
        alignContent: 'center',
        marginVertical: 20,
    }
})