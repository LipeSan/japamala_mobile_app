import styled from "styled-components/native";

const Container = styled.SafeAreaView`
    background-color: #EAEEFF;
    flex: 1;
    padding: 20px;
`;

const Profile = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    padding:5px;
`;

const NameArea = styled.View`
    flex-direction:column;
    margin-top: auto;
    margin-bottom: auto;
`;

const MenuArea = styled.View`
    flex-direction: column;
    margin-top: 35px;
`;

const NameText = styled.Text`
    font-size: 18px;
`;

const TimeText = styled.Text`
    font-size: 14px;
`;

const ScrollView = styled.ScrollView`
    padding: 20px;
`;

export default {
    Container,
    Profile,
    NameArea,
    NameText,
    TimeText,
    ScrollView,
    MenuArea,
};