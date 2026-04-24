// Sistema de abas
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        // Remove classe ativo de todos
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        // Adiciona classe ativo no clicado
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Sistema de contagem regressiva para eventos esportivos
const contadores = document.querySelectorAll(".contador");

// Datas de eventos importantes do futebol/futsal
const tempoObjetivo1 = new Date("2026-07-15T00:00:00"); // Início Copa América
const tempoObjetivo2 = new Date("2026-11-20T00:00:00"); // Seletivas Futsal
const tempoObjetivo3 = new Date("2026-12-18T00:00:00"); // Mundial de Clubes
const tempoObjetivo4 = new Date("2027-06-01T00:00:00"); // Copa do Mundo 2027

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    
    if (tempoFinal <= 0){
        return [0, 0, 0, 0];
    }
    
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    return [dias, horas, minutos, segundos];
}

function atualizaCronometro(){
    for (let i = 0; i < contadores.length; i++){
        const tempo = calculaTempo(tempos[i]);
        document.getElementById("dias"+i).textContent = String(tempo[0]).padStart(2, '0');
        document.getElementById("horas"+i).textContent = String(tempo[1]).padStart(2, '0');
        document.getElementById("min"+i).textContent = String(tempo[2]).padStart(2, '0');
        document.getElementById("seg"+i).textContent = String(tempo[3]).padStart(2, '0');
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

// Inicia os cronômetros quando a página carregar
document.addEventListener('DOMContentLoaded', comecaCronometro);