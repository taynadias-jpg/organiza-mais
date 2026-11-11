# Organiza+ — Projeto Integrado DWS + POO + BD

Sistema web simples para organizar tarefas escolares.

## Organização das entregas

O projeto está separado em três partes, seguindo as etapas solicitadas:

### Parte 1 — Etapa 1: Modelagem e banco de dados
- Modelo UML: `docs/modelo_uml.md`
- Script SQL: `database/schema.sql`
- Conexão SQLite: `database/conexao.py`
- Resumo: `entregas/parte-1-etapa-1.md`

### Parte 2 — Etapa 2: Back-end Python
- Classe: `models/tarefa.py`
- DAO: `daos/tarefa_dao.py`
- Rotas Flask: `routes/tarefa_routes.py`
- Aplicação: `app.py`
- Dependências: `requirements.txt`
- Resumo: `entregas/parte-2-etapa-2.md`

### Parte 3 — Etapa 3: Front-end integrado
- Página: `frontend/index.html`
- Estilo: `frontend/css/style.css`
- JavaScript e Fetch: `frontend/js/app.js`
- Resumo: `entregas/parte-3-etapa-3.md`

## Como executar o sistema completo

É necessário ter Python 3 instalado.

**Terminal 1 — iniciar o back-end:**

```bash
pip install -r requirements.txt
python app.py
```

Deixe esse terminal aberto. A API ficará em `http://127.0.0.1:5000`.

**Terminal 2 — abrir o front-end:**

Na pasta principal do projeto, execute:

```bash
python -m http.server 5500
```

Abra `http://127.0.0.1:5500/frontend/` no navegador.

Outra opção é abrir `frontend/index.html` pelo Live Server do VS Code. O Flask deve continuar ligado.

## O que o sistema faz
- Cadastra tarefas com título, matéria, data de entrega e descrição.
- Consulta as tarefas salvas no banco SQLite.
- Atualiza a lista depois do cadastro sem recarregar a página.
- Permite pesquisar pelo título ou pela matéria.
- Mostra mensagens quando ocorre algum erro de conexão ou preenchimento.

## Rotas da API
- `GET /api/tarefas`: consulta todas as tarefas.
- `POST /api/tarefas`: cadastra uma tarefa em JSON.

## Explicação simples
- **HTML:** estrutura da página.
- **CSS:** aparência da página.
- **JavaScript:** controla o formulário e a lista.
- **Fetch:** envia e recebe dados da API.
- **Flask:** recebe as requisições do navegador.
- **POO:** a classe `Tarefa` representa cada tarefa.
- **DAO:** faz a comunicação com o banco.
- **SQLite:** armazena os registros.

Consulte os arquivos dentro de `entregas/` para ver o que foi feito em cada parte.
