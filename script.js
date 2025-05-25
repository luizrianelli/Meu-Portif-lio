function enviarFormulario() {
    var nome = document.getElementsByName("n1")
    var email = document.getElementsByName("em")
    var interesse = document.getElementsByName("it")
    var concordo = document.getElementsByName("c1")

    var dados = [nome,email,interesse,concordo]

    fetch('luizfrianellifv@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    })
    window.alert('Formulário enviado com sucesso!')

}