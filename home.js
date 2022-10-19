import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AlertDemo from './AlertDemo';
import { Input } from 'react-native-elements/dist/input/Input';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { ButtonGroup } from 'react-native-elements/dist/buttons/ButtonGroup';


export default function Home({navigation}){


const [email, setEmail] = useState(null)

const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "AlertDemo"}]
    })
}


return(
    
    <View style={estilos.container}>
    <AlertDemo/>
    <Text style={estilos.titulo} >Quizz Beta</Text>
    <Input
    placeholder='Usuário'
    leftIcon={{type: 'font-awesome', name: 'user'}}     
    onChangeText={value => setEmail(value)} // guardando o email na variável email
    keyboardType='email-address'
    />
    
    <TouchableOpacity onPress={entrar} style = {estilos.botao}>
        <Icon 
        name= "check"
        size={15}
        color='white'
        />
    
    <Text style={estilos.texto}>Enviar</Text>
    </TouchableOpacity>
    
    
    </View>
)
}

const estilos = StyleSheet.create({
container:{
flex:1,
justifyContent: 'center',
marginHorizontal: 16,
},
texto:{
textAlign: 'center',
fontSize: 20,
fontWeight:'bold',
color:'white'
},

titulo: {
textAlign: 'center',
marginVertical: 8,
fontSize: 18,
fontWeight: 'bold'
},
botao: {
    margin:10,
    marginLeft: 'auto',
    marginRight:'auto',
    paddingTop: 5,
    paddingHorizontal: 5,
    borderRadius: 25,
    backgroundColor: "#03dbfc",
    width: 100
},

});