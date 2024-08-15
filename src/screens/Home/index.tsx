import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { useState } from "react";
import logoImg from "../../assets/logo.png";
import { TaskList } from "../../components/TaskList";

export function Home() {
    const [taskList, setTaskList] = useState([
        {
            id: '1',
            content: 'Acordar',
            isComplete: false
        },
        // {
        //     id: '2',
        //     content: 'Fazer café da manhã',
        //     isComplete: false
        // },
        // {
        //     id: '3',
        //     content: 'Ir para o trabalho',
        //     isComplete: false
        // }
    ])

    function handleAddTask() {
        console.log("Tarefa adicionada!")
    }

    return (
        <View style={styles.container}>
           <View style={styles.header}>
                <Image source={logoImg} />
           </View>

           <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                />

                <TouchableOpacity 
                    onPress={handleAddTask}
                    style={styles.submitButton}
                >
                    <AntDesign
                        name="pluscircleo" 
                        size={18}
                        color="#fff"
                    />
                </TouchableOpacity>
           </View>

           <View style={styles.tasksResume}>
                <View style={styles.taskResumeItem}>
                    <Text style={{ 
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#4EA8DE' 
                    }}>
                        Criadas
                    </Text>
                    <View style={styles.taskResumeItemNumber}>
                        <Text style={{ color: '#fff' }}>
                            3
                        </Text>
                    </View>
                </View>

                <View style={styles.taskResumeItem}>
                    <Text style={{ 
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#8284FA' 
                    }}>
                        Concluídas
                    </Text>
                    <View style={styles.taskResumeItemNumber}>
                        <Text style={{ color: '#fff' }}>
                            0
                        </Text>
                    </View>
                </View>
           </View>

            <TaskList
                taskList={taskList}
            />
        </View>
    )
}