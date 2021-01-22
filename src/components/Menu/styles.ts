import styled from "styled-components/native";


const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    padding:5px;
    padding-top:30px;
`;

const MenuText = styled.Text`
    font-size: ${(props:any) => props.fontSize ? props.fontSize+'px' : 18+'px'};
`;

const IconAndTextArea = styled.View`
    flex-direction: row;
`;

const TextArea = styled.View`
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 20px;
`;


export default {
    Container,
    MenuText,
    TextArea,
    IconAndTextArea,
};