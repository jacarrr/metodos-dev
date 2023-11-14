var pedidos = {
    clientes : ["", "", "", "", ""],
    drinks : ["", "", "", "", ""],
    precos: ["", "", "", "", ""],
    qnt: ["", "", "", "", ""],
};
var aux = 0;
document.getElementById("enviar").onclick = function(){
    let banco = document.querySelector("#banco-select")
    pedidos.clientes[banco.value]=(document.getElementById("cliente").value)
    pedidos.drinks[banco.value]=(document.getElementById("drink").value)
    pedidos.precos[banco.value]=(document.getElementById("preco").value)
    pedidos.qnt[banco.value]=(document.getElementById("qnt").value)
    aux = parseInt(banco.value)*5;
        var total = parseFloat(pedidos.precos[banco.value])*parseFloat(pedidos.qnt[banco.value])
        document.getElementById(aux).innerHTML = pedidos.clientes[banco.value]
        document.getElementById(aux+1).innerHTML = pedidos.drinks[banco.value]
        document.getElementById(aux+2).innerHTML = pedidos.precos[banco.value]
        document.getElementById(aux+3).innerHTML = pedidos.qnt[banco.value]
        document.getElementById(aux+4).innerHTML = total
}