// Endereço da API criada no back-end Flask.
const API_URL = "http://127.0.0.1:5000/api/tarefas";

const formulario = document.getElementById("form-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const mensagem = document.getElementById("mensagem");
const botaoSalvar = document.getElementById("botao-salvar");
const botaoAtualizar = document.getElementById("botao-atualizar");
const campoFiltro = document.getElementById("filtro");
const totalTarefas = document.getElementById("total-tarefas");
const contadorLista = document.getElementById("contador-lista");

let tarefas = [];

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}

function formatarData(data) {
    if (!data) return "";
    const partes = data.split("-");
    if (partes.length !== 3) return data;
    return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function desenharTarefas() {
    const busca = campoFiltro.value.trim().toLowerCase();

    const tarefasFiltradas = tarefas.filter((tarefa) => {
        return tarefa.titulo.toLowerCase().includes(busca) ||
            tarefa.materia.toLowerCase().includes(busca);
    });

    listaTarefas.replaceChildren();
    totalTarefas.textContent = tarefas.length;
    contadorLista.textContent = tarefasFiltradas.length + " encontrada(s)";

    if (tarefasFiltradas.length === 0) {
        const aviso = document.createElement("p");
        aviso.className = "estado-lista";
        aviso.textContent = tarefas.length === 0
            ? "Você ainda não cadastrou tarefas. Comece adicionando uma acima!"
            : "Nenhuma tarefa encontrada para essa busca.";
        listaTarefas.appendChild(aviso);
        return;
    }

    tarefasFiltradas.forEach((tarefa) => {
        const card = document.createElement("article");
        card.className = "tarefa-card";

        const informacoes = document.createElement("div");
        informacoes.className = "tarefa-info";

        const titulo = document.createElement("h3");
        titulo.className = "tarefa-titulo";
        titulo.textContent = tarefa.titulo;

        const detalhe = document.createElement("p");
        detalhe.className = "tarefa-detalhe";
        detalhe.textContent = tarefa.materia + " • Entrega: " + formatarData(tarefa.data_entrega);

        informacoes.append(titulo, detalhe);

        if (tarefa.descricao) {
            const descricao = document.createElement("p");
            descricao.className = "tarefa-descricao";
            descricao.textContent = tarefa.descricao;
            informacoes.appendChild(descricao);
        }

        const status = document.createElement("span");
        status.className = "tarefa-status";
        status.textContent = tarefa.status;

        card.append(informacoes, status);
        listaTarefas.appendChild(card);
    });
}

async function carregarTarefas() {
    listaTarefas.innerHTML = '<p class="estado-lista">Buscando tarefas...</p>';
    contadorLista.textContent = "Carregando...";

    try {
        const resposta = await fetch(API_URL);

        if (!resposta.ok) {
            throw new Error("Não foi possível consultar as tarefas.");
        }

        tarefas = await resposta.json();
        desenharTarefas();
    } catch (erro) {
        listaTarefas.innerHTML = "";
        const aviso = document.createElement("p");
        aviso.className = "estado-lista";
        aviso.textContent = "Não foi possível conectar à API. Confira se o Flask está iniciado.";
        listaTarefas.appendChild(aviso);
        contadorLista.textContent = "Sem conexão";
    }
}

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const dados = {
        titulo: document.getElementById("titulo").value.trim(),
        materia: document.getElementById("materia").value.trim(),
        data_entrega: document.getElementById("data_entrega").value,
        descricao: document.getElementById("descricao").value.trim()
    };

    if (!dados.titulo || !dados.materia || !dados.data_entrega) {
        mostrarMensagem("Preencha os campos obrigatórios.", "erro");
        return;
    }

    botaoSalvar.disabled = true;
    botaoSalvar.textContent = "Salvando...";
    mostrarMensagem("", "");

    try {
        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();

        if (!resposta.ok) {
            throw new Error(resultado.erro || "Não foi possível salvar a tarefa.");
        }

        formulario.reset();
        await carregarTarefas();
        mostrarMensagem("Tarefa cadastrada com sucesso!", "sucesso");
    } catch (erro) {
        mostrarMensagem(
            erro.message || "Erro ao conectar com o servidor. Confira se o Flask está iniciado.",
            "erro"
        );
    } finally {
        botaoSalvar.disabled = false;
        botaoSalvar.innerHTML = "<span>＋</span> Salvar tarefa";
    }
});

botaoAtualizar.addEventListener("click", carregarTarefas);
campoFiltro.addEventListener("input", desenharTarefas);

// Carrega a lista assim que a página abre.
carregarTarefas();
