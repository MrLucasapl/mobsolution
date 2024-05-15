import React from "react";
import { BoxOverviewLine, NameLine, ValueLine } from "./styles";
import { UserStatistics } from "../../api";

export const StatisticOverview = ({ statistics }: { statistics: UserStatistics }) => {

    const calculateMediaAccuracies = (data: UserStatistics) => {
        if (data.qtdRespondidas > 0) {
            return (data.qtdAcertos / data.qtdRespondidas) * 100;
        } else {
            return 0;
        }
    };

    return (
        <>
            <BoxOverviewLine>
                <NameLine>Total de questões respondidas</NameLine>
                <ValueLine>{statistics?.qtdRespondidas ? statistics.qtdRespondidas : '--'}</ValueLine>
            </BoxOverviewLine>

            <BoxOverviewLine>
                <NameLine>Questões corretas</NameLine>
                <ValueLine>{statistics?.qtdAcertos ? statistics.qtdAcertos : '--'}</ValueLine>
            </BoxOverviewLine>

            <BoxOverviewLine>
                <NameLine>Média de acertos</NameLine>
                <ValueLine>
                    {statistics?.qtdAcertos
                        ? calculateMediaAccuracies(statistics).toFixed(0) + '%'
                        : '--'}
                </ValueLine>
            </BoxOverviewLine>

            <BoxOverviewLine>
                <NameLine>Tema mais dominado</NameLine>
                <ValueLine>{statistics?.temaDominado ? statistics.temaDominado.nome.replace(/\+/g, ' ') : '--'}</ValueLine>
            </BoxOverviewLine>

            <BoxOverviewLine>
                <NameLine>Tema menos dominado</NameLine>
                <ValueLine>{statistics?.temaMenosDominado ? statistics.temaMenosDominado.nome.replace(/\+/g, ' ') : '--'}</ValueLine>
            </BoxOverviewLine>
        </>
    );
};