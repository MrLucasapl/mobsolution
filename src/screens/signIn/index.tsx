import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SignInput } from '../../components/input';

import Api, { AuthenticationError } from '../../api';

import {
    Container,
    InputArea,
    HeaderArea,
    HeaderText,
    TextBody,
    BodyArea,
    ButtonArea
} from './styles';

import EmailIcon from '../../assets/carta.svg';
import LockIcon from '../../assets/cadeado.svg';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../components/button';

export const SignIn = () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField);

            if (json && 'error' in json) {
                const authenticationError = json as AuthenticationError;
                alert(authenticationError.mensagem.replace(/\+/g, ' '));
                return;
            }

            if (json && json.token) {
                await AsyncStorage.setItem('token', json.token);

                navigation.reset({
                    // @ts-ignore
                    routes: [{ name: 'Home' }]
                });
            }

        } else {
            alert("Preencha os campos!");
        }
    }

    const handleButtonClickForgotPassword = () => {
        // @ts-ignore
        navigation.navigate('First');
    }

    const handleScreenPress = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={handleScreenPress}>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <HeaderArea>
                    <HeaderText>Login</HeaderText>
                </HeaderArea>

                <BodyArea>
                    <TextBody>Bem-vindo(a) de volta!</TextBody>
                </BodyArea>

                <InputArea>
                    <SignInput
                        label='Email'
                        IconSvg={EmailIcon}
                        placeholder="Insira seu email"
                        value={emailField}
                        onChangeText={t => setEmailField(t)}
                    />

                    <SignInput
                        label='Senha'
                        IconSvg={LockIcon}
                        placeholder="Insira sua senha"
                        value={passwordField}
                        onChangeText={t => setPasswordField(t)}
                        password={true}
                    />

                    <ButtonArea>
                        <Button value='Login' onPress={handleSignClick} />
                    </ButtonArea>
                </InputArea>

                <Button
                    value='Esqueci a senha'
                    onPress={handleButtonClickForgotPassword}
                    colorText='#344054'
                    sixeText={16}
                    weightText={700}
                    style={{
                        marginTop: 20,
                        backgroundColor: '#ffffff'
                    }}
                />
            </Container>
        </TouchableWithoutFeedback>
    )
}