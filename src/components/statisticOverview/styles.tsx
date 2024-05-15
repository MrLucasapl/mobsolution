import styled from 'styled-components/native';

export const BoxOverviewLine = styled.View`
    width: 100%;
    padding: 10px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #E3E8EF;
    justify-content: space-between;
`;

export const NameLine = styled.Text`
    font-size: 14px;
    color: #4B5565;
    text-align: center;
    font-family: 'Inter_400Regular';
`;

export const ValueLine = styled.Text`
    color: #1C1C1C;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Inter_400Regular';
`;