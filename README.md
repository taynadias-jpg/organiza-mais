# Agendaê

O Agendaê é um projeto que desenvolvi para ajudar na organização das tarefas escolares. A ideia é ter um lugar simples para anotar atividades, colocar a matéria e a data de entrega, e depois conseguir consultar tudo sem precisar ficar procurando em vários lugares.

## O que o site faz

- Cadastra uma tarefa com título, matéria e data de entrega.
- Permite colocar uma descrição, se precisar.
- Mostra as tarefas que já foram cadastradas.
- Tem uma busca para encontrar uma tarefa pelo nome ou pela matéria.

## Como o projeto foi dividido

Para ficar mais fácil de encontrar os arquivos, separei o projeto em três pastas:

### Parte 1 — Banco de dados
Pasta: `etapa-1-banco-de-dados`

Aqui estão o modelo UML, o arquivo SQL que cria a tabela e o código de conexão com o banco SQLite.

### Parte 2 — Back-end
Pasta: `etapa-2-backend`

Nesta parte ficam o Python, a classe Tarefa, o DAO e as rotas feitas com Flask. É o back-end que recebe os dados do site e conversa com o banco.

### Parte 3 — Front-end
Pasta: `etapa-3-frontend`

Aqui está a parte que aparece para quem usa o site:
- `index.html`: estrutura da página.
- `css/style.css`: cores e organização visual.
- `js/app.js`: ações do formulário, busca e comunicação com a API usando Fetch.

## Como executar

Primeiro, abra um terminal dentro da pasta `etapa-2-backend` e instale as dependências:

```bash
pip install -r requirements.txt
```

Depois, inicie o servidor Flask:

```bash
python app.py
```

Deixe esse terminal aberto. Em outro terminal, na pasta principal do projeto, inicie o servidor do front-end:

```bash
python -m http.server 5500
```

Abra no navegador:

```
http://127.0.0.1:5500/etapa-3-frontend/
```

O Flask precisa continuar funcionando enquanto o site estiver aberto, porque é ele que recebe os cadastros e consulta as tarefas.

## Tecnologias utilizadas

- HTML, CSS e JavaScript
- Python e Flask
- SQLite
- Fetch API

Este projeto foi feito como atividade escolar integrada de Desenvolvimento de Websites, Programação Orientada a Objetos e Banco de Dados.
