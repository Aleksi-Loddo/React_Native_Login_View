import { TouchableOpacity, Text, StyleSheet, View} from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface ButtonComponentProps {
    title: string;
    onPress?: () => void;
  }

export default function  ButtonComponent    ({ title, onPress }: ButtonComponentProps )  {
    
    return (
        <TouchableOpacity style={styles.button} onPress={onPress ? onPress: () => {}} >
      <Text style={styles.buttonText}>{title}</Text>
      <AntDesign name="arrowright" size={20} color="white" style={styles.icon} />
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
      backgroundColor: 'orange',
      borderRadius: 50,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      alignSelf: 'flex-end',
      right: 50,
      width: "30%",
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      marginRight: 10,
    },
    icon: {
        right: 5,
      //marginLeft: 10,
    },
  });
   /* 
       style={styles.button}
    */