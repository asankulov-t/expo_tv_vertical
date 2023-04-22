import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from "react";
import TimedSlideshow from "react-native-timed-slideshow";

export default function App() {

  let[data, setData]=useState()

  useEffect(()=>{
      fetch('https://64411cb4792fe886a89eaf4b.mockapi.io/tv_data')
          .then((response)=>response.json())
          .then((data)=>setData(data));

  },[])
  console.log(data)
  return (
    <View style={styles.container}>
      {data&&<TimedSlideshow
          duration={15000}
          renderIcon={()=>false}
          onClose={()=>false}

          items={data}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
