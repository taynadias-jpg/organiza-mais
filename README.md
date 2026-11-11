# Organiza+ — Projeto Integrado DWS + POO + BD

Sistema simples para organizar tarefas escolares. Os arquivos estão separados conforme o que o professor pede em cada etapa.

## Parte 1 — Etapa 1: Modelagem e banco de dados
Pasta: `etapa-1-banco-de-dados/`

- `modelo_uml.md`: diagrama UML.
- `schema.sql`: criação da tabela.
- `conexao.py`: conexão inicial com SQLite.

## Parte 2 — Etapa 2: Back-end Python
Pasta: `etapa-2-backend/`

- `app.py`: aplicação Flask.
- `models/tarefa.py`: classe Tarefa.
- `daos/tarefa_dao.py`: cadastro e consulta no banco.
- `routes/tarefa_routes.py`: rotas GET e POST.
- `database/`: conexão e estrutura da tabela.
- `requirements.txt`: bibliotecas necessárias.

## Parte 3 — Etapa 3: Front-end (Entrega Final)
Pasta: `etapa-3-frontend/`

- `index.html`: estrutura da página e formulário.
- `css/style.css`: aparência e responsividade.
- `js/app.js`: JavaScript e integração com a API usando Fetch.

## Como executar o sistema completo

**1. Inicie o back-end**

Abra um terminal dentro da pasta `etapa-2-backend` e execute:

```bash
pip install -r requirements.txt
python app.py
```

Deixe o servidor Flask aberto no terminal.

**2. Inicie o front-end**

Abra outro terminal na pasta principal do projeto e execute:

```bash
python -m http.server 5500
```

**3. Abra no navegador**

Acesse `http://127.0.0.1:5500/etapa-3-frontend/`.

O front-end consulta as tarefas pela rota GET e envia novos cadastros pela rota POST. O back-end salva os dados no banco SQLite.

## O que cada tecnologia faz
- **HTML:** estrutura da página.
- **CSS:** aparência da página.
- **JavaScript:** controla o formulário e a lista.
- **Fetch:** troca dados entre o front-end e a API.
- **Flask:** recebe as requisições.
- **POO:** organiza o código em classes.
- **DAO:** faz o acesso ao banco.
- **SQLite:** guarda as tarefas.

Cada pasta de etapa possui um README com sua própria explicação.
