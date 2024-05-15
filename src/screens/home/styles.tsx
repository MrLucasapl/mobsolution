import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    padding: 40px 0px 20px 0px;
    background-color:#FEFEFE;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const HeaderArea = styled.View`
    padding: 30px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const HeaderText = styled.Text`
    width: 250px;
    font-size: 24px;
    color: #323F4B;
    font-weight: bold;
    font-family: 'Inter_400Regular';
`;

export const BoxTab = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const OverviewButton = styled.TouchableOpacity`
    width: 50%;
    padding: 20px;
    align-items: center;
`;

export const ThemeButton = styled.TouchableOpacity`
    width: 50%;
    padding: 20px;
    align-items: center;
`;

export const TextBoxTab = styled.Text`
    width: 250px;
    font-size: 16px;
    color: #323F4B;
    font-weight: bold;
    text-align: center;
    font-family: 'Inter_400Regular';
`;

export const ListArea = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 20px 20px 20px 20px;
`;


export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
