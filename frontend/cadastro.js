const API_URL = "https://att-marcio-2-back.vercel.app"

const form = document.querySelector("#form-cadastro")
const feedback = document.querySelector("#feedback")

function mostrarFeedback(mensagem, tipo) {
    feedback.textContent = mensagem
    feedback.className = `feedback feedback--${tipo}`
}

form.addEventListener("submit", async (evento) => {
    evento.preventDefault()

    const dados = new FormData(form)
    const filme = {
        nome: dados.get("nome").trim(),
        genero: dados.get("genero").trim(),
        duracao: Number(dados.get("duracao")),
        classificacao: Number(dados.get("classificacao"))
    }

    if (!filme.nome || !filme.genero || !filme.duracao) {
        mostrarFeedback("Preencha todos os campos obrigatórios.", "erro")
        return
    }

    const botao = form.querySelector("button[type=submit]")
    botao.disabled = true

    try {
        const resposta = await fetch(`${API_URL}/create-movie`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(filme)
        })

        if (!resposta.ok) {
            throw new Error("Falha ao cadastrar filme")
        }

        mostrarFeedback("Filme cadastrado com sucesso! Redirecionando para o acervo...", "sucesso")
        setTimeout(() => {
            window.location.href = "index.html"
        }, 1200)
    } catch (erro) {
        console.error(erro)
        mostrarFeedback("Não foi possível cadastrar o filme. Tente novamente.", "erro")
        botao.disabled = false
    }
})
