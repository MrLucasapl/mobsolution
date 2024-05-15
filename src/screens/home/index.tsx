import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';

import Api, { AuthenticationError, StatisticsTheme, UserStatistics } from '../../api';

import {
    Container,
    Scroller,
    HeaderArea,
    LoadingIcon,
    ListArea,
    BoxTab,
    HeaderText,
    OverviewButton,
    ThemeButton,
    TextBoxTab,
} from './styles';

import { StatisticOverview } from '../../components/statisticOverview';
import { StatisticTheme } from '../../components/statisticTheme';

export const Home = () => {
    const [buttonSelect, setButtonSelect] = useState('general');
    const [valueDropdown, setValueDropdown] = useState<string | null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dataOverview, setDataOverview] = useState<UserStatistics | undefined>(undefined);
    const [dataTheme, setDataTheme] = useState<StatisticsTheme[] | undefined>(undefined);

    const getDataOverview = async () => {
        setLoading(true)

        const json = await Api.getDataOverview()

        if (json && 'error' in json) {
            const authenticationError = json as unknown as AuthenticationError;
            alert(authenticationError.mensagem.replace(/\+/g, ' '));
            setLoading(false)
            return;
        }

        if (json && json.id) {
            setDataOverview(json)
            setLoading(false)
            return;
        }

        setLoading(false)
    }

    const getDataTheme = async () => {
        setLoading(true)

        const json = await Api.getDataTheme(valueDropdown)

        if (json && 'error' in json) {
            const authenticationError = json as unknown as AuthenticationError;
            alert(authenticationError.mensagem.replace(/\+/g, ' '));
            setLoading(false)
            return;
        }

        if (json && json.listaEstatisticasTemas.length > 0) {
            setDataTheme(json.listaEstatisticasTemas)
            setLoading(false)
            return;
        }

        setLoading(false)
    }

    const onRefresh = () => {
        setLoading(true)
        setRefreshing(false);
        getDataOverview();
        getDataTheme();
        setLoading(false);
    }

    useEffect(() => {
        Promise.all([getDataOverview(), getDataTheme()])
    }, []);

    useEffect(() => {
        Promise.all([getDataTheme()])
    }, [valueDropdown]);

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <HeaderArea>
                    <HeaderText>Minhas estatísticas</HeaderText>
                </HeaderArea>

                {buttonSelect &&
                    <BoxTab>
                        <OverviewButton style={{
                            borderBottomColor: buttonSelect == 'general' ? '#095A88' : '#697586',
                            borderBottomWidth: buttonSelect == 'general' ? 4 : 1
                        }}
                            onPress={() => setButtonSelect('general')}
                        >
                            <TextBoxTab style={{
                                color: buttonSelect == 'general' ? '#095A88' : '#697586',
                            }}>
                                Visão geral
                            </TextBoxTab>
                        </OverviewButton>

                        <ThemeButton style={{
                            borderBottomColor: buttonSelect == 'theme' ? '#095A88' : '#697586',
                            borderBottomWidth: buttonSelect == 'theme' ? 4 : 1
                        }}
                            onPress={() => setButtonSelect('theme')}
                        >
                            <TextBoxTab style={{
                                color: buttonSelect == 'theme' ? '#095A88' : '#697586',
                            }}>
                                Por tema
                            </TextBoxTab>
                        </ThemeButton>
                    </BoxTab>
                }

                <ListArea>
                    {!loading && dataOverview && buttonSelect == 'general' &&
                        <StatisticOverview statistics={dataOverview} />
                    }

                    {dataTheme && buttonSelect == 'theme' &&
                        <StatisticTheme
                            loading={loading}
                            statistics={dataTheme}
                            valueDropdown={valueDropdown}
                            setValueDropdown={setValueDropdown}
                        />
                    }
                </ListArea>

                {loading &&
                    <LoadingIcon size="large" color="#323F4B" />
                }

            </Scroller>
        </Container>
    );
}