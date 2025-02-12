import { TextInput, View, StyleSheet, Text  } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

 
    interface TextInputFieldProps {
        input: string;
        showForgot?: boolean;
      }

      const handleForgotPassword = () => {
        console.log('Forgot password link pressed');
      };
   
   

export  default function TextInputField({ input, showForgot }: TextInputFieldProps)  {
    
    function IconDisplay(input: String) {
        if (input === "Email") {
             return  <AntDesign name="mail" size={24} color="black" style={styles.icons}/>
        } else if (input === "Password") {
             return  <Entypo name="key" size={24} color="black"  style={styles.icons}/>
        } else if (input === "Username") {
            return  <AntDesign name="user" size={24} color="black" style={styles.icons}/>
        }
    }

    return (
        <View style={styles.Container}>
         {IconDisplay(input) }
            <TextInput
                style={styles.TextInput}
                placeholder= { input } 
                placeholderTextColor= 'grey'
            />  
            {input === "Password" && showForgot &&(
             <Text style={styles.forgottext} onPress={handleForgotPassword}> 
             Forgot 
             </Text >    
            )}
            
        </View>          
    )
}

 const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
       // position: 'relative',
       paddingHorizontal: 10, //padding for left and right
    },
    TextInput: {
        flex: 1,
        height: 40,
        paddingLeft: 40,
        color: 'black',
    },
    icons: {
        //position: 'absolute',
        left: 10,
       
    },
    forgottext: {
       // position: 'absolute',
        right: 10,
        color: 'orange',
        fontWeight: 'bold',
        left: 2,
        
    }   

 })