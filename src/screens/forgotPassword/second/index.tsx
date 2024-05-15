import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import BackIcocn from '../../../assets/back.svg'
import Api, { AuthenticationError } from '../../../api';

import {
    BackButton,
    BoxBody,
    BoxResend,
    Container,
    ContainerBody,
    HeaderArea,
    HeaderText,
    LoadingIcon,
    TextDescription,
    TextEmphasis,
    TitleText,
} from './styles';

import { Button } from '../../../components/button';
import { OTPInput } from '../../../components/OPTInput';

export const Second = () => {
    const navigation = useNavigation();
    const route = useRoute();
    let userInfo = { ...route.params as { email: string } }

    const [loading, setLoading] = useState(false);
    const [field, setField] = useState(['', '', '', '', '']);

    const anonymizeEmail = (email: string): string => {
        const partes = email.split("@");
        const nomeUsuario = partes[0];
        const dominio = partes[1];

        const metadeNomeUsuario = nomeUsuario.length / 2;
        const nomeUsuarioAnonimo = "****" + nomeUsuario.substring(metadeNomeUsuario);

        return `${nomeUsuarioAnonimo}@${dominio}`;
    }

    const handleBackButton = () => {
        navigation.goBack();
    }

    const handleSignClick = async () => {
        setLoading(true)
        const isAllFilled = field.every((digit) => digit !== '');

        if (isAllFilled) {
            let json = await Api.validateRecoveryCode(userInfo.email, field.join(''));

            if (json && 'error' in json) {

                if (!json.error) {
                    setLoading(false)
                    // @ts-ignore
                    navigation.navigate('Third', {
                        email: userInfo.email,
                        tokenRecuperarSenha: field.join(''),
                    });
                    return
                }

                const authenticationError = json as AuthenticationError;
                alert(authenticationError.mensagem.replace(/\+/g, ' '));
                setLoading(false)
                return;
            }

        } else {
            alert("Preencha os campos!");
            setLoading(false)
        }
    }

    const handleChangeInput = (value: string[]) => {
        setField(value)
    }

    const handleButtonClickResendCode = () => {
        handleSignClick()
    }

    useEffect(() => {
        if (field.every((digit) => digit !== '')) {
            handleSignClick();
            setField(['', '', '', '', ''])
        }
    }, [field]);
   
    return (
        <Container>

            <HeaderArea>
                <HeaderText>Esqueci a senha</HeaderText>
            </HeaderArea>

            {!loading &&
                <BoxBody>
                    <ContainerBody>
                        <TitleText>Verifique o código</TitleText>
                        <TextDescription>Verifique o código que enviamos para o email <TextEmphasis>{anonymizeEmail(userInfo.email)}</TextEmphasis></TextDescription>

                        <OTPInput length={5} value={field} onChange={handleChangeInput}></OTPInput>

                        <BoxResend>
                            <Button
                                value='Reenviar código'
                                onPress={handleButtonClickResendCode}
                                colorText='#0C78B6'
                                sixeText={16}
                                weightText={700}
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    marginTop: 20,
                                    backgroundColor: '#FFFFFF'
                                }}
                            />
                        </BoxResend>
                    </ContainerBody>
                </BoxBody>
            }

            {loading &&
                <LoadingIcon size="large" color="#323F4B" />
            }

            <BackButton onPress={handleBackButton}>
                <BackIcocn width="10" height="20" fill="#FFFFFF" />
            </BackButton>
        </Container>
    );
}