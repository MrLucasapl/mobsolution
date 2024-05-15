import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
    width: 290px;
    padding: 16px 0px;
`

export const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: '#CDD5DF',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#4B5565'
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});