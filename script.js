const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após se formar em Medicina Veterinária, você encontra uma nova tecnologia: um chat de IA que não só responde todas as dúvidas sobre cuidados com animais, mas também gera imagens e áudios hiper-realistas de diagnósticos e tratamentos. Qual é o seu primeiro pensamento sobre como essa inovação pode impactar o mundo dos cuidados com animais?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você ficou preocupado com a possibilidade da tecnologia substituir o atendimento personalizado e o contato humano na medicina veterinária."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou empolgado com a possibilidade de usar a IA para melhorar a precisão dos diagnósticos e a eficácia dos tratamentos para os animais."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de medicina veterinária decidiu oferecer uma série de aulas sobre como usar a IA para otimizar o atendimento e o tratamento de animais. No fim de uma aula, ela pede que você escreva um trabalho sobre o impacto da IA nos cuidados com animais. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações relevantes e explicar o impacto da tecnologia nos cuidados com animais.",
                afirmacao: "Você conseguiu utilizar a IA para compilar informações valiosas e atuais sobre como a tecnologia está influenciando a medicina veterinária."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você decidiu usar seus próprios recursos e insights para criar um trabalho que reflete sua visão pessoal sobre a integração da IA nos cuidados com animais."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate sobre como a IA está moldando o futuro dos cuidados com animais e a medicina veterinária. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode melhorar a precisão dos diagnósticos e tornar os cuidados com animais mais eficientes e personalizados.",
                afirmacao: "Você acredita que a IA pode oferecer novas oportunidades para aprimorar o atendimento veterinário e a saúde dos animais."
            },
            {
                texto: "Me preocupo com a possibilidade da IA substituir o trabalho humano e defendo a importância de manter o contato pessoal e o julgamento dos veterinários.",
                afirmacao: "Sua preocupação com a substituição da experiência humana levou você a discutir a necessidade de equilibrar a tecnologia com a interação pessoal no atendimento aos animais."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua visão sobre o impacto da IA nos cuidados com animais. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas tradicionais e decidiu ajudar iniciantes com suas habilidades em design."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você acelerou o processo de criação e agora consegue mostrar a outras pessoas como usar a IA para ilustrar suas ideias sobre cuidados com animais."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de cuidados com animais para apresentar na próxima semana, o andamento está um pouco atrasado e uma pessoa do seu grupo decidiu usar IA para criar o plano de tratamento. O problema é que o plano está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Utilizar o plano gerado pela IA é aceitável, pois isso economiza tempo e ajuda a cumprir prazos.",
                afirmacao: "Você percebeu que depender demais da IA pode limitar a originalidade e agora busca equilibrar o uso da tecnologia com a personalização e o cuidado humano."
            },
            {
                texto: "A IA pode ser uma ferramenta útil, mas é importante revisar e personalizar o plano para garantir que ele atenda às necessidades específicas dos animais e dos casos clínicos.",
                afirmacao: "Você entendeu que a IA deve ser usada como uma ferramenta auxiliar e não como substituto completo para a análise e o cuidado individualizado na medicina veterinária."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
