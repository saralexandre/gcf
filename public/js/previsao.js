const key = "a36a92dc0eca3cd2ebe40c8f836bd2d1";

function apiGetPrevisao(cidade) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`;
    let request = new XMLHttpRequest()

    try {
        request.open("GET", url, false)
        request.send()
        dados = JSON.parse(request.responseText)
        if (dados.message == null) {
            console.log("Clima:", dados.weather[0])
            console.log("Principal:", dados.main)
            console.log("Vento:", dados.wind)

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;

            result = `Cidade: ${cidade}
            Principal: ${dados.weather[0].main}
            Descrição: ${dados.weather[0].description}
            Temperatura: ${dados.main.temp}
            Sensação: ${dados.main.feels_like}
            Temperatura mínima: ${dados.main.temp_min}
            Temperatura máxima: ${dados.main.temp_max}
            Pressão: ${dados.main.pressure}
            Umidade: ${dados.main.humidity}
            Velocidade do vento: ${dados.wind.speed}
            Data da consulta: ${today}`

            let consultar = document.getElementById('formulario');
            if ((consultar != null)) {
                consultar.className = "consultar mover"
            }

            let resultado = document.getElementById('resultado');
            if ((resultado != null)) {
                resultado.className = "visivel"
                resultado.innerText = result
            }

            let botao_consultar = document.getElementById('botao_consultar');
            if ((botao_consultar != null)) {
                botao_consultar.className = "escondido"
            }

            let consultar_novo = document.getElementById('consultar_novo');
            if ((consultar_novo != null)) {
                consultar_novo.className = "visivel"
            }

        } else {
            alert("Cidade não encontrada.")
            let cidade_element = document.querySelector('#cidade_id')
            cidade_element.value = ""
        }
    } catch (e) {
        alert(e);
        let cidade_element = document.querySelector('#cidade_id')
        cidade_element.value = ""
    }
}

function consultar() {
    let cidade_element = document.querySelector('#cidade_id')
    apiGetPrevisao(cidade_element.value)
}

function consultarNovo() {

    let cidade_element = document.querySelector('#cidade_id')
    cidade_element.value = ""

    let consultar = document.getElementById('formulario');
    if ((consultar != null)) {
        consultar.className = "consultar"
    }

    let botao_consultar = document.getElementById('botao_consultar');
    if ((botao_consultar != null)) {
        botao_consultar.className = "visivel"
    }
    let consultar_novo = document.getElementById('consultar_novo');
    if ((consultar_novo != null)) {
        consultar_novo.className = "escondido"
    }

    let resultado = document.getElementById('resultado');
    if ((resultado != null)) {
        resultado.className = "escondido"
    }
}