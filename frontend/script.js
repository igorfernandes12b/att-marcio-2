const API_URL = "https://att-marcio.vercel.app"

async function buscarFilmes() {
    const secaoFilmes = document.querySelector("#filmes")

    try {
        const resposta = await fetch(API_URL + "/")

        if (!resposta.ok) {
            throw new Error("Falha ao buscar filmes")
        }

        const filmes = await resposta.json()

        if (filmes.length === 0) {
            secaoFilmes.innerHTML = `
                <div class="estado">
                    <strong>Nenhum filme cadastrado ainda</strong>
                    Comece cadastrando o primeiro filme do acervo.
                </div>
            `
            return
        }

        secaoFilmes.innerHTML = filmes.map(renderFicha).join("")
        document.querySelectorAll("[data-apagar]").forEach((form) => {
            form.addEventListener("submit", apagarFilme)
        })
    } catch (erro) {
        console.error(erro)
        secaoFilmes.innerHTML = `
            <div class="estado">
                <strong>Não foi possível carregar o acervo</strong>
                Verifique sua conexão e tente novamente.
            </div>
        `
    }
}

function escapeHtml(valor) {
    const div = document.createElement("div")
    div.textContent = valor ?? ""
    return div.innerHTML
}

function renderFicha(filme) {
    const livre = !(filme.classificacao > 0)
    const classificacao = livre ? "Livre" : `${filme.classificacao} anos`
    const classeBadge = livre ? "ficha__badge ficha__badge--neutro" : "ficha__badge"

    return `
        <article class="ficha">
            <span class="${classeBadge}">${escapeHtml(classificacao)}</span>
            <h2 class="ficha__titulo">${escapeHtml(filme.nome)}</h2>
            <ul class="ficha__meta">
                <li><span class="ficha__meta-label">Gênero</span><span>${escapeHtml(filme.genero || "—")}</span></li>
                <li><span class="ficha__meta-label">Duração</span><span>${filme.duracao ? escapeHtml(filme.duracao) + " min" : "—"}</span></li>
            </ul>
            <div class="ficha__acoes">
                <a class="btn btn--ghost btn--small" href="editar.html?id=${encodeURIComponent(filme.id)}">Editar</a>
                <form data-apagar data-id="${escapeHtml(filme.id)}">
                    <button type="submit" class="btn btn--danger btn--small">Apagar</button>
                </form>
            </div>
        </article>
    `
}

async function apagarFilme(evento) {
    evento.preventDefault()
    const form = evento.currentTarget
    const id = form.dataset.id

    const confirmou = window.confirm("Apagar este filme do acervo? Essa ação não pode ser desfeita.")
    if (!confirmou) {
        return
    }

    try {
        const resposta = await fetch(`${API_URL}/delete-movie/${id}`, {
            method: "DELETE"
        })

        if (!resposta.ok) {
            throw new Error("Falha ao apagar filme")
        }

        await buscarFilmes()
    } catch (erro) {
        console.error(erro)
        window.alert("Não foi possível apagar o filme. Tente novamente.")
    }
}

buscarFilmes()
