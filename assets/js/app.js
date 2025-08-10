let amigos = [];


function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado à lista.');
        inputAmigo.focus();
        return;
    }
    
    amigos.push(nomeAmigo);
    
    atualizarLista();
    
    inputAmigo.value = '';
    inputAmigo.focus(); 
}


function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpar a lista atual
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        
        listaAmigos.appendChild(itemLista);
    });
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio.');
        return;
    }
    
    // Gerar um índice aleatório
    const totalAmigos = amigos.length;
    const indiceAleatorio = Math.floor(Math.random() * totalAmigos);
    
    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Exibir o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>
        <li><button onclick="limparLista()" style="margin-top: 15px; padding: 8px 16px; background-color: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px;">Limpar Lista</button></li>
    `;
}


function limparLista() {
    amigos = [];
    atualizarLista();
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    document.getElementById('amigo').focus();
}

document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    if (inputAmigo) {
        inputAmigo.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                adicionarAmigo();
            }
        });
        
        inputAmigo.focus();
    }
});