function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    
    if (validaFilme(filmeFavorito)) {
        listarFilmesNaTela(filmeFavorito)
    }

    campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementosFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementosFilme
}

function validaFilme(link) {
    if (link.endsWith('.jpg')) {
        return true
    } else {
        alert("Imagem inválida")
        return False
    }
}
