# ETAPA 2 — Back-end Python (POO + Flask)

Esta pasta contém a segunda entrega, sem o front-end:
- `app.py`: inicia a API Flask.
- `models/tarefa.py`: classe Tarefa.
- `daos/tarefa_dao.py`: cadastro e consulta no SQLite.
- `routes/tarefa_routes.py`: rotas GET e POST.
- `database/`: conexão e estrutura do banco.
- `requirements.txt`: dependências.

## Como executar
Abra o terminal dentro desta pasta e rode:

```bash
pip install -r requirements.txt
python app.py
```

A API inicia em `http://127.0.0.1:5000`.

## Rotas
- `GET /api/tarefas`: consulta as tarefas.
- `POST /api/tarefas`: cadastra uma tarefa usando JSON.

O front-end não está nesta pasta. Ele fica separado na Etapa 3.
