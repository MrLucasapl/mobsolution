import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    padding: 40px 0px 20px 0px;
    background-color:#FEFEFE;
`;

export const HeaderArea = styled.View`
    width: 100%;
    padding: 36px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const HeaderText = styled.Text`
    font-size: 18px;
    color: #323F4B;
    font-weight: 700;
    font-family: 'Inter_400Regular';
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 28px;
    top: 79px;
    z-index: 9;
`;

export const BoxBody = styled.View`
    flex: 1;
    width: 100%;
    padding: 0px 20px;
    justify-content: space-between;
`;

export const ContainerBody = styled.View``;

export const TitleText = styled.Text`
    font-size: 24px;
    color: #323F4B;
    font-weight: 700;
    font-family: 'Inter_400Regular';
`;

export const TextDescription = styled.Text`
    font-size: 16px;
    color: #4B5565;
    font-weight: 600;
    margin-top: 8px;
    margin-bottom: 16px;
    font-family: 'Inter_400Regular';
`;

export const BoxResend = styled.View`
    width:100%;
    align-items: flex-start;
`;

export const TextEmphasis =styled.Text`
    font-size: 16px;
    color: #4B5565;
    font-weight: 700;
    margin-top: 8px;
    margin-bottom: 16px;
    font-family: 'Inter_400Regular';
`;