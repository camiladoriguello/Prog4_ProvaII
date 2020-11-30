const INPUT_ID_LIST = ['descricao', 'valor', 'data-vencimento', 'tipo']

const start = () => {
    const btnSalvar = document.getElementById('salvar')
    btnSalvar.onclick = salvarContaBtnListener
}

const salvarContaBtnListener = () => {
    salvarConta()
    mudaSaldo()
}

const salvarConta = () => {
    const tableContas = document.getElementById('table-contas')
    const tr = document.createElement('tr')
    const tBody = tableContas.tBodies[0]
    tBody.appendChild(tr)
    INPUT_ID_LIST.forEach(inputId => createColumn(tr, document.getElementById(inputId).value))
}

const createColumn = (line, content) => {
    const td = document.createElement('td')
    td.innerHTML = content
    line.appendChild(td)
}

const mudaSaldo = () =>{
    const tipoConta = document.getElementById('tipo').value

    let valorConta = document.getElementById('valor')
    let saldoAtual = document.getElementById('valor-saldo')
   
    parseFloat(saldoAtual.value, 10)

    if (tipoConta === 'Despesa'){
        let result = parseFloat(saldoAtual.value, 10) - parseFloat(valorConta.value, 10)
        alert("Despesa adicionada!")
        alert(result)
    }else if (tipoConta === 'Receita'){
        let result = parseFloat(saldoAtual.value, 10) + parseFloat(valorConta.value, 10)
        alert("Receita adicionada!")
        alert(result)
    }
}

start()