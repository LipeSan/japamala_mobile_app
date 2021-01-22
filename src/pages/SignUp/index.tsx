import React, { useEffect, useState } from 'react';
import { Container, InputArea, HeaderArea, SignInMessageButton, SignInMessageButtonText, SignInMessageButtonTextBold } from './styles';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header/index';
import { ScrollView, View } from 'react-native';
import FatInput from '../../components/Input';
import FatButton from '../../components/Button';

const SignUp = ({ route }: any) => {
    //const { signup } = route.params;

    //VARIABLES
    const navigation = useNavigation();
    const [signup, setSignup] = useState(false);
    const [emailField, setEmailField] = useState('');
    const [firstNameField, setFirstNameField] = useState('');
    const [lastNameField, setLastNameField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [confirmPasswordField, setConfirmPasswordField] = useState('');

    useEffect(() => {
        route.params.signup ? setSignup(route.params.signup) : setSignup(false);
    }, []);

    //METHODS
    const handleSignIn = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        })
    }

    const handleForgotPassword = () => {

    }

    const handleSignUp = () => {

    }

    return (
        <Container>
            
                <HeaderArea>
                    <Header />
                </HeaderArea>
                <ScrollView>
                <InputArea>
                    {/* ROW WITH INPUTS */}
                    {!signup ?
                        <View>
                            <View style={{ paddingTop: 30, paddingBottom: 30 }}>
                                <FatInput placeholder='Email' value={emailField} onChangeText={(email: string) => setEmailField(email)} />
                            </View>

                            {/* ROW WITH FORGOT BUTTON */}
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: '100%', }}>
                                    <FatButton text='Send' onPress={handleForgotPassword} backgroundColor='#CC7F56'></FatButton>
                                </View>
                            </View>
                        </View>
                        : <View>
                            <View style={{ paddingTop: 30, paddingBottom: 30 }}>
                                <FatInput placeholder='First Name' value={firstNameField} onChangeText={(firstName: string) => setFirstNameField(firstName)} />
                                <FatInput placeholder='Last Name' value={lastNameField} onChangeText={(lastName: string) => setLastNameField(lastName)} />
                                <FatInput placeholder='Email' value={emailField} onChangeText={(email: string) => setEmailField(email)} />
                                <FatInput placeholder='Password' value={passwordField} secureTextEntry={true} onChangeText={(password: string) => setPasswordField(password)} />
                                <FatInput placeholder='Confirm Password' value={confirmPasswordField} secureTextEntry={true} onChangeText={(confirmPassword: string) => setConfirmPasswordField(confirmPassword)} />
                            </View>

                            {/* ROW WITH REGISTER BUTTON */}
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: '100%', }}>
                                    <FatButton text='Register' onPress={handleSignUp} backgroundColor='#CC7F56'></FatButton>
                                </View>
                            </View>
                        </View>}




                    <SignInMessageButton onPress={handleSignIn}>
                        <SignInMessageButtonText >Do you have register?</SignInMessageButtonText>
                        <SignInMessageButtonTextBold>SignIn.</SignInMessageButtonTextBold>
                    </SignInMessageButton>
                </InputArea>
            </ScrollView>
        </Container>
    )
}

export default SignUp;