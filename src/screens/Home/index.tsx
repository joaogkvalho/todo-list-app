import AntDesign from "@expo/vector-icons/AntDesign";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { useState } from "react";
import logoImg from "../../assets/logo.png";
import { EmptyTaskList } from "../../components/EmptyTaskList";
import { Task } from "../../components/Task";

type Task = {
    id: string
    content: string
    isComplete: boolean
}

export function Home() {
    const [taskList, setTaskList] = useState<Task[]>([])
    const [task, setTask] = useState('')

    const [completedTasksCount, setCompletedTasksCount] = useState(0)

    function handleAddTask() {
        const newTask = {
            id: Math.random().toString(),
            content: task,
            isComplete: false
        }
        
        setTaskList(prevState => [...prevState, newTask])
        setTask('')
    }

    function handleCompleteTask(taskId: string) {
        setTaskList(prevState => prevState.map(task => 
            task.id === taskId ? {...task, isComplete: !task.isComplete} : task
        ))

        countCompletedTasks(taskId)
    }

    function countCompletedTasks(taskId: string) {
        for (const task of taskList) {
            if (task.id === taskId && !task.isComplete) {
                setCompletedTasksCount(completedTasksCount + 1)
            } else if(task.id === taskId && completedTasksCount > 0) {
                setCompletedTasksCount(completedTasksCount - 1)
            }
        }
    }

    function handleRemoveTask(taskToDelete: Task) {
        const tasksWithoutDeletedTask = taskList.filter(task => {
            return task.content !== taskToDelete.content
        })

        const isTaskCompleted = taskToDelete.isComplete

        if (isTaskCompleted) {
            setCompletedTasksCount(completedTasksCount - 1)
        }

        setTaskList(tasksWithoutDeletedTask)
    }

    return (
        <View style={styles.container}>
           <View style={styles.header}>
                <Image source={logoImg} />
           </View>

           <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    value={task}
                    onChangeText={setTask}
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
                            {taskList.length}
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
                            {completedTasksCount > 0
                                ? (`${completedTasksCount} de ${taskList.length}`)
                                : 0
                            }
                        </Text>
                    </View>
                </View>
            </View>

            <FlatList
                data={taskList}
                keyExtractor={task => task.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={EmptyTaskList}
                renderItem={({ item }) => (
                    <Task
                        key={item.id}
                        task={item}
                        onCompleteTask={handleCompleteTask}
                        onDeleteTask={handleRemoveTask}
                    />
                )}
                style={{ paddingHorizontal: 24, marginBottom: 24 }}
            />
        </View>
    )
}