
//let resultado = 0

function ClickBotao() {
    const valor1 = Number(document.querySelector(".inputEntre").value)
    const valor2 = Number(document.querySelector(".inputE").value)
    const sorteado = document.querySelector(".sorteio")
    
    const min = Math.min(valor1, valor2); // pega o menor dos dois
    const max = Math.max(valor1, valor2); // pega o maior dos dois

    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    sorteado.textContent = `Número sorteado é ${resultado}`;
    console.log(resultado)
}