'use strict'

import funcionarios from "./funcionarios.json" with { type: "json" }

const criarCard = function(funcionario){
    //cria uma div para alocar todos os conteúdos que serão criados
    const card = document.createElement("div")
    card.className = "card"

    //cria um img para guardar a foto
    const foto = document.createElement("img")
    foto.src = `./img/${funcionario.imagem}` //adiciona o caminho "./img (nome da pasta) + o conteúdo do Json"
    foto.alt = `Foto de ${funcionario.nome}` 

    //cria um h3 para guardar o nome do funcionário
    const nome = document.createElement("h3")
    nome.textContent = funcionario.nome

    //cria no html um span paa guardar os cargo do funcionário 
    const cargo = document.createElement("span")
    cargo.textContent = funcionario.cargo

    card.append(foto, nome, cargo) //adiciona os conteúdos dentro do card
    
    return card
}

//criando a vriável "cards" que recebe o Json "funcionários.map" 
const cards = funcionarios.map(criarCard) //".map" é parecido com o forEach, mas ele permite alterar um por vez, o map está chamando a função "criarCard" (como se fosse o forEach)

//adicionando tudo no html
document.getElementById("container").replaceChildren(...cards) //substitui o que tem lá

