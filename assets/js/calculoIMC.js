
function calcular(){

    let $height = parseFloat(document.getElementById('height').value) / 100;
    let $weight = parseFloat(document.getElementById('weight').value);

    //Para calcular IMC basta usar a fórmula: IMC = Peso/Altura²
    let calculo = ($weight / ($height * $height)).toFixed(2);


    //Condicional que retorna a classificação IMC do usuário com base nos dados oferecidos pelo mesmo.
    if(calculo <= 16){
        document.getElementById('output').innerHTML = `${calculo} - MAGREZA GRAU 3`;
        document.getElementById('output').style.color = '#cd1026';
    }else if(calculo > 16 && calculo <= 16.9){
        document.getElementById('output').innerHTML = `${calculo} - MAGREZA GRAU 2`;
        document.getElementById('output').style.color = '#d36403';
    }else if(calculo > 16.9 && calculo <= 18.4){
        document.getElementById('output').innerHTML = `${calculo} - MAGREZA GRAU 1`;
        document.getElementById('output').style.color = '#549b0a';
    }else if(calculo > 18.4 && calculo <= 25.0){
        document.getElementById('output').innerHTML = `${calculo} - PESO IDEAL`;
        document.getElementById('output').style.color = '#10d057';
    }else if(calculo > 25.0 && calculo <= 29.9){
        document.getElementById('output').innerHTML = `${calculo} - PRÉ-OBESIDADE`;
        document.getElementById('output').style.color = '#8fac00';
    }else if(calculo > 29.9 && calculo <= 34.9){
        document.getElementById('output').innerHTML =  `${calculo} - OBESIDADE GRAU 1`;
        document.getElementById('output').style.color = '#549b0a';
    }else if(calculo > 34.9 && calculo <= 39.9){
        document.getElementById('output').innerHTML =  `${calculo} - OBESIDADE GRAU 2`;
        document.getElementById('output').style.color = '#d36403';
    }else if(calculo > 39.9){
        document.getElementById('output').innerHTML =  `${calculo} - OBESIDADE GRAU 3`;
        document.getElementById('output').style.color = '#cd1026';
    };

};


