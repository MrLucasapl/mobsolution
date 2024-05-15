import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import BackIcocn from '../../../assets/back.svg'
import LockIcon from '../../../assets/cadeado.svg';
import Denied from '../../../assets/denied.svg';
import Approved from '../../../assets/approved.svg';

import {
    BackButton,
    BoxBody,
    BoxPreRequisites,
    BoxRule,
    ButtonArea,
    Container,
    ContainerBody,
    HeaderArea,
    HeaderText,
    ImageReset,
    LoadingIcon,
    PreRequisitesBody,
    PreRequisitesTitle,
    Rule,
    TextDescription,
    TitleText,
} from './styles';

import { SignInput } from '../../../components/input';
import { Button } from '../../../components/button';

import Api, { AuthenticationError } from '../../../api';

export const Third = () => {
    const navigation = useNavigation();
    const route = useRoute();
    let userInfo = { ...route.params as { email: string, tokenRecuperarSenha: string } }

    const [loading, setLoading] = useState(false);
    const [passwordField, setPasswordField] = useState('');
    const [validations, setValidations] = useState({
        passwordPrevious: false,
        minLength: false,
        hasNumber: false,
        hasLetter: false,
        hasSpecialChar: false,
    });

    const validatePassword = (password: string) => {
        const passwordPrevious = password !== 'generico1' && password !== '';
        const hasMinLength = password.length >= 8;
        const hasNumber = /\d/.test(password);
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);
        setValidations({ passwordPrevious, minLength: hasMinLength, hasNumber, hasLetter, hasSpecialChar });
    };

    const handleBackButton = () => {
        navigation.goBack();
    }

    const handleSignClick = async () => {
        setLoading(true)
        if (passwordField != '') {
            if (validations.minLength && validations.hasNumber && validations.hasLetter && validations.hasSpecialChar) {

                let json = await Api.changePassword(userInfo.email, userInfo.tokenRecuperarSenha, passwordField);

                if (json && 'error' in json) {

                    if (!json.error) {
                        setLoading(false)
                        // @ts-ignore
                        navigation.navigate('Fourth');
                        return
                    }

                    const authenticationError = json as AuthenticationError;
                    alert(authenticationError.mensagem.replace(/\+/g, ' '));
                    setLoading(false)
                    return;
                }
            }

            setLoading(false);
            return

        } else {
            alert("Preencha os campos!");
            setLoading(false)
        }
    }

    useEffect(() => {
        validatePassword(passwordField);
    }, [passwordField])

    return (
        <Container>
            <HeaderArea>
                <HeaderText>Esqueci a senha</HeaderText>
            </HeaderArea>

            {!loading &&
                <BoxBody>
                    <ContainerBody>
                        <TitleText>Redefina sua senha</TitleText>
                        <TextDescription>Sua nova senha deve ser diferente de senhas utilizadas previamente</TextDescription>

                        <SignInput
                            IconSvg={LockIcon}
                            placeholder="Insira nova sua senha"
                            value={passwordField}
                            onChangeText={t => setPasswordField(t)}
                        />

                        <BoxPreRequisites>
                            <PreRequisitesTitle>Pré-requisitos:</PreRequisitesTitle>
                            <PreRequisitesBody>
                                <ImageReset>
                                    {validations.passwordPrevious ? <Approved width="20" height="20" fill="#12B76A" /> : <Denied width="20" height="20" fill="#F04438" />}
                                </ImageReset>
                                <BoxRule>
                                    <Rule color={validations.passwordPrevious ? '#12B76A' : '#F04438'}>Ser diferente da senha anterior</Rule>
                                </BoxRule>
                            </PreRequisitesBody>

                            <PreRequisitesBody>
                                <ImageReset>
                                    {validations.minLength ? <Approved width="20" height="20" fill="#12B76A" /> : <Denied width="20" height="20" fill="#F04438" />}
                                </ImageReset>
                                <BoxRule>
                                    <Rule color={validations.minLength ? '#12B76A' : '#F04438'}>Conter pelo menos 8 caracteres</Rule>
                                </BoxRule>
                            </PreRequisitesBody>

                            <PreRequisitesBody>
                                <ImageReset>
                                    {validations.hasNumber ? <Approved width="20" height="20" fill="#12B76A" /> : <Denied width="20" height="20" fill="#F04438" />}
                                </ImageReset>
                                <BoxRule>
                                    <Rule color={validations.hasNumber ? '#12B76A' : '#F04438'}>Conter pelo menos um número</Rule>
                                </BoxRule>
                            </PreRequisitesBody>

                            <PreRequisitesBody>
                                <ImageReset>
                                    {validations.hasLetter ? <Approved width="20" height="20" fill="#12B76A" /> : <Denied width="20" height="20" fill="#F04438" />}
                                </ImageReset>
                                <BoxRule>
                                    <Rule color={validations.hasLetter ? '#12B76A' : '#F04438'}>Conter pelo menos uma letra</Rule>
                                </BoxRule>
                            </PreRequisitesBody>

                            <PreRequisitesBody>
                                <ImageReset>
                                    {validations.hasSpecialChar ? <Approved width="20" height="20" fill="#12B76A" /> : <Denied width="20" height="20" fill="#F04438" />}
                                </ImageReset>
                                <BoxRule>
                                    <Rule color={validations.hasSpecialChar ? '#12B76A' : '#F04438'}>Conter pelo menos um caractere especial (!@#$%^&*)</Rule>
                                </BoxRule>
                            </PreRequisitesBody>
                        </BoxPreRequisites>
                    </ContainerBody>

                    <ButtonArea>
                        <Button value='Redefinir senha' onPress={handleSignClick} />
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