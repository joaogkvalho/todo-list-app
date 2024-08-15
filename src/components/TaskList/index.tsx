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
}

export function TaskList({ taskList }: TaskListProps) {
    return (
        <View style={styles.container}>
           <FlatList 
                data={taskList}
                ListEmptyComponent={EmptyTaskList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Task task={item} />
                )}
           />
        </View>
    )
}