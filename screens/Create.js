import React, { useState } from "react";
import { StyleSheet,Modal, Text, View,Image,FlatList, Alert } from 'react-native';
import {Card , TextInput,Button  } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function CreateEmployee({ navigation }) {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [position, setPosition] = useState("");
  const [VModal, setModal] = useState(false);




  const pickFromCamera = async() =>{




   const { granted } = await Permissions.askAsync(Permissions.CAMERA);

   if(granted){

    let data = await ImagePicker.launchCameraAsync({
       mediaTypes:ImagePicker.MediaTypeOptions.Images,
       allowsEditing:true,
       aspect:[1,1],
       quality:1,

     })
     if(!data.cancelled){

      let newfile = {
        uri: data.uri ,
        type: `test/${data.uri.split(".")[1]}`,
        name: `test${data.uri.split(".")[1]}`,

      }
      handleupload(newfile);

    } else {
      Alert.alert("Error")
    }



   }

      

  }

  const pickFromGallery = async() =>{

    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if(granted){
 
     let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[1,1],
        quality:1,
 
      })

      if(!data.cancelled){

        let newfile = {
          uri: data.uri ,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test${data.uri.split(".")[1]}`,

        }
        handleupload(newfile);

      } else {
        Alert.alert("Error")
      }


 
 
    }
 
       

  }


  const handleupload = (image) => {



      const data = new FormData();

      data.append("file", image);
      data.append("upload_preset", "file154");
      data.append("cloud_name", "herobotictech");

      fetch("https://api.cloudinary.com/v1_1/herobotictech/image/upload",{

        method: "post",
        body: data,
      }
      )
      .then((res) => res.json() )

      .then((data)=>{
        setPicture(data.url);
        setModal(false);
        console.log(data);
      })
      .catch((err) => {
        Alert.alert("error while uploading");
      });




  }

  return (
    <View style={styles.container}>

      <View style={styles.formsection}>

   <TextInput
      label="Name"
      style={styles.inputs}
      value={name}
      theme={theme}
      mode="outlined"
      onChangeText={text => setName(text)}
    />
   <TextInput
      label="Email"
      style={styles.inputs}
      value={email}
      theme={theme}
      mode="outlined"
      onChangeText={text => setEmail(text)}
    />
   <TextInput
      label="Position"
      style={styles.inputs}
      value={position}
      theme={theme}
      mode="outlined"
      onChangeText={text => setPosition(text)}
    />
   <TextInput
      label="Phone"
      style={styles.inputs}
      value={phone}
      theme={theme}
      mode="outlined"
      onChangeText={text => setPhone(text)}
    />
   <TextInput
      label="Salary"
      style={styles.inputs}
      value={salary}
      theme={theme}
      mode="outlined"
      onChangeText={text => setSalary(text)}
    />


  <Button style={styles.btn} theme={theme} icon="upload" mode="contained" 
  onPress={() => setModal(true)}>
    Upload Image
  </Button>
  <Button style={styles.btn} theme={theme} icon="content-save-settings-outline" mode="contained" onPress={() => submitData() }>
    Submit
  </Button>

      </View>





<Modal
  animationType="slide"
  transparent={true}
  visible={VModal}
  onRequestClose={() => {
    setModal(false);
  }}
>

    <View style={styles.modalview}>

      <View style={{  flexDirection:"row",justifyContent:"space-evenly"}}>

          <Button style={styles.mbtn} theme={theme} icon="camera-plus" mode="contained" onPress={() => pickFromCamera()}>
          Camera
          </Button>
          <Button style={styles.mbtn} theme={theme} icon="image-multiple" mode="contained" onPress={() => pickFromGallery()}>
          Gallery
          </Button>

      </View>

        <View style={{alignItems:"center"}}>
          <Button style={styles.cbtn} theme={{ colors:{primary:'#877029'} }} icon="backburger" mode="contained" onPress={() => setModal(false)}>
         Go Back
          </Button>

      </View>
          

    </View>


</Modal>


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



  },
  formsection:{
    margin:10,
  
    padding:8,
  },
  inputs:{
    margin:5,
  
  },
  btn:{
    marginTop:20,
  },
  modalview:{
   
    position: "absolute",
    bottom: -30,
    width: "100%",
    height: "19%",
    backgroundColor: "white",
    
  },
  mbtn:{
    margin:10,
    padding: 3,
  },
  cbtn:{
    margin:10,
    width:320,
    justifyContent:"center",
  }

});
