import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    todoList: {
        backgroundColor: 'antiquewhite',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    todoView: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        justifyContent: 'space-between'
    },
    listText: {
        alignSelf: 'stretch',
        paddingLeft: 40,
    },
    buttonContainer: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '20%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 5,
    },
    buttonRemove: {
        backgroundColor: '#0782F9',
        flexDirection: 'row',
        width: 100,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});
export default styles;