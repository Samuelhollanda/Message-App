import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
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

})

export default styles