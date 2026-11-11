# Organiza+ — Etapas 1 e 2

Sistema simples para organizar tarefas escolares.

## Objetivo
Permitir que o aluno cadastre tarefas, informe a matéria, a data de entrega e acompanhe os registros.

## Etapa 1 — Banco de dados
- Modelo UML inicial em `docs/modelo_uml.md`.
- Tabela `tarefas` criada em SQLite.
- Conexão inicial em Python em `database/conexao.py`.

## Etapa 2 — Back-end Python
- Classe `Tarefa` para representar uma tarefa.
- Classe `TarefaDAO` para cadastrar e consultar tarefas no banco.
- API Flask com rotas GET e POST.
- Validação dos campos obrigatórios e da data.
- CORS habilitado para integração com o front-end na próxima etapa.

## Como instalar e executar
1. Instale Python 3.
2. Abra o terminal na pasta do projeto.
3. (Opcional) Crie um ambiente virtual: `python -m venv .venv`.
4. No Windows, ative com: `.venv\Scripts\activate`.
5. Instale as dependências: `pip install -r requirements.txt`.
6. Inicie a API: `python app.py`.
7. Acesse `http://127.0.0.1:5000/`.

O banco `database/organiza_plus.db` e a tabela são criados automaticamente quando a API inicia.

## Rotas da API

### Consultar tarefas
- Método: `GET`
- Endereço: `http://127.0.0.1:5000/api/tarefas`
- Retorna as tarefas cadastradas em JSON.

### Cadastrar tarefa
- Método: `POST`
- Endereço: `http://127.0.0.1:5000/api/tarefas`
- Cabeçalho: `Content-Type: application/json`
- Exemplo de corpo:

```json
{
  "titulo": "Estudar para a prova",
  "materia": "Matemática",
  "descricao": "Revisar os exercícios",
  "data_entrega": "2026-11-13"
}
```

Se o cadastro funcionar, a API responde com status HTTP 201 e os dados da tarefa.

## Estrutura
```text
organiza-mais/
├── app.py
├── requirements.txt
├── database/
│   ├── schema.sql
│   └── conexao.py
├── models/
│   ├── __init__.py
│   └── tarefa.py
├── daos/
│   ├── __init__.py
│   └── tarefa_dao.py
├── routes/
│   ├── __init__.py
│   └── tarefa_routes.py
└── docs/
    └── modelo_uml.md
```

## Explicação simples para apresentação
- **Model:** a classe `Tarefa` representa uma tarefa e seus dados.
- **DAO:** a classe `TarefaDAO` conversa com o banco para cadastrar e listar tarefas.
- **Flask:** cria a API e recebe as requisições.
- **GET:** consulta as tarefas.
- **POST:** cadastra uma tarefa.
- **SQLite:** guarda os dados mesmo depois que o programa é fechado.

## Limite desta etapa
Esta entrega contém o back-end. A interface final em HTML, CSS e JavaScript será feita na etapa final.
