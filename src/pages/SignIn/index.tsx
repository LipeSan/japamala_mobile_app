import React, { useEffect, useState, useContext, useReducer } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Container, InputArea, HeaderArea, ForgotPasswordMessageButton, ForgotPasswordMessageButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { doLogin } from '../../services/auth';
import Alert from '../../shares/alert';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext'

import FatButton from '../../components/Button/index';
import FatInput from '../../components/Input/index';
import Header from '../../components/Header/index';



const SignIn = () => {

    //STATES
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    //ANOTHER VARIABLES
    const navigation = useNavigation();

    //METHODS
    const handleSignIn = () => {
        if(emailField !== '' && passwordField !== ''){
            let object = {
                email: emailField,
                password: passwordField
            }
            doLogin(object).then(data => {
                if(data.status === 200 && data.data.token){
                    let object = data.data;
                    console.log("DATA", data.data);  
                    AsyncStorage.setItem('token', object.token);
                    return navigation.navigate('MainTab');           
                } else if(data.status === 400){
                    Alert.SimpleAlert({
                        title:'Alert',
                        message:data.data.message
                    })
                } else {
                    Alert.SimpleAlert({
                        title:'Alert',
                        message:"We have any problem on Server!"
                    })
                }       
            });
        } else {
            Alert.SimpleAlert({
                title:'Alert',
                message:"You need to fill email and password!"
            })
        }
    }

    const handleSignUp = () => {
        navigation.reset({
            routes: [{ name: 'SignUp', params: { signup: true } }],
        })
    }

    const handleFacebook = () => {

    }

    const forgotPassword = () => {
        navigation.reset({
            routes: [{ name: 'SignUp', params: { signup: false } }],
        })
    }

    return (
        <Container>

            <HeaderArea>
                <Header />
            </HeaderArea>
            <ScrollView>
                <InputArea>

                    {/* ROW WITH INPUTS */}
                    <View style={{ paddingTop: 30, paddingBottom: 30 }}>
                        <FatInput placeholder='Email' value={emailField} onChangeText={(email: string) => setEmailField(email)} />
                        <FatInput placeholder='Password' secureTextEntry={true} value={passwordField} onChangeText={(password: string) => setPasswordField(password)} />
                        <ForgotPasswordMessageButton onPress={forgotPassword}>
                            <ForgotPasswordMessageButtonText>Forgot Password</ForgotPasswordMessageButtonText>
                        </ForgotPasswordMessageButton>
                        {/* <Text onPress={() => forgotPassword} style={{ textAlign: 'right', color: '#707070' }}>Forgot password?</Text> */}
                    </View>

                    {/* ROW WITH LOGIN AND REGISTER BUTTON */}
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: '50%', paddingRight: 10 }}>
                            <FatButton text='Signin' onPress={handleSignIn} backgroundColor='#5B56CC'></FatButton>
                        </View>
                        <View style={{ width: '50%', paddingLeft: 10 }}>
                            <FatButton text='Signup' onPress={handleSignUp} backgroundColor='#CC7F56'></FatButton>
                        </View>
                    </View>

                    {/* ROW WITH OR */}
                    <View style={{ flexDirection: "row", margin: 20 }}>
                        <View style={{ width: '45%' }}>
                            <View style={{ borderTopColor: '#707070', borderTopWidth: 1, marginTop: 10 }}></View>
                        </View>
                        <Text style={{ width: '10%', textAlign: "center", color: '#707070' }}>or</Text>
                        <View style={{ width: '45%' }}>
                            <View style={{ borderTopColor: '#707070', borderTopWidth: 1, marginTop: 10 }}></View>
                        </View>
                    </View>

                    {/* ROW WITH FACEBOOK BUTTON */}
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: '100%', }}>
                            <FatButton text='Facebook' onPress={handleFacebook} backgroundColor='#4267B2'></FatButton>
                        </View>
                    </View>
                </InputArea>
            </ScrollView>
        </Container>
    )
}

export default SignIn;