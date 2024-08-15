import { FlatList, View } from "react-native";
import { EmptyTaskList } from "../EmptyTaskList";
import { Task } from "../Task";
import { styles } from "./styles";

type Task = {
    id: string
    content: string
    isComplete: boolean
}

type TaskListProps = {
    taskList: Task[]
    onCompleteTask: (taskId: string) => void
    onDeleteTask: (task: Task) => void
}

export function TaskList({ taskList, onCompleteTask,onDeleteTask }: TaskListProps) {
    return (
        <View style={styles.container}>
           <FlatList 
                data={taskList}
                ListEmptyComponent={EmptyTaskList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Task 
                        task={item}
                        onCompleteTask={onCompleteTask}
                        onDeleteTask={onDeleteTask}
                    />
                )}
           />
        </View>
    )
}