import React from 'react';
import { useNavigation } from '@react-navigation/native';

import FullApproved from '../../../assets/fullApproved.svg'

import {
    BoxPasswordReset,
    ButtonArea,
    Container,
    DescriptionText,
    TitleText,
} from './styles';

import { Button } from '../../../components/button';

export const Fourth = () => {
    const navigation = useNavigation();

    function handleSignClick(): void {
        navigation.reset({
            // @ts-ignore
            routes: [{ name: 'SignIn' }]
        });
    }

    return (
        <Container>
            <BoxPasswordReset>
                <FullApproved width="148" height="148" />
                <TitleText>Senha redefinida!</TitleText>
                <DescriptionText>Sua senha foi redefinida com sucesso. Clique abaixo para fazer o login</DescriptionText>
            </BoxPasswordReset>

            <ButtonArea>
                <Button value='Login' onPress={handleSignClick} />
            </ButtonArea>
        </Container>
    );
}