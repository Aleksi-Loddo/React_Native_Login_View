import { ImageBackground,Text, View, StyleSheet,  } from "react-native";
import  TextInputField  from "./layout-Components/Textinputfield";
import ButtonComponent from "./layout-Components/Button";
import React from "react";


export default function LoginView({ navigation }: any) {
  const handleLogin = () => {
    console.log('Login button pressed');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

 
 
  
  
  return (
    
 <ImageBackground  source={require('./background_image/background_ui.png')}  style={{width: '100%', height: '100%', }}  >
      <View style={styles.container}>
     
        <Text style={styles.title}> Login</Text> 
        <Text style={styles.small_text}> Please sign in to continue</Text>
        <TextInputField input ="Email" />
        <TextInputField input ="Password" showForgot={true}/>
        <ButtonComponent title="Login" onPress={handleLogin} />

        <Text style={styles.bottomText}>Don't have and acccount? 
          <Text  style={{color: "orange", fontWeight: "bold"  }} onPress={handleSignup}> 
              Sign up
          </Text> 
        </Text>

      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    },
    title: {
      fontSize: 40,
      fontWeight: "bold",
      marginBottom: 50,
      left : 30,
      alignSelf: 'flex-start',
      
    },
    small_text: {
     //text shoul at the bottom of the screen
     flexDirection: 'column',
      alignSelf: 'flex-start',
      alignContent: 'flex-start',
      bottom: 40,
      left: 40,
      color: "grey",
    },
    bottomText: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 30,
    },

});