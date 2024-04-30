const lucas = {
    nome: "Lucas",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}
const carlos = {
    nome: "Carlos",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

const jogadores = [lucas,carlos]

function exibirJogadoresnatela() {
    var elemento = "";
    for (var i=0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td> <button onclick='adicionarVitoria("+ i +")'>Vitorias</button></td>"
        elemento += "<td><button onclick='adicionarEmpates("+ i +")'>Empates</button></td>"
        elemento += "<td><button onclick='adicionarDerrotas("+ i +")'>Derrotas</button></td></tr>"
    }
    var corpodaTabela = document.getElementById('corpodaTabela')
    corpodaTabela.innerHTML = elemento;
}
exibirJogadoresnatela()


function adicionarVitoria(posicaoDoJogador) {
    var jogador = jogadores[posicaoDoJogador]
    jogador.vitorias++
    jogador.pontos = calcularPonto(jogador)
    exibirJogadoresnatela()
}

function adicionarEmpates(posicaoDoJogador) {
    var jogador = jogadores[posicaoDoJogador]
    jogador.empates++
    jogador.pontos = calcularPonto(jogador)
    exibirJogadoresnatela()
}

function adicionarDerrotas(posicaoDoJogador) {
    
}

function calcularPonto(player) {
    var pontos = player.vitorias * 3 + player.empates
    return pontos
}