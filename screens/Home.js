import React from 'react';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import Constants from 'expo-constants'
import { Card,FAB } from 'react-native-paper';
import { style } from '@mui/system';

export default function Home() {
  const data =[
    {id:"1",name:"Shaffay Bajwa",position:"React Dev",img:"https://images.unsplash.com/photo-1653858381366-7d1ec0b6b2d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"},
    {id:"2",name:"Haris Jameel",position:"React Dev",img:"https://images.unsplash.com/photo-1653858381366-7d1ec0b6b2d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"},
 
  ]

const renderList =  ({item}) =>{
      return(

        <Card style={styles.card} key={item.id}>

        <View style={{flexDirection:"row"}}>

                    <Image 
                    style={styles.img}
                    source={{ uri: item.img }} />

              <View style={styles.cardtext}>

                          <Text>{item.name}</Text>
                          <Text>{item.position}</Text>
              </View>
        </View>
    </Card>

      )
  }

  return (

    <View style={styles.container}>

     

      <FlatList 
      
      data={data}

 
      renderItem = {(item)=>{
        return renderList(item)
    }}
    
      
      keyExtractor={(item) => item.id}
 
    

      />


    <FAB
    style={styles.fab}
    larger
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  card:{
      margin:8,
  },
  img:{
    height:60,
    width:60,
    borderRadius:60/2,
    margin:5,
  },
  cardtext:{
    flexDirection:"column",
    marginTop:10,
    marginLeft:3
  },  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
 
});
