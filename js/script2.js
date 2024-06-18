const bloco = document.querySelectorAll(".botao");
let vezdj = document.querySelector(".vezdojogador");
const jdn = document.getElementById("jdn");
const recomeca = document.getElementById("Recomeca")
const parabenizacao = document.getElementById("parabenizacao")


let jogador_1 = "X"
let jogador_2 = "O"


const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


const stargame = document.addEventListener('click', (event) => {
    if (event.target.matches(".botao")) {
        jogar(event.target.id, jogador_1);
        setTimeout(() => bot(), 500);
    }
});

function bot() {
    posicoesDisponiveis = [];
    for (index in bloco) {
        if (!isNaN(index)) {
            if (!bloco[index].classList.contains("X") && !bloco[index].classList.contains("O")) {
                posicoesDisponiveis.push(index);
            }
        }
    }
    const posicaoAleatoria = Math.floor(Math.random() * posicoesDisponiveis.length);
    jogar(posicoesDisponiveis[posicaoAleatoria], jogador_2)
}

function jogar(id, turno) {
    const botao = document.getElementById(id);
    botao.textContent = turno;
    botao.classList.add(turno);
    checarVencedor(turno);
    if (turno == jogador_1) {
        vezdj.textContent = "Vez do Jogador O"
    } else {
        vezdj.textContent = "Vez do Jogador X"
    }
}
function checarVencedor(turno) {
    const vencedor = combinacoes.some((comb) => {
        return comb.every((index) => {
            return bloco[index].classList.contains(turno);
        })
    });
    if (vencedor) {
        encerrarJogo(turno);
    } else if (checarEmpate()) {
        encerrarJogo();
    }
    else {

    }
}
function checarEmpate() {
    let x = 0;
    let o = 0;

    for (index in bloco) {
        if (!isNaN(index)) {
            if (bloco[index].classList.contains(jogador_1)) {
                x++;
            }

            if (bloco[index].classList.contains(jogador_2)) {
                o++;
            }
        }
    }

    return x + o === 9 ? true : false;
}
function encerrarJogo(vencedor = null) {
    if (vencedor) {
        jdn.style.display = 'block';
        parabenizacao.innerHTML = `O Jogador ${vencedor} venceu!!!`
        return
    }
    else {
         jdn.style.display = 'block';
        parabenizacao.innerHTML = 'Deu Empate'
        return
    }

    recomeca.addEventListener('click', () => {
        location.reload();
    })

}

