const robotron = document.querySelector("#robotron");


const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
  
})





    function manipulaDados(operacao) {
            if (operacao === "subtrair") {
                inputContador.value = parseInt(inputContador.value) - 1;
            }else {
                inputContador.value = parseInt(inputContador.value) + 1;
            }
        }