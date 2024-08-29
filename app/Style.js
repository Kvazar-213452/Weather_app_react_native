import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#202731',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    main: {
        backgroundColor: '#343d4b',
        width: '90%',
        padding: 20, 
        borderRadius: 10,
    },
    color: {
        color: '#66a1ec',
        top: -50,
        fontSize: 25,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    searchBox: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 20,
        color: '#fff', 
    },
    results: {
        alignItems: 'center',
    },
    location: {
        alignItems: 'center',
    },
    city: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#66a1ec',
    },
    date: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    current: {
        alignItems: 'center',
    },
    temp: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#fff', 
    },
    weather: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#fff', 
    },
    hiLow: {
        fontSize: 24,
        color: '#888',
    },
});