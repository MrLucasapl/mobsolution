import styled from 'styled-components/native';

interface ThemeProgressProps {
    progress: number;
}

export const BoxDropdown = styled.View`
    width: 100%;
    align-items: flex-start;
`;

export const BoxItemStatisticsTheme = styled.View`
    width: 100%;
    height: 160px;
    padding: 12px 16px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #CDD5DF;
`;

export const BoxThemeName = styled.View`
    flex-direction: row;
`;

export const ThemeImage = styled.Image`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    background-color: antiquewhite;
`;

export const ThemeName = styled.Text`
    font-size: 16px;
    color: #1C1C1C;
    font-weight: 700;
    font-family: 'Inter_400Regular';
`;

export const BoxStatus = styled.View`
`;

export const BoxStatusText = styled.View`
    margin: 10px 0;
    flex-direction: row;
`;

export const ThemeValueText = styled.Text`
    font-size: 16px;
    color: #1C1C1C;
    font-weight: 700;
    margin-right: 8px;
    font-family: 'Inter_400Regular';
`;

export const ThemeText = styled.Text`
    font-size: 14px;
    color: #4B5565;
    font-weight: 500;
    font-family: 'Inter_400Regular';
`;

export const ThemeProgressContainer = styled.View`
    width: 100%;
    height: 12px;
    border-radius: 4px;
    background-color: #E3E8EF;
`;

export const ThemeProgress = styled.View<ThemeProgressProps>`
    width: ${(props) => props.progress + '%' || '0%'};
    height: 12px;
    border-radius: 4px;
    background-color: #095A88;
`;