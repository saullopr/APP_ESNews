import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-end"
    },

    header: {
        backgroundColor: '#385E96',
        justifyContent: "center",
        width: "100%",
        height: 45,
        borderBottomWidth: 2,
        borderBottomColor: "#385E96",
        borderTopWidth: 2,
        borderTopColor: "#385E96"
    },

    atalho: {
        backgroundColor: "#385E96",
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center"
        
    },

    iconeMenu: {
        width: 40,
        height: 40,
    },

    titulos: {
        paddingLeft: 30,
        fontSize: 20,
        fontWeight: "700",
        color: "white",
    },

    subtitulos: {
        width: "100%",
        backgroundColor: "#E6EDED",
        padding: 10
    },

})