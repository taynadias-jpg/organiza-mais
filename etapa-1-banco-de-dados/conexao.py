"""
Conexão inicial do Agendaê com o banco SQLite.
A conexão é aberta automaticamente e a tabela é criada se ainda não existir.
"""

from pathlib import Path
import sqlite3

PASTA_ATUAL = Path(__file__).resolve().parent
CAMINHO_BANCO = PASTA_ATUAL / "organiza_plus.db"
CAMINHO_SCHEMA = PASTA_ATUAL / "schema.sql"


def conectar():
    """Abre e retorna uma conexão com o banco de dados."""
    return sqlite3.connect(CAMINHO_BANCO)


def inicializar_banco():
    """Cria a tabela definida no arquivo schema.sql."""
    with conectar() as conexao:
        comando_sql = CAMINHO_SCHEMA.read_text(encoding="utf-8")
        conexao.executescript(comando_sql)


if __name__ == "__main__":
    inicializar_banco()
    with conectar() as conexao:
        conexao.execute("SELECT 1")
    print("Conexão com o banco realizada com sucesso!")
