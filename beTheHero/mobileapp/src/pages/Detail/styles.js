import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,

    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop:25,
        marginBottom: 16,
    },
    incidentProperty:{
        fontSize: 15,
        color: '#41414d',
        fontWeight: 'bold',
    },
    incidentValue: {
        marginTop:8,
        fontSize: 15,
        marginBottom: 12,
        color: '#737380',
    },
    contactBox:{
        padding: 18,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop:18,
        marginBottom: 25,
    },
    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },
    heroDescription:{
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },
    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    action:{
        backgroundColor: '#e02041',
        borderRadius: 8,
        height:50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});