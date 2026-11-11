import sqlite3
from database.conexao import conectar, inicializar_banco
from models.tarefa import Tarefa

class TarefaDAO:
    """Faz o cadastro e a consulta das tarefas no banco."""
    def __init__(self):
        inicializar_banco()

    def listar_todas(self):
        with conectar() as conexao:
            conexao.row_factory = sqlite3.Row
            registros = conexao.execute(
                """SELECT id, titulo, materia, descricao, data_entrega, status
                   FROM tarefas ORDER BY id DESC"""
            ).fetchall()
        return [Tarefa(
            id=r["id"], titulo=r["titulo"], materia=r["materia"],
            descricao=r["descricao"] or "", data_entrega=r["data_entrega"],
            status=r["status"]
        ) for r in registros]

    def cadastrar(self, tarefa):
        with conectar() as conexao:
            cursor = conexao.execute(
                """INSERT INTO tarefas
                   (titulo, materia, descricao, data_entrega, status)
                   VALUES (?, ?, ?, ?, ?)""",
                (tarefa.titulo, tarefa.materia, tarefa.descricao,
                 tarefa.data_entrega, tarefa.status)
            )
            tarefa.id = cursor.lastrowid
        return tarefa
