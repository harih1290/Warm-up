import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const GradientText = (props) => {
    return (
    //   <MaskedView maskElement={<Text {...props} />}>
    //     <LinearGradient
    //       colors={["red", "green"]}
    //       start={{ x: 0, y: 0 }}
    //       end={{ x: 1, y: 0 }}
    //     >
        <>
          {/* <Text {...props} style={[props.style]} >Z </Text> */}
          <Text {...props} style={{color:'#A1AEBF',fontSize: 62,
    fontWeight: 'bold',}} >Warmup</Text>
         
          </>
    //     </LinearGradient>
    //   </MaskedView>
    );
  };
  export default GradientText;