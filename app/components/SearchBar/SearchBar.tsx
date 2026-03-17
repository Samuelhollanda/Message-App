import { TextInput } from "react-native";
import styles from './styles.SearchBar'

const SearchBar = () => {
    return (
        <>
            <TextInput
                style={styles.search}
                placeholder = 'Pesquise'
            />
        </>
    )
}

export default SearchBar;