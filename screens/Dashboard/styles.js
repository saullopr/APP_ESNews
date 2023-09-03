import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  viewGeral: {
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  viewDashBoard1: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    width: "90%",
    alignSelf: "center",
  },

  viewDashBoard2: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    width: "90%",
    alignSelf: "center",
    marginTop: 30
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

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-end"
  },

  tituloDashboard: {
    fontSize: 20,
    marginBottom: 25,
    fontWeight: "bold",
  }
  
})