import * as Network from 'expo-network';


export  const  isNetworkAvailable = async() => {
     const connectionStatues = await Network.getNetworkStateAsync()
     return connectionStatues
  } 