import React, { useEffect, useState } from 'react';
import { Container, InputArea, HeaderArea, DateArea, TextField } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header/index';
import { ScrollView, View } from 'react-native';
import FatInput from '../../components/Input';
import FatButton from '../../components/Button';

const Profile = ({ route }: any) => {
    //VARIABLES
    const navigation = useNavigation();
    const [emailField, setEmailField] = useState('');
    const [firstNameField, setFirstNameField] = useState('');
    const [lastNameField, setLastNameField] = useState('');
    const [birthday, setBirthday] = useState(new Date());

    useEffect(() => {

    }, []);

    //METHODS
    const getUserInformation = () => {
        
    }

    const handleSave = () => {

    }

    const onChange = ({event, selectedDate}:any) => {
        const currentDate = selectedDate || birthday;
        setBirthday(currentDate);
      };

    return (
        <Container>

            <HeaderArea>
                <Header image={require('../../assets/imgs/avatar-demo.png')} />
            </HeaderArea>
            <ScrollView>
                <InputArea>
                    {/* ROW WITH INPUTS */}
                    <View>
                        <View style={{ paddingTop: 30, paddingBottom: 30 }}>
                            <FatInput placeholder='First Name' value={firstNameField} onChangeText={(firstName: string) => setFirstNameField(firstName)} />
                            <FatInput placeholder='Last Name' value={lastNameField} onChangeText={(lastName: string) => setFirstNameField(lastName)} />
                            <FatInput placeholder='Email' value={emailField} onChangeText={(email: string) => setEmailField(email)} />
                            <DateArea>
                                <TextField fontSize={16}>{'Birthday'}</TextField>
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={birthday ? birthday : undefined}
                                display="default"
                                onChange={onChange}

                                style={{width:'50%', backgroundColor:'#f5f5f5f5', position:'relative', right:0}}
                            />
                            </DateArea>
                            
                        </View>

                        {/* ROW WITH REGISTER BUTTON */}
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: '100%', }}>
                                <FatButton text='Save' onPress={handleSave} backgroundColor='#CC7F56'></FatButton>
                            </View>
                        </View>
                    </View>
                </InputArea>
            </ScrollView>
        </Container>
    )
}

export default Profile;