import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

type Task = {
    id: string
    content: string
    isComplete: boolean
}

type TaskProps = {
    task: Task
}

export function Task({ task }: TaskProps) {
    const [isCompleted, setIsCompleted] = useState(false)

    function handleCompleteTask() {
        if (!isCompleted) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }

    return (
        <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.taskContent} onPress={handleCompleteTask}>
                {isCompleted ? (
                    <Feather name="check-circle" size={20} color="#5E60CE" />
                ) : (
                    <Feather name="circle" size={20} color="#4EA8DE" />
                )}

                <Text style={[
                    styles.taskContentText, 
                    isCompleted && { color: '#808080', textDecorationLine: 'line-through' }
                ]}>
                    {task.content}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Feather name="trash-2" size={22} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}