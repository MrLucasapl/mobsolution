import React, { Dispatch, SetStateAction } from "react";
import { BoxDropdown, BoxItemStatisticsTheme, BoxStatus, BoxStatusText, BoxThemeName, ThemeImage, ThemeName, ThemeProgress, ThemeProgressContainer, ThemeText, ThemeValueText } from "./styles";
import { StatisticsTheme } from "../../api";
import { DropdownComponent } from "../dropdown";

const DropdownValue = [
    { label: 'A_Z', value: 'A_Z' },
    { label: 'Z_A', value: 'Z_A' },
    { label: 'TEMA MAIS DOMINADO', value: 'TEMA_MAIS_DOMINADO' },
    { label: 'TEMA MENOS DOMINADO', value: 'TEMA_MENOS_DOMINADO' },
    { label: 'TEMA MAIS RESPONDIDO', value: 'TEMA_MAIS_RESPONDIDO' },
    { label: 'TEMA MENOS RESPONDIDO', value: 'TEMA_MENOS_RESPONDIDO' },
];

type PropsStatisticThemeType = {
    loading: boolean
    statistics: StatisticsTheme[]
    valueDropdown: string | null,
    setValueDropdown: Dispatch<SetStateAction<string | null>>
}

export const StatisticTheme = ({ statistics, valueDropdown, setValueDropdown, loading }: PropsStatisticThemeType) => {


    return (
        <>
            <BoxDropdown>
                <DropdownComponent dropdownValue={DropdownValue} setValueDropdown={setValueDropdown} valueDropdown={valueDropdown} />
            </BoxDropdown>

            {!loading && statistics.map((item, index) => (
                <BoxItemStatisticsTheme key={index}>
                    <BoxThemeName>
                        <ThemeImage source={{ uri: `https://utisoftsandbox.appws.com.br/uploads/${item.tema.icone.nomeArquivo}` }} />
                        <ThemeName>{item.tema.nome.replace(/\+/g, ' ')}</ThemeName>
                    </BoxThemeName>
                    <BoxStatus>
                        <BoxStatusText>
                            <ThemeValueText>{

                                item.qtdRespondidasGeral > item.tema.qtdTotaisQuestoes ?
                                    item.tema.qtdTotaisQuestoes + '/' + item.qtdRespondidasGeral :
                                    item.qtdRespondidasGeral + '/' + item.tema.qtdTotaisQuestoes

                            }</ThemeValueText>
                            <ThemeText>total de questões respondidas</ThemeText>
                        </BoxStatusText>
                        <ThemeProgressContainer>
                            <ThemeProgress progress={
                                item.qtdRespondidasGeral > item.tema.qtdTotaisQuestoes ?
                                    ((item.tema.qtdTotaisQuestoes / item.qtdRespondidasGeral) * 100) :
                                    ((item.qtdRespondidasGeral / item.tema.qtdTotaisQuestoes) * 100)
                            } />
                        </ThemeProgressContainer>
                    </BoxStatus>
                    <BoxStatus>
                        <BoxStatusText>
                            <ThemeValueText>{
                                item.qtdAcertosGeral > item.tema.qtdTotaisQuestoes ?
                                    item.tema.qtdTotaisQuestoes + '/' + item.qtdAcertosGeral :
                                    item.qtdAcertosGeral + '/' + item.tema.qtdTotaisQuestoes
                            }</ThemeValueText>
                            <ThemeText>respostas corretas</ThemeText>
                        </BoxStatusText>
                        <ThemeProgressContainer>
                            <ThemeProgress progress={
                                item.qtdAcertosGeral > item.tema.qtdTotaisQuestoes ?
                                    ((item.tema.qtdTotaisQuestoes / item.qtdAcertosGeral) * 100) :
                                    ((item.qtdAcertosGeral / item.tema.qtdTotaisQuestoes) * 100)

                            } />
                        </ThemeProgressContainer>
                    </BoxStatus>
                </BoxItemStatisticsTheme>
            ))}
        </>
    );
};