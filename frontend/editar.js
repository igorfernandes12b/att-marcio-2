const API_URL = "https://att-marcio.vercel.app"

const form = document.querySelector("#form-editar")
const feedback = document.querySelector("#feedback")
const parametros = new URLSearchParams(window.location.search)
const id = parametros.get("id")

function mostrarFeedback(mensagem, tipo) {
    feedback.textContent = mensagem
    feedback.className = `feedback feedback--${tipo}`
}

async function carregarFilme() {
    if (!id) {
        mostrarFeedback("Nenhum filme selecionado para edição.", "erro")
        form.hidden = true
        return
    }

    try {
        const resposta = await fetch(`${API_URL}/movie/${id}`)

        if (!resposta.ok) {
            throw new Error("Filme não encontrado")
        }

        const filme = await resposta.json()

        form.nome.value = filme.nome ?? ""
        form.genero.value = filme.genero ?? ""
        form.duracao.value = filme.duracao ?? ""
        form.classificacao.value = filme.classificacao ?? 0
    } catch (erro) {
        console.error(erro)
        mostrarFeedback("Não foi possível carregar os dados do filme.", "erro")
        form.hidden = true
    }
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
        const resposta = await fetch(`${API_URL}/update-movie/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(filme)
        })

        if (!resposta.ok) {
            throw new Error("Falha ao atualizar filme")
        }

        mostrarFeedback("Filme atualizado com sucesso! Redirecionando para o acervo...", "sucesso")
        setTimeout(() => {
            window.location.href = "index.html"
        }, 1200)
    } catch (erro) {
        console.error(erro)
        mostrarFeedback("Não foi possível atualizar o filme. Tente novamente.", "erro")
        botao.disabled = false
    }
})

carregarFilme()
