import {Text, View} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from './styles.Header'


const Header = () => {
    return (
        <View style={styles.mainBar}>
            <Text style={styles.title}>WhatsApp</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 'auto'}}>
                <AntDesign.Button name="camera" style={ styles.icons } backgroundColor={'transluced'}/>
                <AntDesign.Button name="menu" style={ styles.icons } backgroundColor={'transluced'} />
            </View>
        </View>
    )
}

export default Header;