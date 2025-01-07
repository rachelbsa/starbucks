let imagem = document.querySelector(".starbucks")
    let circle = document.querySelector(".circle")

    function trocaImagem(endereco) {
        imagem.src = endereco
    }
        
    function trocaCor(cor) {
        circle.style.background = cor
    }
