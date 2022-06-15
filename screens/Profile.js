
import React from 'react';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import Constants from 'expo-constants'
import { Card,FAB,Title,Button } from 'react-native-paper';
import { style } from '@mui/system';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons,Ionicons  } from '@expo/vector-icons'; 

export default function Profile() {

  return (

    <View style={styles.container}>

<LinearGradient 

start={{x: 1.0  , y: 0.6}} 
end={{x: 2.5, y: 2.0}}
locations={[0,0.5,0.6]}
colors={['#4c669f', '#3b5998', '#192f6a']}
style={{height:180,width:400}}

/>
<View style={styles.ppic}>

<Image style={{height:160 , width:160 , borderRadius:160/2}}
source={{uri:"https://images.unsplash.com/photo-1655119373888-1bce2223555a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}
/>

<View style={styles.text}>
    <Title style={{fontWeight:'bold'}}>Shaffay Bajwa</Title>
    <Text >React Native Dev</Text>
</View>



</View>

<View style={styles.body}> 


<Card style={styles.cards}  onPress={()=>{ console.log('PressedEmail') }} >

  <View style={styles.cardview}>

    <MaterialIcons  name="email" size={28} color="#8c8570" />

    <Text style={styles.cardtext} > Email: </Text>

    <Text style={styles.textdetail} >shaffaybajwa@gmail.com </Text>

  </View>

</Card>
<Card style={styles.cards}  onPress={()=>{ console.log('PressedPhone') }} >
  <View style={styles.cardview}>
  <Ionicons name="ios-phone-portrait" size={28} color="#8c8570" />             
    <Text style={styles.cardtext} > Phone: </Text>
    <Text style={styles.textdetail} 
    > 
     0312857171
    </Text>
  </View>
</Card>
<Card style={styles.cards}  onPress={()=>{ console.log('PressedSalary') }} >
  <View style={styles.cardview}>
  <MaterialIcons name="attach-money" size={28} color="#8c8570" />              
    <Text style={styles.cardtext} > Salary: </Text>
    <Text style={styles.textdetail} 
    > 
    125K
    </Text>
  </View>
</Card>


  <View style={styles.buttonpanel} >
    
        <Button style={styles.btn} icon="update" theme={theme} mode="contained" onPress={() => console.log('Pressed')}>
          Edit Employee
        </Button>
        <Button style={styles.btn} icon="delete" theme={theme} mode="contained" onPress={() => console.log('Pressed')}>
          Fire Employee
        </Button>


  </View>


</View>


    
    </View>
  );
}
const theme = {

  colors:{
    primary: '#211c0e',
    accent: '#877029',
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
ppic:{
    marginTop:-50,
    alignItems:"center"
},
text:{
    alignItems:"center",
    margin:2
},
body:{
marginTop:15,

},
cards:{
  marginLeft:30,
  marginRight:30,
  marginTop:12,
  borderRadius:18,
 
},
title:{
  alignItems:"center",
  marginTop:10,
  
},
cardview:{
  margin:8,
  flexDirection:"row",
  marginLeft:15

},
cardtext:{
  
  //marginTop:2,
  fontWeight:'bold',
  fontSize:20
},
buttonpanel:{

  marginTop:35,
  flexDirection:"row",
  justifyContent:"space-evenly"


},
btn:{
  margin:8,
  borderRadius:10,
  

},
textdetail:{
  fontSize:17,
  fontWeight:"400",
  marginTop:6
}
});
