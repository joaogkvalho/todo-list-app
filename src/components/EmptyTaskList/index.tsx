import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import clipboardImage from '../../assets/clipboard.png';

export function EmptyTaskList() {
    return (
        <View style={styles.container}>
            <Image 
                source={clipboardImage}
                style={{ marginBottom: 16 }}
            />
            
            <Text style={styles.title}>
                Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={styles.subtitle}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}