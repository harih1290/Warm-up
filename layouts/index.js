import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator,Pressable, } from 'react-native';
import React, { Component} from 'react';
//const Home = React.lazy(() => import('../layouts/index'));

export default class Main extends Component {
  //debugger;
  constructor(props) {
    super(props);
    this.state = {
        isLoadings: true,
    };
  }

  //Get Home Screen Data API Action
  componentDidMount() {
    //this.DashboardInformation(); // Call home screen get data API function
  }
 
  //DashboardInformation API Function
//   DashboardInformation = () => {
//     //debugger;
//     const dates=new Date();
//     console.log(dates,':',this.state.isLoading);
//     const API_URL="http://apimeme.com/meme?meme=10-Guy&top=Top+text&bottom=Bottom+text";
//     this.setState({ isLoading: true }); // Once You Call the API Action loading will be true
//     fetch(API_URL, {
//       method: "Get",
//       headers: {
//         "Content-Type": "application/image",
//       }
//     })
//       .then(response => response.json())
//       .then(responseText => {
//         console.log(responseText['message']);
//         //this.setState({ user: 'remo' });
//       })
//       .catch(error => {});
//   };

  render() {
    //debugger;
    return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Home Screen</Text>
      <Pressable
        style={styles.buttonStyle}>
        
        <Text style={styles.buttonTextStyle}>Go To Detail Screen</Text>
      </Pressable>
    </View>
);
     
  }
}
const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 32,
    },
    buttonStyle: {
      height: 54,
      width: '80%',
      marginTop: 32,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2EE59D',
      shadowRadius: 5,
      shadowOpacity: 0.7,
      shadowColor: 'rgba(46, 229, 157, 0.5)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    buttonTextStyle: {
      color: '#fdfdfd',
      fontWeight: '700',
    },
  });
  