const BASE_API = 'https://utisoftsandbox.appws.com.br';

export interface AuthenticatedUser {
    id: number;
    nome: string;
    email: string;
    token: string;
    tipoUsuario: {
        id: number;
        codigo: number;
        nome: string;
        descricao: string;
    };
}

export interface AuthenticationError {
    error: boolean;
    mensagem: string;
}

interface Image {
    id: number;
    nomeArquivo: string;
    largura: number;
    altura: number;
    token?: string;
    numero?: number;
}

interface Theme {
    id: number;
    nome: string;
    nomeHierarquia: string;
    qtdQuestoes: number;
    qtdTotaisQuestoes: number;
    ativo: boolean;
    temResumo: boolean;
    qtdCartas: number;
    qtdTotaisCartas: number;
    qtdCartasCasosClinicos: number;
    qtdTotaisCartasCasosClinicos: number;
    resumo: string;
    listaDeImagem: Image[];
    icone: Image;
    descendentes: number[];
    descendencia: any[];
    cardsDominados: number;
    qtdQuestoesProvaDeTitulo: number;
    qtdQuestoesOutrosCursos: number;
}

export interface UserStatistics {
    id: number;
    qtdRespondidas: number;
    qtdAcertos: number;
    qtdErros: number;
    qtdSimuladosFeitos: number;
    diasSemFaltar: number;
    qtdFlashcardsRespondidos: number;
    qtdAcertosFlashcards: number;
    qtdErrosFlashcards: number;
    qtdFlashcardsCasosClinicosRespondidos: number;
    qtdAcertosFlashcardsCadosClinicos: number;
    qtdErrosFlashcardsCadosClinicos: number;
    questoesFavoritadas: number[];
    temaDominado: Theme;
    temaMenosDominado: Theme;
}

interface Study {
    id: number;
    qtdRespondidas: number;
    qtdAcertos: number;
    qtdErros: number;
    qtdSimuladosFeitos: number;
    diasSemFaltar: number;
    qtdFlashcardsRespondidos: number;
    qtdAcertosFlashcards: number;
    qtdErrosFlashcards: number;
    qtdFlashcardsCasosClinicosRespondidos: number;
    qtdAcertosFlashcardsCadosClinicos: number;
    qtdErrosFlashcardsCadosClinicos: number;
    questoesFavoritadas: number[];
};

export interface StatisticsTheme {
    qtdAcertos: number;
    qtdErros: number;
    qtdAcertosGeral: number;
    qtdErrosGeral: number;
    qtdRespondidas: number;
    qtdRespondidasGeral: number;
    qtdStatusGrau1: number;
    qtdStatusGrau1Geral: number;
    qtdStatusGrau2: number;
    qtdStatusGrau2Geral: number;
    qtdStatusGrau3: number;
    qtdStatusGrau3Geral: number;
    qtdStatusGrau4: number;
    qtdStatusGrau4Geral: number;
    qtdStatusGrau5: number;
    qtdStatusGrau5Geral: number;
    estudo: Study;
    tema: Theme;
}

export interface ThemeStatisticsResponse {
    listaEstatisticasTemas: StatisticsTheme[];
}

export default {
    signIn: async (email: string, password: string): Promise<AuthenticatedUser | AuthenticationError | undefined> => {
        try {
            const req = await fetch(`${BASE_API}/api/usuario/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login: email, senha: password, tokenAcesso: "b10583a254678158a93da0" })
            })

            const encoded = await req.text();
            const json = decodeURIComponent(encoded);

            return JSON.parse(json)
        } catch (error: any) {
            console.log("error ", error);
            alert("Ocorreu um erro, entre em contato com o suporte");
            return
        }
    },

    getDataOverview: async (): Promise<UserStatistics | AuthenticationError | undefined> => {
        try {
            const req = await fetch(`${BASE_API}/api/estatisticas/visaogeral`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: 8 })
            })

            const encoded = await req.text();
            const json = decodeURIComponent(encoded);

            return JSON.parse(json)
        } catch (error: any) {
            console.log("error ", error);
            alert("Ocorreu um erro, entre em contato com o suporte");
            return
        }
    },

    getDataTheme: async (valueDropdown: string | null): Promise<ThemeStatisticsResponse | AuthenticationError | undefined> => {
        try {
            const req = await fetch(`${BASE_API}/api/estatisticas/porTema`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idUsuario: 8, ordenacao: valueDropdown })
            })

            const encoded = await req.text();
            const json = decodeURIComponent(encoded);

            return JSON.parse(json)
        } catch (error: any) {
            console.log("error ", error);
            alert("Ocorreu um erro, entre em contato com o suporte");
            return
        }
    },

    forgotPassword: async (email: string): Promise<AuthenticationError | undefined> => {
        try {
            const req = await fetch(`${BASE_API}/api/usuario/solicitarRecuperacao`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })

            const encoded = await req.text();
            const json = decodeURIComponent(encoded);

            return JSON.parse(json)
        } catch (error: any) {
            console.log("error ", error);
            alert("Ocorreu um erro, entre em contato com o suporte");
            return
        }
    },

    validateRecoveryCode: async (email: string, tokenRecuperarSenha: string): Promise<AuthenticationError | undefined> => {
        try {
            const req = await fetch(`${BASE_API}/api/usuario/validarCodigoRecuperacao`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, tokenRecuperarSenha })
            })

            const encoded = await req.text();
            const json = decodeURIComponent(encoded);

            return JSON.parse(json)
        } catch (error: any) {
            console.log("error ", error);
            alert("Ocorreu um erro, entre em contato com o suporte");
            return
        }
    },

    changePassword: async (email: string, tokenRecuperarSenha: string, novaSenha: string): Promise<AuthenticationError | undefined> => {

        try {
            const req = await fetch(`${BASE_API}/api/usuario/alterarSenha`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, tokenRecuperarSenha, novaSenha })
            })

            const encoded = await req.text();
            const json = decodeURIComponent(encoded);

            return JSON.parse(json)
        } catch (error: any) {
            console.log("error ", error);
            alert("Ocorreu um erro, entre em contato com o suporte");
            return
        }
    },
}