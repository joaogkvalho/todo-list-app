import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D0D0D'
    },
    form: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6,
        marginTop: -52,
        padding: 20,
    },
    input: {
        flex: 1,
        padding: 16,
        fontSize: 18,
        color: '#F2F2F2',
        backgroundColor: '#262626',
        borderRadius: 6
    },
    submitButton: {
        width: 58,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E6F9F',
        borderRadius: 6
    },
    submitButtonText: {
        fontSize: 20,
        color: '#fff'
    },
    tasksResume: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 24,
        paddingHorizontal: 24,
    },
    taskResumeItem: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8
    },
    taskResumeItemNumber: {
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 999,
        backgroundColor: '#333333'
    },
})