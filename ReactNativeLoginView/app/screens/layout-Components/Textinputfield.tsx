import React, { useState, useEffect } from "react";
import { TextInput, View, StyleSheet, Text, Animated } from "react-native";
import { AntDesign, Entypo  } from "@expo/vector-icons";


 
    interface TextInputFieldProps {
        input: string;
        showForgot?: boolean;
      }

      const handleForgotPassword = () => {
        console.log('Forgot password link pressed');
      };
   
   

export  default function TextInputField({ input, showForgot }: TextInputFieldProps)  {
    
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    const animatedIsFocused = new Animated.Value(value === '' ? 0 : 1);

    useEffect(() => {
        Animated.timing(animatedIsFocused, {
          toValue: isFocused || value !== '' ? 1 : 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }, [isFocused, value]);

    function IconDisplay(input: String) {
        if (input === "Email") {
             return  <AntDesign name="mail" size={24} color="black" style={styles.icons}/>
        } else if (input === "Password") {
             return  <Entypo name="key" size={24} color="black"  style={styles.icons}/>
        } else if (input === "Username") {
            return  <AntDesign name="user" size={24} color="black" style={styles.icons}/>
        }
    }

    const labelStyle = {
      position: 'absolute' as 'absolute',
        top: animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [18, -10],
        }),
        fontSize: animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [16, 12],
        }),
        color: animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: ['grey', 'black'],
        }),
      };


    return (
        <View style={styles.outercontainer}>
         {IconDisplay(input) }
       
        <View style={styles.Container}>
           <Animated.Text style={styles.Animatedlabel && [labelStyle]}>
            {isFocused === false ? '' : input }
        </Animated.Text> 
         <TextInput
                style={styles.TextInput}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={(text) => setValue(text)}
                value={value}
                placeholderTextColor="black"
                placeholder={isFocused ? '' : input}/>
                
                {input === "Password" && showForgot &&(
                   <Text style={styles.forgottext} onPress={handleForgotPassword}> 
                   Forgot 
                   </Text >    
                )}
           </View> 
        </View>          
    )
}










 const styles = StyleSheet.create({
    outercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        borderWidth: 0,
        borderRadius: 10,
        width: '90%',
    //  position: 'relative',
        paddingLeft: "4%", //padding for left and right
    },
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
    //  position: 'relative',
        paddingRight: 5, //padding for left and right
    },
    TextInput: {
        flex: 1,
        height: 40,
        paddingLeft: 0,
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
    },
    Animatedlabel: {
        left: 80,
        top: 25,
        position: 'absolute',
    }

 })