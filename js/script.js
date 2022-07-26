function combustivel() {
    // declaração de variaveis
    var gasolina    = document.getElementById('gasolina').value;
    var etanol      = document.getElementById('etanol').value;
    var result      = document.getElementById('result');
    
    // troca virgula por ponto
    gasolina  = gasolina.replace(',','.');
    etanol    = etanol.replace(',','.');

    // verifica se todos os campos foram preenchidos
    if(gasolina != '' && etanol != '') {
        
        // calcular e mostra o melhor opçãp para abastecer
        var maisBarato  = etanol/gasolina;

        if (maisBarato >= 0.7){
        result.innerHTML = 'Melhor abastecer com gasolina';
        }
        else {
            result.innerHTML = 'Melhor abastecer com etanol'
        }
    }

    // caso os campos não forem preenchidos mostrar alerta de erro!
    else {
        alert('Preencha todos os campos');
    }
}

function verificarInput(event) {
    var letra = event.key;

    if (letra != 0 && letra != 1 && letra != 2 && letra != 3 && letra != 4 && letra != 5 && letra != 6 && letra != 7 &&letra != 8 && letra != 9 && letra != 'Tab' && letra != 'Enter' && letra != 'Backspace' && letra != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight' && letra != '.' && letra != ',') {
        alert('Caractere Invalido!');
        document.getElementById('gasolina').value = '';
        document.getElementById('etanol').value   = '';
    }
}
