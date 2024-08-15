import Feather from '@expo/vector-icons/Feather';
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

type Task = {
    id: string
    content: string
    isComplete: boolean
}

type TaskProps = {
    task: Task
    onCompleteTask: (taskId: string) => void
    onDeleteTask: (task: Task) => void
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
    function handleCompleteTask() {
       onCompleteTask(task.id)
    }

    function handleDeleteTask() {
        onDeleteTask(task)
    }

    return (
        <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.taskContent} onPress={handleCompleteTask}>
                {task.isComplete ? (
                    <Feather name="check-circle" size={20} color="#5E60CE" />
                ) : (
                    <Feather name="circle" size={20} color="#4EA8DE" />
                )}

                <Text style={[
                    styles.taskContentText, 
                    task.isComplete && { color: '#808080', textDecorationLine: 'line-through' }
                ]}>
                    {task.content}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleDeleteTask}>
                <Feather name="trash-2" size={22} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}