import {View, StyleSheet, Text, ScrollView} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Footer = () =>{
    return (
        <>
        <View
            style={styles.footer}>
            <View style={styles.card}>
                <AntDesign name="message" size={24} color="#b5b5b5" />
                <Text style={styles.paragraph}>
                    Conversas
                </Text>
            </View>
            <View style={styles.card}>
                <MaterialIcons name="upgrade" size={24} color="#b5b5b5" />
                <Text style={styles.paragraph}>
                    Atualizações
                </Text>
            </View>
            <View style={styles.card}>
                <FontAwesome name="group" size={24} color="#b5b5b5" />
                <Text style={styles.paragraph}>
                    Comunidades
                </Text>
            </View>
            <View style={styles.card}>
                <MaterialIcons name="call" size={24} color="#b5b5b5" />
                <Text style={styles.paragraph}>
                    Ligações
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.paragraph}>
                    Perfil
                </Text>
            </View>
        </View>
        </>
    )
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#102b24',
        flexDirection: 'row',
        paddingBottom: 50,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    card: {
        alignItems: 'center',
    },
    paragraph: {
        color: '#b5b5b5',
        fontSize: 10
    }
})