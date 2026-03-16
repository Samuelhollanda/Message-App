import {View, Text} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from './styles.Footer';


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
