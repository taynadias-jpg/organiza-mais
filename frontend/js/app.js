// Endereço da API criada na Etapa 2 (Flask).
const API_URL = "/api/tarefas";

const formulario = document.getElementById("form-tarefa");
const lista = document.getElementById("lista-tarefas");
const mensagem = document.getElementById("mensagem");
const filtro = document.getElementById("filtro");
const total = document.getElementById("total-tarefas");
const botaoSalvar = document.getElementById("botao-salvar");

let tarefas = [];

function mostrarTarefas() {
    const termo = filtro.value.trim().toLowerCase();
    const encontradas = tarefas.filter(t =>
        t.titulo.toLowerCase().includes(termo) ||
        t.materia.toLowerCase().includes(termo)
    );

    lista.replaceChildren();
    total.textContent = tarefas.length;

    if (encontradas.length === 0) {
        const aviso = document.createElement("p");
        aviso.className = "vazio";
        aviso.textContent = tarefas.length === 0
            ? "Nenhuma tarefa cadastrada ainda."
            : "Nenhuma tarefa encontrada.";
        lista.appendChild(aviso);
        return;
    }

    encontradas.forEach(tarefa => {
        const card = document.createElement("article");
        card.className = "tarefa-card";

        const info = document.createElement("div");
        const titulo = document.createElement("h3");
        titulo.textContent = tarefa.titulo;

        const detalhe = document.createElement("p");
        detalhe.textContent = tarefa.materia + " • Entrega: " + tarefa.data_entrega.split("-").reverse().join("/");

        info.append(titulo, detalhe);

        if (tarefa.descricao) {
            const descricao = document.createElement("p");
            descricao.textContent = tarefa.descricao;
            info.appendChild(descricao);
        }

        const status = document.createElement("span");
        status.className = "status";
        status.textContent = tarefa.status;

        card.append(info, status);
        lista.appendChild(card);
    });
}

async function carregarTarefas() {
    lista.innerHTML = '<p class="vazio">Carregando tarefas...</p>';
    try {
        const resposta = await fetch(API_URL);
        if (!resposta.ok) throw new Error("Erro ao consultar tarefas.");
        tarefas = await resposta.json();
        mostrarTarefas();
    } catch (erro) {
        lista.innerHTML = '<p class="vazio">Não foi possível conectar. Confira se o Flask está ligado.</p>';
    }
}

formulario.addEventListener("submit", async evento => {
    evento.preventDefault();

    const dados = {
        titulo: document.getElementById("titulo").value.trim(),
        materia: document.getElementById("materia").value.trim(),
        data_entrega: document.getElementById("data_entrega").value,
        descricao: document.getElementById("descricao").value.trim()
    };

    if (!dados.titulo || !dados.materia || !dados.data_entrega) {
        mensagem.textContent = "Preencha os campos obrigatórios.";
        return;
    }

    botaoSalvar.disabled = true;
    mensagem.textContent = "";

    try {
        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();
        if (!resposta.ok) throw new Error(resultado.erro || "Não foi possível salvar.");

        formulario.reset();
        await carregarTarefas();
        mensagem.textContent = "Tarefa cadastrada com sucesso!";
    } catch (erro) {
        mensagem.textContent = erro.message;
    } finally {
        botaoSalvar.disabled = false;
    }
});

document.getElementById("botao-atualizar").addEventListener("click", carregarTarefas);
filtro.addEventListener("input", mostrarTarefas);
carregarTarefas();
