function calcular() {
    var txtn = document.querySelector('input.txtn')
    var txtp = document.querySelector('input.txtp')
    var res = document.querySelector('div#res')
    var valor = Number(txtn.value)
    var porc = Number(txtp.value)
    
    var resultado = (porc / 100) * valor

    res.innerHTML = `<p>O resultado é ${resultado}.</p>`
    
}