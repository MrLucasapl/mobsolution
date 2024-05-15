import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    padding: 40px 20px 20px 20px;
    align-items: center;
    background-color:#FEFEFE;
`;

export const InputArea = styled.View`
    width: 100%;
`;

export const HeaderArea = styled.View`
    padding: 20px;
`;

export const HeaderText = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #323F4B;
    font-family: 'Inter_400Regular';
`;

export const TextBody = styled.Text`
    font-size: 24px;
    color: #1C1C1C;
    font-weight: 900;
    font-family: 'Inter_400Regular';
`;

export const BodyArea = styled.Text`
    width: 100%;
    margin-bottom: 9px;
    font-family: 'Inter_400Regular';
`;

export const ButtonArea = styled.View`
    margin-top: 32px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    align-items: center;
    border-radius: 30px;
    justify-content: center;
    background-color: #268596;
`;

export const CustomButtonText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-family: 'Inter_400Regular';
`;
