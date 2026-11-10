# Organiza+ — Etapa 1

Sistema simples para organizar tarefas escolares.

## Objetivo
Permitir que o aluno registre tarefas, informe a matéria, a data de entrega e acompanhe se estão pendentes ou concluídas.

## Escopo desta entrega
- Modelo UML inicial.
- Estrutura do banco de dados criada.
- Conexão inicial em Python testada.

> Esta pasta contém somente a Etapa 1. As rotas Flask e a interface HTML/CSS/JS ficam para as próximas etapas.

## Requisitos
- Python 3 instalado.
- Não precisa instalar banco de dados: o projeto usa SQLite, que já acompanha o Python.

## Como testar
1. Abra esta pasta no VS Code.
2. Abra o terminal na pasta do projeto.
3. Execute: `python database/conexao.py`
4. A mensagem `Conexão com o banco realizada com sucesso!` confirma que funcionou.

O arquivo `database/organiza_plus.db` será criado automaticamente na primeira execução.

## Estrutura
```text
organiza-mais/
├── README.md
├── database/
│   ├── schema.sql
│   └── conexao.py
└── docs/
    └── modelo_uml.md
```

## Explicação simples
- `tarefas`: tabela que guarda cada tarefa escolar.
- `id`: identifica cada tarefa.
- `titulo`: nome da tarefa.
- `materia`: disciplina relacionada.
- `descricao`: detalhes da atividade.
- `data_entrega`: prazo da tarefa.
- `status`: informa se está pendente ou concluída.

## Tecnologias
- SQLite: banco de dados.
- SQL: criação da tabela.
- Python (`sqlite3`): conexão inicial com o banco.
