import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
        paddingVertical: 22,
        paddingHorizontal: 20,
        backgroundColor: '#333333',
        borderRadius: 8
    },
    taskContent: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    taskContentText: {
        fontSize: 16,
        color: '#f2f2f2'
    }
})