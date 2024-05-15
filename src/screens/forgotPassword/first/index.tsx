import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import BackIcocn from '../../../assets/back.svg'
import EmailIcon from '../../../assets/carta.svg';
import Api, { AuthenticationError } from '../../../api';

import {
    BackButton,
    BoxBody,
    ButtonArea,
    Container,
    ContainerBody,
    HeaderArea,
    HeaderText,
    LoadingIcon,
    TextDescription,
    TitleText,
} from './styles';

import { SignInput } from '../../../components/input';
import { Button } from '../../../components/button';

export const First = () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [emailField, setEmailField] = useState('generico1MobSolution@gmail.com');

    const handleBackButton = () => {
        navigation.goBack();
    }

    const handleSignClick = async () => {
        setLoading(true)
        if (emailField != '') {

            let json = await Api.forgotPassword(emailField);

            if (json && 'error' in json) {

                if (!json.error) {
                    setLoading(false)
                    // @ts-ignore
                    navigation.navigate('Second', {email: emailField});
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

    return (
        <Container>

            <HeaderArea>
                <HeaderText>Esqueci a senha</HeaderText>
            </HeaderArea>

            {!loading &&
                <BoxBody>
                    <ContainerBody>
                        <TitleText>Esqueceu a senha?</TitleText>
                        <TextDescription>Insira seu e-mail para enviarmos um código de redefinição de senha</TextDescription>

                        <SignInput
                            IconSvg={EmailIcon}
                            placeholder="Insira seu email"
                            value={emailField}
                            onChangeText={t => setEmailField(t)}
                        />
                    </ContainerBody>

                    <ButtonArea>
                        <Button value='Enviar código' onPress={handleSignClick} />
                    </ButtonArea>
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