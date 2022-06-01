import React from 'react';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,FAB  } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const data = [
    {id:"1",name:"shaffaybajwa",position:"Faculty",img:"https://images.unsplash.com/photo-1605256801693-cbd9b3f3ae3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
    {id:"2",name:"Usman",position:"Student",img:"https://images.unsplash.com/photo-1605256801693-cbd9b3f3ae3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
    {id:"3",name:"Zain",position:"Student",img:"https://images.unsplash.com/photo-1605256801693-cbd9b3f3ae3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
]

const  renderList = (item)=>{
    return(

        <View style={styles.sigleview}>
          
        <Card key={item.id} >
       
       
               <View style={styles.root}>
       
                   <Image
                   source={{uri:item.img}}
                   style={styles.cardimage}
                  >
       
                   </Image>
       
                   <View style={styles.cardview}>
       
       
                    <Text>{item.name}</Text>
                   <Text>{item.position}</Text>
       
                   </View>
       
                   
               </View>
       
       
       
            </Card>
        </View>
              
        
    )
}



export default function Test(){

    return(
        <View style={{flex:1}}>

       
        <View>

<FlatList

data= {data}

renderItem = {({item})=>{
    return renderList(item)
}}


/>
       
 

 </View>


 <FAB
    style={styles.fab}
    medium
    theme={theme}
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
       
        </View>

    );



}
const theme = {

    colors:{
        primary: '#32a852',
        accent: 'red',
    }
   
}


const styles = StyleSheet.create({
        root:{
            flexDirection:"row",
            marginTop:22,
        },
    cardview:{
        margin:8,
        padding:10,

    },
    cardimage:{

        height:60,
        width:60,
        borderRadius:60/2,
        marginLeft:8,
        margin:4,

    },
    sigleview:{
margin:3
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },


  });
  