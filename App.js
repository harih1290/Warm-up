import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, } from 'react-native';
import React, { Component,Suspense } from 'react';
import RootNavigator from './pages/RootNavigator.js';
//const Main = React.lazy(() => import('./layouts/index'));
import Initloader from  './pages/Initloader';
import Main from  './layouts/index';

import HomeScreen from './pages/HomeScreen';
// export default function App() {
//   // return (
//   //   <View style={styles.container}>
//   //     <Text>Open up App.js to start working on your app!</Text>
//   //     <StatusBar style="auto" />
//   //   </View>
//   // );
//   return <Initloader />;//<RootNavigator />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
export default class App extends Component {
  //debugger;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  //Get Home Screen Data API Action
  componentDidMount() {
    this.loadAPI(); // Call home screen get data API function
    //setTimeout(this.setState(this.loadAPI()), 2000);
  }
 
  //Login API Function
  loadAPI = () => {
    //debugger;
    console.log(this.state.isLoading);
    const API_URL="https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly";
    this.setState({ isLoading: true }); // Once You Call the API Action loading will be true
    fetch(API_URL, {
      method: "GET",     
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(responseText => {
        console.log(responseText['message']);
        // if(responseText['message']=='You are not subscribed to this API.'){
        //   this.setState({ isLoading: true });
        // }else{
        
        debugger;
        // You can do anything accroding to your API response
        this.setState({ isLoading: false }); // After getting response make loading to false
      //}
      })
      .catch(error => {});
  };

  render() {
    //debugger;
    //this.setState({isLoading: true });
    setTimeout(function(){this.setState({timePassed: false})}, 50000);
    if(this.state.isLoading){
       return (
        <>
        <Initloader />
      <View style={{ flex:1,
    justifyContent: 'flex-end',padding: 10,paddingBottom: 40, alignItems: "center"}}>
        {this.state.isLoading && <ActivityIndicator style={{marginBottom:20,}} size="large" color="#00ff00"  />}
        {<Text >Powered by V_R Two</Text>}
        {/* color={"#999999"} */}
      </View>
      </>
    );
  }else{
    console.log("Main load",<Main />);
    return (
      <>
      <Main />
      </>
    );
  }
  }
}