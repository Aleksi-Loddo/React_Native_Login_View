import {ImageBackground , Text,StyleSheet, View, } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { goBack } from "expo-router/build/global-state/routing";
import TextInputField from "./layout-Components/Textinputfield";
import ButtonComponent from "./layout-Components/Button";

export default function SignupView  ({ navigation }: any) {
    const handleSignup = () => {
      console.log('Signup button pressed');
    };

    const handleBack = () => {
        navigation.goBack();
      };


    return (
    <ImageBackground  source={require('./background_image/background_ui.png')}  style={{width: '100%', height: '100%', }}  >
       <View style={Styles.container}>
       <AntDesign name="arrowleft" style={Styles.goBack} size={24}  onPress={handleBack}/>
       
       <Text style={Styles.title}>Create account</Text>
        <TextInputField input="Username" />
        <TextInputField input="Email" />
        <TextInputField input="Password" />
        <TextInputField input="Password" />
        <ButtonComponent title="Sign up" onPress={handleSignup} />
        <Text style={Styles.bottomText}>Already have an account? 
                <Text style={{color: "orange", fontWeight: "bold"}} onPress={handleBack}>
                    Sign in
                </Text>
            </Text>
       </View>
    </ImageBackground>
    )
}


const Styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    },
    goBack: {
    paddingTop: "10%",
    paddingLeft: "10%",
    alignSelf: "flex-start",
    
    },
    title: {
        paddingTop: "20%",
        paddingLeft: "10%",
        fontWeight: "bold",
        fontSize: 30,
        alignSelf: "flex-start",
        paddingBottom: "10%",
    },
    bottomText: {
        flexDirection: 'column',
        position: 'absolute',
        alignSelf: "center",

        bottom: 30,
        },
    

})