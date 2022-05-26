
function calcular(){

    let $height = parseFloat(document.getElementById('height').value) / 100;
    let $weight = parseFloat(document.getElementById('weight').value);

    //Para calcular IMC basta usar a fórmula: IMC = Peso/Altura²
    let calculo = ($weight / ($height * $height)).toFixed(2);

    //Condicional que retorna a classificação IMC do usuário com base nos dados oferecidos pelo mesmo.
    if(calculo <= 18.5){
        document.getElementById('classification').innerHTML = calculo;
        document.getElementById('output').innerHTML = 'ABAIXO DO PESO'
        document.getElementById('classification').style.color = '#fff719'
        document.getElementById('output').style.color = '#fff719'
    }else if(calculo > 18.5 && calculo <= 24.99){
        document.getElementById('classification').innerHTML = calculo;
        document.getElementById('output').innerHTML = 'PESO NORMAL';
        document.getElementById('classification').style.color = '#adff2f';
        document.getElementById('output').style.color = '#adff2f';
    }else if(calculo > 24.99 && calculo <= 29.99){
        document.getElementById('classification').innerHTML = calculo;
        document.getElementById('output').innerHTML = 'SOBREPESO'
        document.getElementById('classification').style.color = '#ffa200'
        document.getElementById('output').style.color = '#ffa200'
    }else if (calculo > 29.99 && calculo <= 34.9){
        document.getElementById('classification').innerHTML = calculo;
        document.getElementById('output').innerHTML = 'OBESIDADE - GRAU 1'
        document.getElementById('classification').style.color = '#ff1900'
        document.getElementById('output').style.color = '#ff1900'
    }else if (calculo > 34.9 && calculo <= 40){
        document.getElementById('classification').innerHTML = calculo;
        document.getElementById('output').innerHTML = 'OBESIDADE - GRAU 2'
        document.getElementById('classification').style.color = '#ff1900'
        document.getElementById('output').style.color = '#ff1900'
    }else if (calculo > 40){
        document.getElementById('classification').innerHTML = calculo;
        document.getElementById('output').innerHTML = 'OBESIDADE - GRAU 3'
        document.getElementById('classification').style.color = '#ff1900'
        document.getElementById('output').style.color = '#ff1900'
    }

}

