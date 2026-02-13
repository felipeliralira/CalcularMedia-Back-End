const calcular = document.getElementById('calcular');

function calcularMedia(){
    const nome = document.getElementById('nome').value;
    const prova1 = document.getElementById('prova1').value;
    const prova2 = document.getElementById('prova2').value;
    const resultado = document.getElementById('resultado');

    if(nome !==''&& prova1 !==''&& prova2 !==''){

        const media = ((prova1 + prova2) / 2).toFixed(1);

        let classificacao = '';
        if(media < 60){
            classificacao = 'recuperação';
        }else if(media < 50){
            classificacao = 'reprovado';
        }else {
            classificacao = 'aprovado';
        }
        resultado.textContent = `${nome} sua média é ${media} e você está ${classificacao}`; 
    
    }
    else {
        resultado.textContent = 'Preencha todos os campos';
    }

}
calcular.addEventListener('click', calcularMedia);