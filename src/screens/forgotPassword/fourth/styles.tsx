import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 40px 0px 20px 0px;
    background-color:#F4FBFE;
`;

export const ButtonArea = styled.View`
    width: 100%;
    padding: 0px 20px;
`;

export const BoxPasswordReset = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
`;

export const TitleText = styled.Text`
    font-size: 32px;
    color: #063C5B;
    font-weight: 700;
    margin-top: 8px;
    text-align: center;
    margin-bottom: 8px;
    font-family: 'Inter_400Regular';
`;

export const DescriptionText = styled.Text`
    font-size: 16px;
    color:#063C5B;
    font-weight: 600;
    margin-top: 8px;
    text-align: center;
    margin-bottom: 16px;
    font-family: 'Inter_400Regular';
`;
