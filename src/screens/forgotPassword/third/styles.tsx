import styled from 'styled-components/native';

interface RuleProps {
    color: string;
}

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

export const ButtonArea = styled.View`
    margin-top: 32px;
`;

export const BoxPreRequisites = styled.View``;

export const BoxRule = styled.View`
    flex: 1;
    margin: 3px 0px;
    flex-wrap: nowrap;
`;

export const PreRequisitesBody = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const PreRequisitesTitle = styled.Text`
    font-size: 14px;
    color:#697586;
    font-weight: 600;
    margin-bottom: 7px;
    font-family: 'Inter_400Regular';
`;

export const ImageReset = styled.View`
    margin-right: 2px;
`;

export const Rule = styled.Text<RuleProps>`
    font-size: 14px;
    color: ${(props) => props.color};
    font-weight: 600;
    font-family: 'Inter_400Regular';
`;
