let saldo = vitorias(110,1)
let eloHeroi = ""

function vitorias (vitorias, derrotas){
let saldoDeVitorias = vitorias - derrotas
return saldoDeVitorias 
}

switch (true) {
    case saldo < 10:
       eloHeroi = "Ferro" 
       break
    case saldo >= 11 && saldo < 20:
       eloHeroi = "Bronze" 
       break
    case saldo >= 21 && saldo < 50:
       eloHeroi = "Prata" 
       break 
    case saldo >= 51 && saldo < 80:
       eloHeroi = "Ouro" 
       break 
    case saldo >= 81 && saldo < 90:
        eloHeroi = "Platina" 
        break 
    case saldo >= 91 && saldo < 100:
        eloHeroi = "Diamante" 
        break 
    case saldo >= 101 && saldo < 110:
        eloHeroi = "Mestre" 
        break 
    case saldo >= 110:
        eloHeroi = "Desafiante" 
        break     
    }
    
    console.log(`O herói tem saldo de ${saldo} vitórias e seu elo é ${eloHeroi}`)

function vitorias (vitorias, derrotas){
let saldoDeVitorias = vitorias - derrotas
return saldoDeVitorias 
}